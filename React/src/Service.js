import { Route, Link, Switch } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";

import "./Service.css";

import Inquiry from "./Inquiry";
import { useSelector } from 'react-redux';
import axios from 'axios';
import Questions from './Questions';

const Service = () => {

    const user = useSelector(state => state.login);
    const [questionList, setQuestionList] = useState(null);
    const [answerList, setAnswerList] = useState(null);

    useEffect(() => {

        if (user.loginUserGrade === 1) {
            const URL = "http://49.50.174.251:8088/waitingQuestions";

            axios.post(URL, null)
                .then(response => {
                    setQuestionList(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else if (Object.keys(user).length) {

            const URL = "http://49.50.174.251:8088/getQuestions";
            const postData = {
                userKey: user.loginUserKey
            }
            axios.post(URL, postData)
                .then(response => {
                    setQuestionList(response.data);
                })
                .catch(error => {
                    console.log(error);
                });

            const URL2 = "http://49.50.174.251:8088/getAnswers";
            axios.post(URL2, postData)
                .then(response => {
                    setAnswerList(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [user]);


    return (
        <div className="service">
            <div className="service-nav">
                <h1>고객센터 {user.loginUserGrade === 1 ? "(관리자)" : null} </h1>
            </div>

            <div className="service-faq">
                <h1>{user.loginUserGrade === 1 ? "대기 중인 질문" : "자주 묻는 질문"} </h1>
            </div>

            <div className="service-faq-main" style={user.loginUserGrade === 1 ? { display: "none" } : null}>

                <details className="service-faq-nav">
                    <summary className="">디지털 게임 노마드가 무엇인가요?</summary>
                    <div className="">
                        <a className="service-faq-qustion">디지털 게임 노마드는 디지털 노마드(Digital Nomad)와 게임(Game)의 합성어로<br/>
시간과 장소에 관계 없이 언제든 박람회를 참관하여 새 게임을 접할 수 있는 서비스를 통칭하는 말입니다.</a>
                    </div>
                </details>

                <hr className="service-hr" />

                <details className="">
                    <summary className="">전시관은 어떻게 입장하나요?</summary>
                    <div className="">
                        <a className="">메인페이지{'>'}입장하기 또는 소개페이지{'>'}전시관 입장하기 로 입장 가능합니다.</a>
                    </div>
                </details>

                <hr className="service-hr" />

                <details className="">
                    <summary className="">게시글은 어떻게 쓰나요?</summary>
                    <div className="">
                        <a className="">일반 회원으로 로그인 하신 후<br/>
자유게시판이나 후기 게시판 목록 하단의 글쓰기 버튼으로 게시판 글 작성이 가능합니다.</a>
                    </div>
                </details>

                {/* <hr className="service-hr" />

                <details className="">
                    <summary className="">질문</summary>
                    <div className="">
                        <a className="">답변</a>
                    </div>
                </details>

                <hr className="service-hr" />

                <details className="">
                    <summary className="">질문</summary>
                    <div className="">
                        <a className="">답변</a>
                    </div>
                </details>

                <hr className="service-hr" />

                <details className="">
                    <summary className="">질문</summary>
                    <div className="">
                        <a className="">답변</a>
                    </div>
                </details>

                <hr className="service-hr" />

                <details className="">
                    <summary className="">질문</summary>
                    <div className="">
                        <a className="">답변</a>
                    </div>
                </details>

                <hr className="service-hr" />

                <details className="">
                    <summary className="">질문</summary>
                    <div className="">
                        <a className="">답변</a>
                    </div>
                </details>

                <hr className="service-hr" />

                <details className="">
                    <summary className="">질문</summary>
                    <div className="">
                        <a className="">답변</a>
                    </div>
                </details> */}

            </div>

            <div className="service-button-nav" style={user.loginUserGrade === 1 ? { display: "none" } : null}>
                <h1>도움이 더 필요하신가요?</h1>
                <a>다음 단계를 진행해주세요. </a>
                <br />
                <Link className='service-inquiry-button'
                    to={user.loginUserKey === undefined ? "/Service" : "/Inquiry"}
                    onClick={() => {
                        if (user.loginUserKey === undefined) {
                            alert("로그인이 필요한 서비스입니다.");
                            return;
                        }
                    }}
                >
                    <button className='service-button'>문의하기</button>
                </Link>
            </div>

            <hr />

            <Questions userKey={user.loginUserKey} userGrade={user.loginUserGrade} questionData={questionList} answerData={answerList} />


            <Switch>
                <Route path="/Inquiry" component={Inquiry} />
            </Switch>
        </div>
    )

}

export default Service;