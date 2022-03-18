import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios';
import "./Register.css";


function Register() {

    const inputedValue = useRef({
        id: null,
        password: null,
        passwordCheck: null,
        name: null,
        phone: [],
        grade: null
    });

    const [displayRegExText, setDisplayRegExText] = useState({
        id: true,
        idCheckBtn: true,
        idCheckResult: true,
        idCheckText: false,
        password: true,
        passwordCheck: true,
        name: true,
        phone: true,
        grade: true
    });

    const inputUserValue = (e, inputType, reg) => {

        if (inputType === "id") {
            inputedValue.current.id = e.target.value;

            if (registerRegExCheck(reg, inputedValue.current.id)) {
                setDisplayRegExText(value => ({
                    ...value,
                    id: true,
                    idCheckBtn: false,
                    idCheckResult: true
                }));
            }
            else {
                setDisplayRegExText(value => ({
                    ...value,
                    id: false,
                    idCheckBtn: true,
                    idCheckResult: true
                }));
            }
        }
        else if (inputType === "password") {
            inputedValue.current.password = e.target.value;

            registerRegExCheck(reg, inputedValue.current.password) ?
                setDisplayRegExText(value => ({
                    ...value,
                    password: true
                }))
                :
                setDisplayRegExText(value => ({
                    ...value,
                    password: false
                }))

            if (inputedValue.current.passwordCheck) {

                inputedValue.current.password === inputedValue.current.passwordCheck ?
                    setDisplayRegExText(value => ({
                        ...value,
                        passwordCheck: true
                    }))
                    :
                    setDisplayRegExText(value => ({
                        ...value,
                        passwordCheck: false
                    }))
            }
        }
        else if (inputType === "passwordCheck") {
            inputedValue.current.passwordCheck = e.target.value;

            inputedValue.current.password === inputedValue.current.passwordCheck ?
                setDisplayRegExText(value => ({
                    ...value,
                    passwordCheck: true
                }))
                :
                setDisplayRegExText(value => ({
                    ...value,
                    passwordCheck: false
                }))
        }
        else if (inputType === "name") {
            inputedValue.current.name = e.target.value;

            registerRegExCheck(reg, inputedValue.current.name) ?
                setDisplayRegExText(value => ({
                    ...value,
                    name: true
                }))
                :
                setDisplayRegExText(value => ({
                    ...value,
                    name: false
                }))
        }
        else if (inputType === "phone[0]") {
            inputedValue.current.phone[0] = e.target.value;
            const phone = inputedValue.current.phone.join('');

            registerRegExCheck(reg, phone) ?
                setDisplayRegExText(value => ({
                    ...value,
                    phone: true
                }))
                :
                setDisplayRegExText(value => ({
                    ...value,
                    phone: false
                }))
        }
        else if (inputType === "phone[1]") {
            inputedValue.current.phone[1] = e.target.value;
            const phone = inputedValue.current.phone.join('');

            registerRegExCheck(reg, phone) ?
                setDisplayRegExText(value => ({
                    ...value,
                    phone: true
                }))
                :
                setDisplayRegExText(value => ({
                    ...value,
                    phone: false
                }))
        }
        else if (inputType === "phone[2]") {
            inputedValue.current.phone[2] = e.target.value;
            const phone = inputedValue.current.phone.join('');

            registerRegExCheck(reg, phone) ?
                setDisplayRegExText(value => ({
                    ...value,
                    phone: true
                }))
                :
                setDisplayRegExText(value => ({
                    ...value,
                    phone: false
                }))
        }
        else if (inputType === "grade") {
            inputedValue.current.grade = e.target.value;

            inputedValue.current.grade ?
                setDisplayRegExText(value => ({
                    ...value,
                    grade: true
                }))
                :
                setDisplayRegExText(value => ({
                    ...value,
                    grade: false
                }))
        }
    }

    const registerRegExCheck = (regEx, value) => {
        if (regEx.test(value)) {
            return true;
        } else {
            return false;
        }
    }


    const idCheck = () => {
        if (!displayRegExText.id || inputedValue.current.id === null) {
            alert("아이디를 다시 입력해 주세요.");
        }
        else {
            const URL = "http://49.50.174.251:8088/idCheck";
            const postData = {
                id: inputedValue.current.id
            }
            Axios.post(URL, postData)
                .then(response => {
                    if (response.data) {
                        setDisplayRegExText(value => ({
                            ...value,
                            idCheckBtn: true,
                            idCheckText: true,
                            idCheckResult: true
                        }));
                    } else {
                        setDisplayRegExText(value => ({
                            ...value,
                            idCheckBtn: true,
                            idCheckResult: false
                        }));
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }


    const register = () => {

        for (const [key, value] of Object.entries(inputedValue.current)) {
            if (value === null || value == false) {
                alert("회원 정보를 다시 입력해 주세요!");
                return;
            }
        }
        for (const [key, value] of Object.entries(displayRegExText)) {
            if (value === false) {
                alert("회원 정보를 다시 입력해 주세요!");
                return;
            }
        }

        const postData = {
            id: inputedValue.current.id,
            password: inputedValue.current.password,
            name: inputedValue.current.name,
            phone: inputedValue.current.phone.join(''),
            grade: inputedValue.current.grade
        }
        const URL = "http://49.50.174.251:8088/signUp";
        Axios.post(URL, postData)
            .then(response => {
             
                alert("회원가입이 완료되었습니다.!");

                document.querySelectorAll("input").forEach(field => field.value = '');
                document.querySelectorAll("select")[0].selectedIndex = 1;
                document.querySelectorAll("select")[1].selectedIndex = 0;

                setDisplayRegExText(value => ({
                    ...value,
                    idCheckText: false
                }))

                inputedValue.current.id = null;
                inputedValue.current.password = null;
                inputedValue.current.passwordCheck = null;
                inputedValue.current.name = null;
                inputedValue.current.phone = [];
                inputedValue.current.grade = null;

                
                window.location.replace("http://digitalgamenomad.cf/");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="register">
            <div className="registration">
                <div>
                    <h1 className="register-header">회원가입</h1>
                    <hr />

                    <div className="register-id">
                        <label className="register-text">아이디</label>
                        <input className="register-box-id" type="text" placeholder="  아이디를 입력해주세요." maxLength={12}
                            onChange={(e) => {
                                const regExId = /^[A-Za-z0-9+]{4,12}$/;
                                inputUserValue(e, "id", regExId);
                            }}
                        />
                        <button className="register-id-check" onClick={idCheck}>중복 체크</button>
                    </div>
                </div>

                <div className="register-reg-check">
                    <div>
                        <span className={displayRegExText.id ? "hidden" : ""}>아이디는 4~12자 영문, 숫자로 입력해 주세요.</span>
                        <span className={displayRegExText.idCheckBtn ? "hidden" : ""}>아이디 중복체크를 확인해 주세요.</span>
                        <span className={displayRegExText.idCheckResult ? "hidden" : ""}>이미 사용 중인 아이디입니다.</span>

                        <span className={
                            displayRegExText.id && displayRegExText.idCheckBtn &&
                                displayRegExText.idCheckResult && displayRegExText.idCheckText ? "id-check-success" : "hidden"}>
                            사용 가능한 아이디입니다.</span>
                    </div>
                </div>

                <div className="register-pw">
                    <label className="register-text">비밀번호</label>
                    <input className="register-box-pw" type="password" placeholder="  비밀번호를 입력해주세요." maxLength={16}
                        onChange={(e) => {
                            const regExPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
                            inputUserValue(e, "password", regExPw);
                        }}
                    />
                </div>
                <div className="register-reg-check">
                    <div>
                        <span className={displayRegExText.password ? "hidden" : ""}>비밀번호는 8~16자 영문+숫자로 입력해 주세요.</span>
                    </div>
                </div>

                <div className="register-pw-check">
                    <label className="register-text">비밀번호 확인</label>
                    <input className="register-box-pw-check" type="password" placeholder="  비밀번호를 입력해주세요." maxLength={16}
                        onChange={(e) => {

                            inputUserValue(e, "passwordCheck");
                        }}
                    />
                </div>
                <div className="register-reg-check">
                    <div>
                        <span className={displayRegExText.passwordCheck ? "hidden" : ""}>비밀번호를 다시 확인해 주세요.</span>
                    </div>
                </div>

                <div className="register-name">
                    <label className="register-text">이름</label>
                    <input className="register-box-name" type="text" placeholder="  이름을 입력해주세요." maxLength={10}
                        onChange={(e) => {
                            const regExName = /^[가-힣a-zA-Z]+$/;
                            inputUserValue(e, "name", regExName);
                        }}
                    ></input>
                </div>
                <div className="register-reg-check">
                    <div>
                        <span className={displayRegExText.name ? "hidden" : ""}>한글이나 영문으로 입력해 주세요.</span>
                    </div>
                </div>

                <div className="register-number">
                    <label className="register-text-number">전화번호</label>
                    <select className="register-select-number">
                        <option disabled>통신사</option>
                        <option defaultValue={null}>SKT</option>
                        <option>KT</option>
                        <option>LG</option>
                        <option>알뜰</option>
                    </select>
                    <input className="register-box-number" type="text" placeholder="" maxLength={3}
                        onChange={(e) => {
                            const regExPhone = /^[0-9]{11}$/;
                            inputUserValue(e, "phone[0]", regExPhone);
                        }}
                    ></input>-
                    <input className="register-box-number" type="text" placeholder="" maxLength={4}
                        onChange={(e) => {
                            const regExPhone = /^[0-9]{11}$/;
                            inputUserValue(e, "phone[1]", regExPhone);
                        }}

                    ></input>-
                    <input className="register-box-number" type="text" placeholder="" maxLength={4}
                        onChange={(e) => {
                            const regExPhone = /^[0-9]{11}$/;
                            inputUserValue(e, "phone[2]", regExPhone);
                        }}
                    ></input>
                </div>
                <div className="register-reg-check">
                    <div>
                        <span className={displayRegExText.phone ? "hidden" : ""}>핸드폰 번호를 다시 확인해 주세요.</span>
                    </div>
                </div>

                <div className="register-grade">
                    <label className="register-text">등급</label>
                    <select className="register-box-grade" defaultValue={null}
                        onChange={(e) => {

                            inputUserValue(e, "grade");
                        }}>
                        <option value={''}>회원 등급</option>
                        <option value={2}>기업</option>
                        <option value={3}>일반</option>
                    </select>
                </div>
                <div className="register-reg-check">
                    <div>
                        <span className={displayRegExText.grade ? "hidden" : ""}>회원 구분을 선택해 주세요.</span>
                    </div>
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