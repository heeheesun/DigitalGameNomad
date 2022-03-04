import React, { useState } from 'react';
import './Board.css';
import { Route, Link, Switch } from 'react-router-dom';
import BoardFree from './BoardFree';
import BoardScreen from './BoardScreen';
import BoardReview from './BoardReview';
import BoardFreeSee from './BoardFreeSee';
import BoardScreenSee from './BoardScreenSee';
import BoardReviewSee from './BoardReviewSee';

const Board = () => {

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
    <div>
    <div className="board">
      <div className="board-nav">
        <h1 >게시판</h1>
      </div>
      </div>
      <div className="board-navs">
        <ul>
        <li><Link to="/Board">전체</Link></li>
        <li><Link to="/BoardFree">자유</Link></li>
        <li><Link to="/BoardScreen">스크린샷</Link></li>
        <li><Link to="/BoardReview">후기</Link></li>
        </ul>
      </div>
      <hr className='board-hr' />
      <div className="list">
        <h1 className='list-title'> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h1>
        <div>
          <ul className='lists'>
              <li><Link to="BoardFreeSee">이번 ㅁㅁ신작 해본사람?!</Link></li>
              <li>나만 3D 멀미하냐?</li>
              <li>와 대박!</li>
              <li>나 쫄본데 이렇게 열려서 다행이다</li>
              <li>아니 ㅇㅇㅇ게임 이렇게 어려워도 되는거임?</li>
              <li>1위 했다ㅋㅋ</li>
          </ul>
          <ul className='listsdate'>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
          </ul>
          </div>
          <hr className='board-hr' />
      </div>

      <div className="list">
      <h1 className='list-title'> { 글제목[1] }</h1>
              <ul className='lists'>
              <li><Link to="BoardReviewSee">모스트 아크</Link></li>
              <li>링크의 전설 - 야생의 숨결</li>
              <li>타이트니스</li>
              <li>레전드 오브 전설</li>
              <li>카트라이더 모바일</li>
              <li>헝그리버드</li>
        </ul>

        <ul className='list-star'>
          <li>★★★★</li>
          <li>★★★★★</li>
          <li>★★★★★</li>
          <li>★★★</li>
          <li>★★★★★</li>
          <li>★★★★★</li>
        </ul>

        <ul className='listsdate2'>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
              <li>2022.02.14</li>
          </ul>
          
          <hr className='board-hr' />

      </div>

      <div className="list">
      <h1 className='list-title'> { 글제목[2] }</h1>
        <div className='screenshot-nev'>
          <div className='screenshot'>

            <div className='screenshot-list1'>
              <div className='screenshot-list'>🖼️</div>

              <div className='screenshot-mini1'>

                <div className='screenshot-mini-1'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

                <div className='screenshot-mini-2'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

                <div className='screenshot-mini-3'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

              </div>
            </div>

            <div className='screenshot-list2'>
              <div className='screenshot-list'>🖼️</div>

              <div className='screenshot-mini2'>
                <div className='screenshot-mini-1'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

                <div className='screenshot-mini-2'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

                <div className='screenshot-mini-3'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

              </div>
            </div>

            <div className='screenshot-list3'>
              <div className='screenshot-list'>🖼️</div>

              <div className='screenshot-mini3'>
                <div className='screenshot-mini-1'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

                <div className='screenshot-mini-2'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

                <div className='screenshot-mini-3'>
                  <div className='screenshot-mini'>🖼️</div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <hr className='board-hr' />
      </div>
      <Switch>
                <Route path="/BoardFree" component={BoardFree} />
                <Route path="/BoardScreen" component={BoardScreen} />
                <Route path="/BoardReview" component={BoardReview} />
                <Route path="/BoardScreenSee" component={BoardScreenSee} />
                <Route path="/BoardReviewSee" component={BoardReviewSee} />

            </Switch>
  
    </div>
  );
}
export default Board;