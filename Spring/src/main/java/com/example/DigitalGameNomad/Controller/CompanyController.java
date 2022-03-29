package com.example.DigitalGameNomad.Controller;


import com.amazonaws.util.IOUtils;
import com.example.DigitalGameNomad.DTO.CompanyDTO;
import com.example.DigitalGameNomad.Entity.Companyinfo;
import com.example.DigitalGameNomad.Entity.ImageInfo;
import com.example.DigitalGameNomad.Entity.PostInfo;
import com.example.DigitalGameNomad.Entity.UserInfo;
import com.example.DigitalGameNomad.Repository.CompanyRepository;
import com.example.DigitalGameNomad.Repository.ImageInfoRepository;
import com.example.DigitalGameNomad.Repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Controller
@CrossOrigin("*")
public class CompanyController {

    @Autowired
    UserInfoRepository userInfoRepository;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    ImageInfoRepository imageInfoRepository;


    //////////////////////
    //기업등록 조회 (get)//
    //////////////////////
    @CrossOrigin
    @GetMapping(value = "/requestedCompany")
    @ResponseBody
    public List<Companyinfo> requestedUser() {
        List<Companyinfo> companylist = companyRepository.findAll();
        System.out.println(companylist);

        return companylist;
    }


    //////////////////////
    //기업등록 상세조회 이미지(get)//
    //////////////////////
    @CrossOrigin
    @GetMapping(value = "/requestedCompanyimage/{id}")
    @ResponseBody
    public byte[] requestedCompanyimage(@PathVariable("id") Long id) {


        Companyinfo company = companyRepository.findById(id).get();

//        Companyinfo companylist = companyRepository.findBycompanykey(id);
        System.out.println(company);


        ImageInfo imageInfo = imageInfoRepository.findBycompanykey(company);

       String imageurl = imageInfo.getImage_url();


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
        String objectName = imageurl;
        byte[] byteArray = null;

// download object
        try {
            S3Object s3Object = s3.getObject(bucketName, objectName);
            byteArray = IOUtils.toByteArray(s3Object.getObjectContent());
            byteArray = Base64.getEncoder().encode(byteArray);
        } catch (Exception e) {
            e.printStackTrace();
        }

//        System.out.println(imageInfo);


//
//            if (imageInfo != null) {
//                companyarr.add(imageInfo);
//            } else {
//                companyarr.add(companylist);
//            }


        return byteArray;
    }


    //////////////////////
    //기업등록 상세조회(get)//
    //////////////////////
    @CrossOrigin
    @GetMapping(value = "/requestedCompany/{id}")
    @ResponseBody
    public List<Companyinfo> requestedCompany(@PathVariable("id") Long id) {
        List<Companyinfo> companylist = companyRepository.findBycompanykey(id);
        System.out.println(companylist);

        return companylist;
    }

    //////////////////////
    //기업등록 신청 (post)//
    //////////////////////
    @PostMapping(value = "/companysiginup", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    @ResponseBody
    public String companysiginup(CompanyDTO dto,@RequestParam("userkey")Long userkey , @RequestPart(required = false) MultipartFile file) throws IOException, SQLException, IllegalStateException
    {
//        System.out.println("유저키는 -> "+ userkey);
//        System.out.println("dto로 받은 값은-> "+ dto.toString());
        String Image_url = null;
        Companyinfo company = dto.toEntity();
        System.out.println("파일 들어옴?->"+ file);

//        System.out.println("엔티티변환->"+ company);

        UserInfo userinfo = userInfoRepository.findByUserKey(userkey);
        company.setUserKey(userinfo);

        companyRepository.save(company);



//        if(file != null) {
//            final String endPoint = "https://kr.object.ncloudstorage.com";
//            final String regionName = "kr-standard";
//            final String accessKey = "6DD8076FB38703B7AF7C";
//            final String secretKey = "D927782903E0E0411FEE175C50B2532C1E62D2B5";
//
//// S3 client
//            final AmazonS3 s3 = AmazonS3ClientBuilder.standard()
//                    .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
//                    .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
//                    .build();
//
//            String bucketName = "imageserv";
//            String objectName = Image_url;
//            imageInfoRepository.delete(imageInfoRepository.findByCompanykey(company));
//
//// delete object
//            try {
//                s3.deleteObject(bucketName, objectName);
//            } catch (AmazonS3Exception e) {
//                e.printStackTrace();
//            } catch (SdkClientException e) {
//                e.printStackTrace();
//            }
//        }

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
            imageInfo.setCompanykey(company);
            imageInfoRepository.save(imageInfo);
        }



        return "기업등록 신청완료";
    }

    ///////////////
    //기업등록 수정하기//
    ///////////////

    @PostMapping("/companyupdate/{id}")
    @ResponseBody
    @Transactional
    public String companyupdate(@PathVariable("id") Long id , CompanyDTO dto) throws Exception{
        System.out.println("companyupdate dto 로 받은 값은? -> " + dto.toString());
        System.out.println("글번호는 -> " + id);

        Companyinfo companyinfo = companyRepository.findById(id).get();
        Companyinfo company = dto.toEntity();

        if(company.getCompany_pass() == 1) {
            List<Companyinfo> arr = companyRepository.findAll();
            int sum = 0;
            for(Companyinfo arr_1 : arr) {
                if(arr_1.getCompany_pass() == 1 || arr_1.getCompany_pass() == 3) {
                    sum++;
                }
            }
         
            if(sum >= 6) {
                throw new Exception("승인기업이 6개가 넘습니다.");
            }
        }

        companyinfo.setCompany_pass(company.getCompany_pass());
        companyinfo.setCompany_deny(company.getCompany_deny());
        companyRepository.flush();

        return "기업등록 수정완료";
    }

    //////////////////////
    //기업등록 삭제 (delete)//
    //////////////////////
    @CrossOrigin
    @Transactional
    @GetMapping(value = "/comapnydelete/{id}")
    @ResponseBody
    public void comapnydelete(@PathVariable("id") Long id) {

        //1 BOARD 테이블에서 BNUMBER가 bnum 인 데이터를 가져온다
        System.out.println("지울 기업데이터 번호는 = "+ id);

        companyRepository.deleteByCompanykey(id);
    }

    //////////////////////
    //기업등록 조회(신청 제한) (get)//
    //////////////////////
    @CrossOrigin("*")
    @GetMapping(value = "/requestedcompanyUser/{unum}")
    @ResponseBody
    public List<Companyinfo> requestedcompanyUser(@PathVariable("unum")Long unum) {
        System.out.println("유저넘버는 "+unum);
        UserInfo userinfo = userInfoRepository.findByUserKey(unum);
        System.out.println("유저정보"+ userinfo.toString());
        Long ukey =userinfo.getUserKey();

        List<Companyinfo> companylist = companyRepository.findByuserKey_userKey(ukey);
        System.out.println("정보는->"+companylist);

        if(companylist.toString() == null ){
            System.out.println("값이 없어요");
        }
        return companylist;

    }

}
