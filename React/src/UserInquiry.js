import { Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; 
import { useDispatch, useSelector } from "react-redux";
import PhonenumberChange from './PhonenumberChange';
import PasswordChange from "./PasswordChange";
import Login from './Login';
import "./UserInquiry.css"

const UserInquiry = (props) => {
    const user = useSelector(state => state.login);
    const dispatch = useDispatch();
    const [userKey, setUserKey] = useState(null);
    const [userID, setUserID] = useState(null);
    const [userPW, setuserPW] = useState(null);
    const [userName, setuserName] = useState(null);
    const [userPhone, setuserPhone] = useState(null);
    const [userGrade, setuserGrade] = useState(null);

    useEffect(() => {
        const URL = "http://49.50.174.251:8088/showlogin";
        const postData = {
            loginUserKey: userKey,
        };
        axios
        .post(URL, postData) 
        .then ( response => {
            dispatch( { type: "login", data: response.data } );
        })
        .catch( error => {
            console.log(error);
        });
    }, [userKey]);

    useEffect(()=>{
        setUserKey(user.loginUserKey);
        setUserID(user.loginUserId);
        setuserPW(user.loginUserPw.substring(0,2) + '*'.repeat(user.loginUserPw.length-2));
        setuserName(user.loginUserName);
        setuserPhone(user.loginUserPhone);
        setuserGrade(user.loginUserGrade);
      }, [user]);

    let grade;
    
    if(userGrade === 1){
        grade = "운영자";
    }else if(userGrade === 2){
        grade = "기업회원";
    }else if(userGrade === 3){
        grade = "일반회원";
    }



    return (
        <div className="UserInquiry">
          <div className="UserInquiry-header">
            <h1>회원정보</h1>
          </div>
    
          <div className="UserInquiry-main">
            <ul className="UserInquiry-nav">
              <li className="UserInquiry-title-name">이름</li>
              <li className="UserInquiry-info">{userName}</li>
            </ul>
    
            <hr className="UserInquiry-hr" />
    
            <ul className="UserInquiry-nav">
              <li className="UserInquiry-title">아이디</li>
              <li className="UserInquiry-info">{userID}</li>
            </ul>
    
            <hr className="UserInquiry-hr" />
    
            <ul className="UserInquiry-nav">
              <li className="UserInquiry-title">비밀번호</li>
              <li className="UserInquiry-info">{userPW}</li>
              <button className="UserInquiry-passwordchange">
                <Link to="/PasswordChange">변경</Link>
              </button>
            </ul>
    
            <hr className="UserInquiry-hr" />
    
            <ul className="UserInquiry-nav">
              <li className="UserInquiry-title">휴대폰 번호</li>
              <li className="UserInquiry-info">{userPhone}</li>
              <button className="UeserInquiry-modify">
                <Link to="./PhonenumberChange">수정</Link>
              </button>
            </ul>
    
            <hr className="UserInquiry-hr" />
    
            <ul className="UserInquiry-nav">
              <li className="UserInquiry-title">회원 등급</li>
              <li className="UserInquiry-info">{grade}</li>
            </ul>
    
            <div className="UserInquiry-button">
              <button className="UserInquiry-button-text">
                <Link to="./">메인으로</Link>
              </button>
            </div>
          </div>
    
          <Switch>
            <Route path="/PasswordChange" component={PasswordChange} />
            <Route path="/PhonenumberChange" component={PhonenumberChange} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      );
    };

export default UserInquiry;