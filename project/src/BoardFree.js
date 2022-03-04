import "./BoardFree.css";
import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Board from './Board';
import BoardWrite from './BoardWrite';
import BoardFreeSee from './BoardFreeSee';
import BoardScreen from './BoardScreen';
import BoardReview from './BoardReview';

const BoardFree = () => {

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
                <h1 >자유게시판</h1>
            </div>
            <div className="board-navs">
                <ul>
                    <li><Link to="/Board">전체</Link></li>
                    <li><Link to="/BoardFree">자유</Link></li>
                    <li><Link to="/BoardScreen">스크린샷</Link></li>
                    <li><Link to="/BoardReview">후기</Link></li>
                </ul>
            </div>
            <hr className="free-hr"/>
            <div className="free-list">

                <ul className='free-list-title'>
                    <li><Link to="BoardFreeSee">이번 ㅁㅁ신작 해본사람?!</Link></li>
                    <li>나만 3D 멀미하냐?</li>
                    <li>와 대박!</li>
                    <li>나 쫄본데 이렇게 열려서 다행이다</li>
                    <li>아니 ㅇㅇㅇ게임 이렇게 어려워도 되는거임?</li>
                    <li>ㅋㅋㅋㅋ응 아니야 내가 1위야</li>
                    <li>1위 했다ㅋㅋ</li>
                    <li>나 링전에서 카레 만들었다</li>
                    <li>아싸 클리어ㅋ</li>
                    <li>이거 언제까지 진행되는 건가요?</li>
                    <li>게임 나온거 다해봤다 질문 받는다</li>
                    <li>레전드 오브 전설 역대 줄거리 요약</li>
                </ul>

                    <ul className="free-list-date">
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
            <hr className="free-hr"/>

            <ul className="free-number">
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
                <select className="free-select">
                    <option selected disabled >선택</option>
                    <option>제목</option>
                    <option>내용</option>
                    <option>작성자</option>
                </select>
                <input className="boardsearch" type="text" placeholder=" 내용을 입력해주세요."></input>
                
                <button className="free-button-search">검색</button>

                <div className="free-button-nav">
                    <button className="free-button" ><Link to="/BoardWrite">글쓰기</Link></button>
                </div>

            </div>
            <Switch>
                <Route path="/Board" component={Board} />
                <Route path="/BoardWrite" component={BoardWrite} />
                <Route path="/BoardFreeSee" component={BoardFreeSee} />
                <Route path="/BoardScreen" component={BoardScreen} />
                <Route path="/BoardReview" component={BoardReview} />
            </Switch>

        </div>
    );
}

export default BoardFree;