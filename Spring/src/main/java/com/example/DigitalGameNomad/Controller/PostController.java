package com.example.DigitalGameNomad.Controller;

import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.util.IOUtils;
import com.example.DigitalGameNomad.Entity.*;
import com.example.DigitalGameNomad.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.*;

@RestController
@CrossOrigin("*")
@Transactional
public class PostController {

    @Autowired
    UserInfoRepository userInfoRepository;
    @Autowired
    PostInfoRepository postInfoRepository;
    @Autowired
    ImageInfoRepository imageInfoRepository;
    @Autowired
    CommentInfoRepository commentInfoRepository;
    @Autowired
    CompanyRepository companyRepository;

    //게시글 작성
    @PostMapping(value = "/createBoard", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public String createBoard(@RequestPart(required = true) HashMap<String,Object> userData, @RequestPart(required = false) MultipartFile file) throws IOException, SQLException, IllegalStateException {

        System.out.println("post_num" + userData.get("post_num"));
        PostInfo postInfo = new PostInfo();
        String Image_url = null;
        if(userData.get("post_num") != null) {
            postInfo = postInfoRepository.findById(Long.parseLong((String)userData.get("post_num"))).get();
            try {
                ImageInfo imageInfo = imageInfoRepository.findByPostKey(postInfo);
                Image_url = imageInfo.getImage_url();
            }catch (Exception e) {

            }
        }
        String postTitle = (String)userData.get("post_title");
        postInfo.setPostTitle(postTitle);
        postInfo.setPost_text((String)userData.get("post_text"));
        postInfo.setPost_date((String)userData.get("post_date"));
        postInfo.setPost_topic((String)userData.get("post_topic"));
        if((Integer)userData.get("post_score") != null) {
            postInfo.setPost_score(Integer.valueOf((int)userData.get("post_score")));
        }

        System.out.println((String)userData.get("game_name"));
        if((String)userData.get("game_name") != null) {
            postInfo.setGame_name((String)userData.get("game_name"));
        }

        System.out.println(postInfo.getPostTitle());
        int user_key = (Integer)userData.get("user_key");
        Long long_user_key = Long.valueOf(user_key);
        UserInfo u1 = userInfoRepository.findByUserKey(long_user_key);
        postInfo.setUserKey(u1);

        postInfoRepository.save(postInfo);

        if(((boolean) userData.get("original") == false && Image_url != null) || ((boolean) userData.get("original") == true && Image_url != null && file != null)) {
            final String endPoint = "https://kr.object.ncloudstorage.com";
            final String regionName = "kr-standard";
            final String accessKey = "6DD8076FB38703B7AF7C";
            final String secretKey = "D927782903E0E0411FEE175C50B2532C1E62D2B5";

// S3 client
            final AmazonS3 s3 = AmazonS3ClientBuilder.standard()
                    .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
                    .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                    .build();

            String bucketName = "imageserv";
            String objectName = Image_url;
            imageInfoRepository.delete(imageInfoRepository.findByPostKey(postInfo));

// delete object
            try {
                s3.deleteObject(bucketName, objectName);
            } catch (AmazonS3Exception e) {
                e.printStackTrace();
            } catch (SdkClientException e) {
                e.printStackTrace();
            }
        }

        if (file != null) {

            final String endPoint = "https://kr.object.ncloudstorage.com";
            final String regionName = "kr-standard";
            final String accessKey = "6DD8076FB38703B7AF7C";
            final String secretKey = "D927782903E0E0411FEE175C50B2532C1E62D2B5";

            // S3 client
            final AmazonS3 s3 = AmazonS3ClientBuilder.standard()
                    .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
                    .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                    .build();

            String bucketName = "imageserv";

            // upload local file
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(MediaType.IMAGE_PNG_VALUE);
            metadata.setContentLength(file.getSize());

            //Random
            double dValue = Math.random() * 1000000000;
            long iValue = (long) (dValue);

            try {
                s3.putObject(new PutObjectRequest(bucketName, Long.toString(iValue), file.getInputStream(), metadata));
            } catch (AmazonS3Exception e) {
                e.printStackTrace();
            } catch (SdkClientException e) {
                e.printStackTrace();
            }

            ImageInfo imageInfo = new ImageInfo();
            imageInfo.setImage_url(Long.toString(iValue));
            imageInfo.setPostKey(postInfo);
            imageInfoRepository.save(imageInfo);
        }

        return "success";
    }


    ////////////////
    //게시판 글 조회//
    ////////////////
    @GetMapping("/boardshow")
    public List<Object> boardshow(){
        List<Object> postarr = new ArrayList<>();
        List<PostInfo> postboard = postInfoRepository.findAll();
        for(PostInfo postInfo : postboard) {
            ImageInfo imageInfo = imageInfoRepository.findByPostKey(postInfo);
            if(imageInfo != null){
                postarr.add(imageInfo);
            }
            else {
                postarr.add(postInfo);
            }
        }

        return postarr ;
    }

    @PostMapping("/imageshow")
    public byte[] imageshow(@RequestBody(required = true) HashMap<String, Object> image) {
        System.out.println(image);
        final String endPoint = "https://kr.object.ncloudstorage.com";
        final String regionName = "kr-standard";
        final String accessKey = "6DD8076FB38703B7AF7C";
        final String secretKey = "D927782903E0E0411FEE175C50B2532C1E62D2B5";

// S3 client
        final AmazonS3 s3 = AmazonS3ClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                .build();

        String bucketName = "imageserv";
        String objectName = (String)image.get("image_url");
        byte[] byteArray = null;

// download object
        try {
            S3Object s3Object = s3.getObject(bucketName, objectName);
            byteArray = IOUtils.toByteArray(s3Object.getObjectContent());
            byteArray = Base64.getEncoder().encode(byteArray);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return byteArray;
    }

    @PostMapping("/deleteBoard")
    public String deleteBoard(@RequestBody(required = true) HashMap<String, Object> board) {
        System.out.println(board);
        int PostKey = (int)board.get("postKey");
        String Image_url = (String)board.get("image_url");
        PostInfo postInfo = postInfoRepository.findById(Long.valueOf(PostKey)).get();
        postInfoRepository.delete(postInfo);

        if(Image_url != null) {
            final String endPoint = "https://kr.object.ncloudstorage.com";
            final String regionName = "kr-standard";
            final String accessKey = "6DD8076FB38703B7AF7C";
            final String secretKey = "D927782903E0E0411FEE175C50B2532C1E62D2B5";

// S3 client
            final AmazonS3 s3 = AmazonS3ClientBuilder.standard()
                    .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
                    .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                    .build();

            String bucketName = "imageserv";
            String objectName = Image_url;

// delete object
            try {
                s3.deleteObject(bucketName, objectName);
            } catch (AmazonS3Exception e) {
                e.printStackTrace();
            } catch (SdkClientException e) {
                e.printStackTrace();
            }
        }

        return "success";
    }

    @PostMapping("/boardCount")
    public String boardCount(@RequestBody(required = true) HashMap<String, Object> board) {
        int PostKey = (int)board.get("postKey");
        System.out.println(PostKey);
        PostInfo postInfo = postInfoRepository.findById(Long.valueOf(PostKey)).get();
        postInfo.setPost_view(postInfo.getPost_view() + 1);
        postInfoRepository.flush();
        return "success";
    }

    @GetMapping("/allcomments")
    public List<CommentInfo> allcomments() {
        List<CommentInfo> list = commentInfoRepository.findAll();
        return list;
    }

    @PostMapping("/addreply")
    public String addreply(@RequestBody(required = true) HashMap<String, Object> comment) {
        CommentInfo commentInfo = new CommentInfo();
        commentInfo.setComment_date((String)comment.get("post_date"));
        commentInfo.setComment_text((String)comment.get("context"));
        PostInfo postInfo = postInfoRepository.findById(Long.valueOf((String)comment.get("postKey"))).get();
        commentInfo.setPostKey(postInfo);
        UserInfo userInfo = userInfoRepository.findById(Long.valueOf((int)comment.get("userKey"))).get();
        commentInfo.setUserKey(userInfo);
        commentInfoRepository.save(commentInfo);

        return "success";
    }

    @PostMapping("/updatereply")
    public String updatereply(@RequestBody(required = true) HashMap<String, Object> comment) {
        CommentInfo commentInfo = commentInfoRepository.findById(Long.valueOf((String)comment.get("commentKey"))).get();
        commentInfo.setComment_text((String)comment.get("context"));
        commentInfo.setComment_date((String)comment.get("post_date"));
        commentInfoRepository.flush();

        return "success";
    }

    @PostMapping("/deletereply")
    public String deletereply(@RequestBody(required = true) HashMap<String, Object> comment) {
        CommentInfo commentInfo = commentInfoRepository.findById(Long.valueOf((String)comment.get("commentKey"))).get();
        commentInfoRepository.delete(commentInfo);

        return "success";
    }

    @GetMapping("/allcompany")
    public List<Companyinfo> allcompany() {
        List<Companyinfo> arr = companyRepository.findAll();
        return arr;
    }

}
