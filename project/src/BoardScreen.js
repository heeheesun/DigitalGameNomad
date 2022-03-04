import "./BoardScreen.css";
import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Board from './Board';
import BoardWrite from './BoardWrite';
import BoardFreeSee from './BoardFreeSee';
import BoardReview from './BoardReview';

const BoardScreen = () => {

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
                <h1 >스크린샷</h1>
            </div>
            <div className="board-navs">
                <ul>
                    <li><Link to="/Board">전체</Link></li>
                    <li><Link to="/BoardFree">자유</Link></li>
                    <li><Link to="/BoardScreen">스크린샷</Link></li>
                    <li><Link to="/BoardReview">후기</Link></li>
                </ul>
            </div>
            <hr className="screen-hr" />
            <div className="screen-list">

                <ul className='screen-list-title'>
                    <li>타이트니스</li>
                    <li>타이트니스</li>
                    <li>타이트니스</li>
                    <li>카트라이더 모바일</li>
                    <li>모스트아크</li>
                    <li>모스트아크</li>
                    <li>레전드 오브 전설</li>
                    <li>헝그리버드</li>
                    <li>링크의 전설 - 야생의 숨결</li>
                    <li>타이트니스</li>
                    <li>링크의 전설 - 야생의 숨결</li>
                    <li>링크의 전설 - 야생의 숨결</li>
                </ul>

                    <ul className="screen-list-date">
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
            <hr className="screen-hr" />

            <ul className="screen-number">
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
                <select className="screen-select">
                    <option selected disabled >선택</option>
                    <option>제목</option>
                    <option>내용</option>
                    <option>작성자</option>
                </select>
                <input className="boardsearch" type="text" placeholder=" 내용을 입력해주세요."></input>
                
                <button className="screen-button-search">검색</button>

                <div className="screen-button-nav">
                    <button className="screen-button" ><Link to="/BoardWrite">글쓰기</Link></button>
                </div>

            </div>
            <Switch>
                <Route path="/Board" component={Board} />
                <Route path="/BoardWrite" component={BoardWrite} />
                <Route path="/BoardFreeSee" component={BoardFreeSee} />
                <Route path="/BoardReview" component={BoardReview} />
            </Switch>

        </div>
    );
}

export default BoardScreen;