import "./BoardReview.css";
import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Board from './Board';
import BoardWriteReview from './BoardWriteReview';
import BoardFreeSee from './BoardFreeSee';
import BoardReviewSee from './BoardReviewSee';
import BoardList from './BoardReviewList';
import { useDispatch, useSelector } from "react-redux";


const Boardreview = () => {

    let login = useSelector(state => state.login);

    return (
        <div className="board">
            <div className="board-nav1">
                <h1 >후기게시판</h1>
            </div>
            <div className="board-navs">
        <ul className="board-navs1">
          <li className="b__nli">
            <Link to="/Board">전체</Link>
          </li>
          <li className="b__nli">
            <Link to="/BoardFree">자유</Link>
          </li>
          <li className="b__nli">
            <Link to="/BoardReview">후기</Link>
          </li>
        </ul>
      </div>
            <hr />

          <BoardList/>
            {/* <hr className="free-hr"/> */}

            {/* <ul className="free-number">
                <li>1</li>
                <li>2</li>
      
                <li>&gt;</li>
                <li>&gt;&gt;</li>
            </ul>
            <div>
                <select className="free-select">
                    <option selected disabled >선택</option>
                    <option>제목</option>
                    <option>내용</option>
                    <option>작성자</option>
                </select>
                <input className="boardsearch" type="text" placeholder=" 내용을 입력해주세요."></input>
                
                <button className="free-button-search">검색</button> */}

                {function(){
                    if(login.loginUserKey && login.loginUserGrade != 2) return (
                    <div className="free-button-nav">
                    <button className="free-button" ><Link to="/BoardWriteReview">글쓰기</Link></button>
                    </div>)
                }()}

            <Switch>
                <Route path="/Board" component={Board} />
                <Route path="/BoardWriteReview" component={BoardWriteReview} />
                <Route path="/BoardFreeSee" component={BoardFreeSee} />
                <Route path="/BoardReviewSee" component={BoardReviewSee} />
            </Switch>

        </div>
    );
}

export default Boardreview;