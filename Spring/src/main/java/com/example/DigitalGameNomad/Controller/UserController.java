package com.example.DigitalGameNomad.Controller;

import com.example.DigitalGameNomad.Entity.UserInfo;
import com.example.DigitalGameNomad.Repository.UserInfoRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Arrays;
import java.util.HashMap;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserInfoRepository userInfoRepository;

    @RequestMapping("/")
    public ModelAndView Home() {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index.html");
        return modelAndView;
    }

    @PostMapping("/idCheck")
    public boolean idCheck(@RequestBody(required = true) HashMap<String, Object> userId) {

        String checkId = (String) userId.get("id");
        UserInfo u1 = userInfoRepository.findByUserId(checkId);
        return u1 == null;
    }


    @PostMapping("/signUp")
    public String signUp(@RequestBody(required = true) HashMap<String, Object> userData) {

        System.out.println(userData);

        String id = (String) userData.get("id");
        String password = (String) userData.get("password");
        String name = (String) userData.get("name");
        String phone = (String) userData.get("phone");
        String level = (String) userData.get("grade");

        UserInfo newUser = new UserInfo();
        newUser.setUser_id(id);
        newUser.setUser_pw(password);
        newUser.setUser_name(name);
        newUser.setUser_phone(phone);
        newUser.setUser_level(Long.valueOf(level));

        userInfoRepository.save(newUser);

        return "Spring ===> 회원 가입 성공!";
    }

    @PostMapping("/login")
    public UserInfo login(@RequestBody(required = true) HashMap<String, String> loginData, HttpServletRequest request,
                         HttpServletResponse response) {

        String loginId = loginData.get("userId");
        String password = loginData.get("password");

        UserInfo loginUser = userInfoRepository.findByUserId(loginId);

        if(loginUser == null) {
            System.out.println("로그인 컨트롤러 ===> 없는 아이디");
            return null;
        }
        else if(!loginUser.getUser_pw().equals(password)) {
            System.out.println("로그인 컨트롤러 ===> 비밀번호 다름");
            return null;
        }
        else {
            System.out.println("로그인 컨트롤러 ===> 로그인 성공");
            return loginUser;
        }
    }

    @PostMapping("/updateUser")
    public String updateUser(@RequestBody(required = true) HashMap<String, String> loginData) {
        String userKey = (String)loginData.get("loginUserKey");
        System.out.println(loginData);
        UserInfo userInfo = userInfoRepository.findById(Long.valueOf(userKey)).get();
        if(loginData.get("loginUserPw") != null) {
            userInfo.setUser_pw((String)loginData.get("loginUserPw"));
        }
        if(loginData.get("loginUserPhone") != null) {
            userInfo.setUser_phone((String)loginData.get("loginUserPhone"));
        }
        userInfoRepository.flush();
        return "success";
    }

    @PostMapping("/showlogin")
    public UserInfo showlogin(@RequestBody(required = true) HashMap<String, String> loginData) {
        String userKey = (String)loginData.get("loginUserKey");
        UserInfo userInfo = userInfoRepository.findById(Long.valueOf(userKey)).get();

        return userInfo;
    }


}



















