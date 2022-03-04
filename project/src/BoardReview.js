import "./BoardReview.css";
import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Board from './Board';
import BoardWrite from './BoardWrite';
import BoardFreeSee from './BoardFreeSee';
import BoardScreen from './BoardScreen';
import BoardReviewSee from './BoardReviewSee';


const Boardreview = () => {

  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)
  let [글제목, 글제목변경] = useState(['자유게시판', '후기', '스크린샷']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '';

  // function 제목바꾸기(){ 
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경( newArray );
  // }

    return (
        <div className="board">
            <div className="board-nav">
                <h1 >후기게시판</h1>
            </div>
            <div className="board-navs">
                <ul>
                    <li><Link to="/Board">전체</Link></li>
                    <li><Link to="/BoardFree">자유</Link></li>
                    <li><Link to="/BoardScreen">스크린샷</Link></li>
                    <li><Link to="/BoardReview">후기</Link></li>
                </ul>
            </div>
            <hr className="review-hr"/>
            <div className="review-list">

                <ul className='review-list-title'>
                    <li><Link to="BoardReviewSee">모스트 아크</Link></li>
                    <li>링크의 전설 - 야생의 숨결</li>
                    <li>타이트니스</li>
                    <li>레전드 오브 전설</li>
                    <li>카트라이더 모바일</li>
                    <li>헝그리버드</li>
                    <li>타이트니스</li>
                    <li>타이트니스</li>
                    <li>모스트 아크</li>
                    <li>카트라이더 모바일</li>
                    <li>레전드 오브 전설</li>
                    <li>카트라이더 모바일</li>
                </ul>
                <ul className="reviw-star">
                    <li>★★★★</li>
                    <li>★★★★★</li>
                    <li>★★★★★</li>
                    <li>★★★</li>
                    <li>★★★★★</li>
                    <li>★★★★★</li>
                    <li>★★★★</li>
                    <li>★★★★★</li>
                    <li>★★★★★</li>
                    <li>★★★</li>
                    <li>★★★★★</li>
                    <li>★★★★★</li>
                </ul>

                    <ul className="review-list-date">
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                        <li>2022.02.14</li>
                    </ul>
            </div>
            <hr className="review-hr"/>

            <ul className="review-number">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>&gt;</li>
                <li>&gt;&gt;</li>
            </ul>
            <div>
                <select className="review-select">
                    <option selected disabled >선택</option>
                    <option>제목</option>
                    <option>내용</option>
                    <option>작성자</option>
                </select>
                <input className="boardsearch" type="text" placeholder=" 내용을 입력해주세요."></input>
                
                <button className="review-button-search">검색</button>

                <div className="review-button-nav">
                    <button className="review-button" ><Link to="/BoardWrite">글쓰기</Link></button>
                </div>

            </div>
            <Switch>
                <Route path="/Board" component={Board} />
                <Route path="/BoardWrite" component={BoardWrite} />
                <Route path="/BoardFreeSee" component={BoardFreeSee} />
                <Route path="/BoardScreen" component={BoardScreen} />
                <Route path="/BoardReviewSee" component={BoardReviewSee} />
            </Switch>

        </div>
    );
}

export default Boardreview;