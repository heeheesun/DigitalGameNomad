import "./BoardFreeSee.css";
import { Route, Link, Switch } from 'react-router-dom';
import BoardFree from './BoardFree';

const BoardSee = ()  => {
  return (
    <div>
      <h1 className="see-title">글 조회하기</h1>

      <hr className="see-title-hr"/>

      <div className="see-main">
        <div className="main-title">이번 ㅁㅁ신작 해본사람?!</div>

        <div>
        <div className="main-user">작성자</div>
        <div className="main-date">2022.02.14</div>
        </div>


          <div className="main-picture">🖼️</div>
          <div className="main-text">이거 맞는거임? <br/> 진짜로? <br/> 이 떡밥이 드디어 풀린다고?</div>

      </div>

      <hr className="see-comment-hr"/>
      
      <div className="comment">
        <div className="comment1">
          <div className="comment-1">ㅇㅇ</div>

          <div className="comment-2">와 진짜면 대박인데</div>
        
            <div className="comment-3">
              <button className="comment-button">수정</button> | <button className="comment-button">삭제</button>
            </div>

            <div className="comment-4">2022.02.14 12:04</div>

        </div>

        <hr className="see-comment-hr"/>

      <div className="comment2">
      <div className="comment-1">ㅁㅁ</div>
      <div className="comment-2">와.... 존버합니다</div>
      <div className="comment-4">2022.02.14 12:06</div>
      </div>
      </div>

      <hr className="see-comment-hr"/>

      <div className="input-nav">
        <input className="see-input" type="text" placeholder="내용을 입력해주세요."></input>
        <button className="see-input-button">댓글작성</button>
      </div>

      <hr className="see-title-hr"/>

      <div className="button-nav">
        <button className="see-button">수정</button><button className="see-button"><Link to="/BoardFree">목록</Link></button><button className="see-button">삭제</button>
      </div>

      <Switch>
        <Route path="/BoardFree" component={BoardFree} />
      </Switch>
    </div>

  )
}

export default BoardSee;