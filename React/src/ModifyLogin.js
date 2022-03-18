import { Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";
import DGN2 from './imgs/DGN2.png';
import "./ModifyLogin.css";

import UserInquiry from './UserInquiry';
import { useSelector } from "react-redux";
import $ from 'jquery';


import "./ModifyLogin.css"

const ModifyLogin = () => {

    const user = useSelector(state => state.login);
    const [password, setPassword] = useState(null);
    const nameInput = useRef();

    useEffect(() => {
        setPassword(user.loginUserPw);
    }, [user])

    const login = () => {
        if(nameInput.current.value == password) {
            window.location.replace("http://digitalgamenomad.cf/UserInquiry");
        }
        else {
            $("#input").val("");
            alert("비밀번호를 잘못 입력하셨습니다.");
        }
    }

    return (
        <div className='modifylogin'>
            <div>
                <img src={DGN2} className='modifylogin-logo' alt="logo" />
            </div>

            <div>
                <input type="password" id="input" className='modifylogin-login' placeholder='비밀번호를 입력해주세요.' ref={nameInput} />
            </div>


            <button className='modify-button' onClick={login} >
                🔒 로그인
            </button>


            <Switch>
                <Route path="/UserInquiry" component={UserInquiry} />
            </Switch>
        </div>
    )
}

export default ModifyLogin;