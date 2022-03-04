import "./BoardReviewSee.css";
import { Route, Link, Switch } from 'react-router-dom';
import BoardReview from './BoardReview';

const BoardReviewSee = ()  => {
  return (
    <div>
      <h1 className="see-title">글 조회하기</h1>

      <hr className="see-title-hr"/>

      <div className="see-main">
        <div className="main-title">모스트 아크</div>
        <div className="main-title">★★★★☆</div>

        <div>
        <div className="main-user">작성자</div>
        <div className="main-date">2022.02.14</div>
        </div>


          <div className="main-picture">🖼️</div>
          <div className="main-text">이정도면 갓겜인데 왜 안하지? <br/> 렉 좀 걸리는거 빼곤 만족ㅇㅇ <br /> 중요할때 한번씩 끊겨서 별 하나 뺌</div>

      </div>

      <hr className="see-comment-hr"/>
      
      <div className="comment">
        <div className="comment1">
          <div className="comment-1">ㅇㅇ</div>

          <div className="comment-2">ㅇㅈ 솔직히 로딩 너무 오래걸림;</div>
        
            <div className="comment-3">
              <button className="comment-button">수정</button> | <button className="comment-button">삭제</button>
            </div>

            <div className="comment-4">2022.02.14 12:15</div>

        </div>

        <hr className="see-comment-hr"/>

      <div className="comment2">
      <div className="comment-1">ㅁㅁ</div>
      <div className="comment-2">컴 바꿔라 ㅋㅋ</div>
      <div className="comment-4">2022.02.14 16:06</div>
      </div>
      </div>

      <hr className="see-comment-hr"/>

      <div className="input-nav">
        <input className="see-input" type="text" placeholder="내용을 입력해주세요."></input>
        <button className="see-input-button">댓글작성</button>
      </div>

      <hr className="see-title-hr"/>

      <div className="button-nav">
        <button className="see-button">수정</button><button className="see-button"><Link to="/BoardReview">목록</Link></button><button className="see-button">삭제</button>
      </div>

      <Switch>
        <Route path="/BoardReview" component={BoardReview} />
      </Switch>
    </div>

  )
}

export default BoardReviewSee;