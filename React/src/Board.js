import React, { useState, useEffect } from "react";
import "./Board.css";
import { Route, Link, Switch } from "react-router-dom";
import BoardFree from "./BoardFree";
import BoardReview from "./BoardReview";
import BoardFreeSee from "./BoardFreeSee";
import BoardReviewSee from "./BoardReviewSee";
import board from "./Data.js";
import axios from "axios";

const Board = () => {
  let [글제목, 글제목변경] = useState([
    "자유게시판",
    "후기",
    "종합평점",
    "스크린샷",
  ]);
  const [postKey_1, setPostKey_1] = useState([]);
  const [postTitle_1, setPostTitle_1] = useState([]);
  const [postDate_1, setPostDate_1] = useState([]);
  const [postKey_2, setPostKey_2] = useState([]);
  const [postTitle_2, setPostTitle_2] = useState([]);
  const [postDate_2, setPostDate_2] = useState([]);
  const [postScore_2, setPostScore_2] = useState([]);
  const [game_name_2, setGame_name_2] = useState([]);
  const [image_url, setImage_url] = useState([]);
  const [image_url_1, setImage_url_1] = useState(null);
  const [image_url_2, setImage_url_2] = useState(null);
  const [image_url_3, setImage_url_3] = useState(null);
  const [image_postKey_1, setImage_postKey_1] = useState(null);
  const [image_postKey_2, setImage_postKey_2] = useState(null);
  const [image_postKey_3, setImage_postKey_3] = useState(null);
  const [game1, setGame1] = useState("평가없음");
  const [game2, setGame2] = useState("평가없음");
  const [game3, setGame3] = useState("평가없음");
  const [game4, setGame4] = useState("평가없음");
  const [game5, setGame5] = useState("평가없음");
  const [game6, setGame6] = useState("평가없음");
  const [게임제목, setGamelist] = useState([]);
  let board_1 = board().board;
  let board_2 = board().company;

  useEffect(() => {
   
    if (board_1[0] != "re") {
      setPostKey_1(
        board_1.filter((e) => e.post_topic === "자유").map((e) => e.postKey)
      );
      setPostTitle_1(
        board_1.filter((e) => e.post_topic === "자유").map((e) => e.postTitle)
      );
      setPostDate_1(
        board_1.filter((e) => e.post_topic === "자유").map((e) => e.post_date)
      );
      setPostKey_2(
        board_1.filter((e) => e.post_topic === "후기").map((e) => e.postKey)
      );
      setPostTitle_2(
        board_1.filter((e) => e.post_topic === "후기").map((e) => e.postTitle)
      );
      setPostDate_2(
        board_1.filter((e) => e.post_topic === "후기").map((e) => e.post_date)
      );
      setPostScore_2(
        board_1.filter((e) => e.post_topic === "후기").map((e) => e.post_score)
      );
      setGame_name_2(
        board_1.filter((e) => e.post_topic === "후기").map((e) => e.game_name)
      );
      setImage_url(
        board_1.filter((e) => e.image_url != null && e.post_topic ==="후기").map((e) => e.image_url)
      );
    }
  }, [board_1]);

  useEffect(() => {
    if (board_2[0] != "re") {
   
      let gameList = board_2
        .filter((e) => e.company_pass == "1" || e.company_pass == "3")
        .map((e) => e.game_name);
      setGamelist(gameList);
    }
  }, [board_2]);

  useEffect(() => {
   
    let sum = 0;
    let game_1 = board_1
      .filter((e) => e.post_score != null && e.game_name == 게임제목[0])
      .map((e) => (sum += e.post_score));
  
    setGame1("평가없음");
    if (game_1.length >= 1) {
      setGame1(sum / game_1.length);
    }
    sum = 0;
    let game_2 = board_1
      .filter((e) => e.post_score != null && e.game_name == 게임제목[1])
      .map((e) => (sum += e.post_score));
    setGame2("평가없음");
    if (game_2.length >= 1) {
      setGame2(sum / game_2.length);
    }
    sum = 0;
    let game_3 = board_1
      .filter((e) => e.post_score != null && e.game_name == 게임제목[2])
      .map((e) => (sum += e.post_score));
    setGame3("평가없음");
    if (game_3.length >= 1) {
      setGame3(sum / game_3.length);
    }
    sum = 0;
    let game_4 = board_1
      .filter((e) => e.post_score != null && e.game_name == 게임제목[3])
      .map((e) => (sum += e.post_score));
    setGame4("평가없음");
    if (game_4.length >= 1) {
      setGame4(sum / game_4.length);
    }
    sum = 0;
    let game_5 = board_1
      .filter((e) => e.post_score != null && e.game_name == 게임제목[4])
      .map((e) => (sum += e.post_score));
    setGame5("평가없음");
    if (game_5.length >= 1) {
      setGame5(sum / game_5.length);
    }
    sum = 0;
    let game_6 = board_1
      .filter((e) => e.post_score != null && e.game_name == 게임제목[5])
      .map((e) => (sum += e.post_score));
    setGame6("평가없음");
    if (game_6.length >= 1) {
      setGame6(sum / game_6.length);
    }
  }, [게임제목]);

  useEffect(() => {
    const URL = "http://49.50.174.251:8088/imageshow";
    //const URL = "http://digitalgamenomad.cf:8088/imageshow";
    let postData = {
      image_url: image_url[0],
    };
    axios.post(URL, postData).then((response) => {
      setImage_url_1(response.data);
      setImage_postKey_1(
        board_1.find((e) => e.image_url == image_url[0]).postKey
      );
    });

    postData = {
      image_url: image_url[1],
    };
    axios.post(URL, postData).then((response) => {
      setImage_url_2(response.data);
      setImage_postKey_2(
        board_1.find((e) => e.image_url == image_url[1]).postKey
      );
    });

    postData = {
      image_url: image_url[2],
    };
    axios.post(URL, postData).then((response) => {
      setImage_url_3(response.data);
      setImage_postKey_3(
        board_1.find((e) => e.image_url == image_url[2]).postKey
      );
    });
  }, [image_url]);

  const star = (i) => {
    if (postScore_2[i] == 20) return "★☆☆☆☆";
    else if (postScore_2[i] == 40) return "★★☆☆☆";
    else if (postScore_2[i] == 60) return "★★★☆☆";
    else if (postScore_2[i] == 80) return "★★★★☆";
    else if (postScore_2[i] == 100) return "★★★★★";
    return "";
  };

  return (
    <div className="board">
      <div className="board-main">
        <h1>게시판</h1>
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

      <hr/>

      <div className="board-title">
        <h1 className="list-title"> {글제목[0]} </h1>
        <div className="b__div1">
          <ul className="board-name">
            {(function () {
              const result = [];
              for (let i = 0; i < postKey_1.length; i++) {
                if (i >= 5) {
                  break;
                }
                result.push(
                  <li>
                    <Link to={"BoardFreeSee/" + postKey_1[i]}>
                      {postTitle_1[i]}
                    </Link>
                  </li>
                );
              }
              return result;
            })()}
          </ul>
          <ul className="board-game"></ul>
          <ul className="board-date">
            {(function () {
              const result = [];
              for (let i = 0; i < postKey_1.length; i++) {
                if (i >= 5) {
                  break;
                }
                result.push(<li>{postDate_1[i]}</li>);
              }
              return result;
            })()}
          </ul>
        </div>
      </div>

      <hr className="board-hr" />

      <div className="board-title">
        <h1 className="list-title"> {글제목[1]} </h1>
        <div className="b__div1">
          <ul className="board-name">
            {(function () {
              const result = [];
              for (let i = 0; i < postKey_2.length; i++) {
                if (i >= 5) {
                  break;
                }
                result.push(
                  <li>
                    <Link to={"BoardReviewSee/" + postKey_2[i]}>
                      {postTitle_2[i]}
                    </Link>
                  </li>
                );
              }
              return result;
            })()}
          </ul>

          <ul className="board-game">
            {(function () {
              const result = [];
              for (let i = 0; i < postKey_2.length; i++) {
                if (i >= 5) {
                  break;
                }
                result.push(<li>{game_name_2[i] + " " + star(i) + " "}</li>);
              }
              return result;
            })()}
          </ul>

          <ul className="board-date">
            {(function () {
              const result = [];
              for (let i = 0; i < postKey_2.length; i++) {
                if (i >= 5) {
                  break;
                }
                result.push(<li>{postDate_2[i]}</li>);
              }
              return result;
            })()}
          </ul>
        </div>
      </div>

      <hr className="board-hr" />

      <div className="board-title1">
        <h1 className="list-title"> {글제목[2]} </h1>

        <div className="b__div1">
          <ul className="board-assess">
            {(function () {
              const result = [];
              for (let i = 0; i < 게임제목.length; i++) {
                result.push(
                  <li>{게임제목[i] + " " + eval("game" + (i + 1))}</li>
                );
              }
              return result;
            })()}
          </ul>
        </div>
      </div>

      <hr className="board-hr" />

      <div className="board-title2">
        <h1 className="list-title"> {글제목[3]} </h1>
        <div className="screenshot-nev">
          <div className="screenshot">
            <div className={"screenshot-lists"}>
              <div className="screenshot-list">
                <Link to={"BoardReviewSee/" + image_postKey_1}>
                  <img
                    src={`data:image/jpeg;base64,${image_url_1}`}
                    alt="Can't Loading..."
                  />
                </Link>
              </div>
            </div>

            <div className={"screenshot-lists"}>
              <div className="screenshot-list">
                <Link to={"BoardReviewSee/" + image_postKey_2}>
                  <img
                    src={`data:image/jpeg;base64,${image_url_2}`}
                    alt="Can't Loading..."
                  />
                </Link>
              </div>
            </div>

            <div className={"screenshot-lists"}>
              <div className="screenshot-list">
                <Link to={"BoardReviewSee/" + image_postKey_3}>
                  <img
                    src={`data:image/jpeg;base64,${image_url_3}`}
                    alt="Can't Loading..."
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/BoardFree" component={BoardFree} />
        <Route path="/BoardReview" component={BoardReview} />
        <Route path="/BoardReviewSee" component={BoardReviewSee} />
      </Switch>
    </div>
  );
};
export default Board;
