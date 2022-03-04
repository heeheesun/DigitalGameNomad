import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios';
import "./Register.css";

function Register() {

    const userId = useRef('');
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    
    
    useEffect(() => {
        console.log(userId.current);
    }, [userId.current]);



    const register = () => {
        Axios.post('http://localhost3001/register', {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };


    return (
        <div className="register">
            <div className="registration">
                <div>
                    <h1 className="register-header">회원가입</h1>
                    <hr />

                    <div className="register-id">
                        <label htmlFor="inputId" className="register-text">아이디</label>
                        <input id="inputId" className="register-box-id" type="text" placeholder="  아이디를 입력해주세요."
                        onChange={ (e) => {
                            userId.current = e.target.value;
                        }}
                        />
                    </div>
                </div>

                <div className="register-pw">
                    <label htmlFor="inputPw" className="register-text">비밀번호</label>
                    <input id="inputPw" className="register-box-pw" type="text" placeholder="  비밀번호를 입력해주세요."
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    />
                </div>

                <div className="register-pw-check">
                    <label htmlFor="checkPw" className="register-text">비밀번호 확인</label>
                    <input id="checkPw" className="register-box-pw-check" type="text" placeholder="  비밀번호를 입력해주세요."
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    />
                </div>

                <div className="register-name">
                    <label htmlFor="inputUserName" className="register-text">이름</label>
                    <input id="inputUserName" className="register-box-name" type="text" placeholder="  이름을 입력해주세요."
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}
                    ></input>
                </div>


                <div className="register-grade">
                    <label htmlFor="inputGrade" className="register-text">등급</label>
                    <select id="inputGrade" className="register-box-grade">
                        <option defaultValue={null}>회원 등급</option>
                        <option value="2">기업</option>
                        <option vlaue="3">일반</option>
                    </select>
                </div>

                <hr />

                <div className="register-button">
                    <button className="register-button-box" onClick={register}> 회원가입 </button>
                </div>

            </div>
        </div>

    );
}

export default Register;