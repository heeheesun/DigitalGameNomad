import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from "axios";
import board from './Data.js';
import { useDispatch, useSelector } from "react-redux";

//semantic ui 적용 
// yarn add semantic-ui-react semantic-ui-css
// OR
// npm install semantic-ui-react semantic-ui-css
//설치후 ↓import 할것 
import { Button, Input, Comment, Form, Header } from 'semantic-ui-react'

var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
const week = ['일', '월', '화', '수', '목', '금', '토'];
let dayOfWeek = week[today.getDay()];
let hours = today.getHours()
let minutes = today.getMinutes();
var dateString = year + '년 ' + month + '월 ' + day + '일 ' + dayOfWeek + '요일 '
  + hours + '시 ' + minutes + '분';

const Comments = (props) => {
  var html = ''
  let num = props.no;
  const [data, setData] = useState({});
  let comment = board().comment;
  let user = useSelector(state => state.login);
    //useDispatch => Redux 값 변경
  const dispatch = useDispatch();

    useEffect(()=>{
      if(comment[0] != "re") {
      setData(comment.filter((e) => e.post.postKey == num));
      }
    }, [comment]);;

    useEffect(()=>{
        
            for (let i = 0; i < data.length; i++) {
            
            html += `<div class="${data[i].commentKey}">`;
            html += `<a class='author'>${data[i].user.user_id}</a>`;
            html += `<div class='metadata'><div>${data[i].comment_date}</div></div>`;
            html += `<div class='text'>${data[i].comment_text}</div>`;
                 if (user && user.loginUserKey == data[i].user.userKey) {
                    html += `<button class="midify_reply ${data[i].commentKey}">수정하기</button>`;
                    html += `<button class="check_reply ${data[i].commentKey}">전송하기</button>`;
                  }
                  if(user && (user.loginUserKey == data[i].user.userKey || user.loginUserGrade == 1)) {
                    html += `<button class="delete_reply ${data[i].commentKey}">삭제하기</button><br>`;
                  }
            html += `</div>`
            }
            $('#reply').html(html);

            $('.check_reply').hide();

        $('#replybutton').on('click', () => {
          let context = $('#replytextarea').val();
          if (context != "") {
            let params = {
              context: context, 
              userKey: user.loginUserKey, 
              postKey: num,
              post_date : dateString,
            }
            axios
              //.post("http://localhost:8088/addreply", params , {
              .post("http://49.50.174.251:8088/addreply", params , {
              
              })
              .then((response) => {
           
                dispatch( { type: "comment_out", data: null } );
              });
            $('#replytextarea').val("");
          }
        })

        $(".midify_reply").on('click', (e) => {
          let commentKey = e.target.classList[1];
          console.log(e.target.classList[1]);
          console.log($(`.${e.target.classList[1]}`).find(".text").html(`<input type='text' class='input ${e.target.classList[1]}' />`));
          console.log($(`.${e.target.classList[1]}`).find(".input").val(data.find((e) => e.commentKey == commentKey).comment_text));
          $(`.${e.target.classList[1]}`).find(".midify_reply").hide();
          $(`.${e.target.classList[1]}`).find(".check_reply").show();
        })

        $(".check_reply").on('click', (e) => {
          console.log($(`.${e.target.classList[1]}`).find(".input").val());
          let params = {
            commentKey: e.target.classList[1], 
            context: $(`.${e.target.classList[1]}`).find(".input").val(), 
            post_date: dateString
          }
          axios
          //.post("http://localhost:8088/updatereply", params, {
            .post("http://49.50.174.251:8088/updatereply", params, {
            
            })
            .then((response) => {
      
              dispatch( { type: "comment_out", data: null } );
            });
        })

        $(".delete_reply").on('click', (e) => {
          console.log(e.target.classList[1]);
          let params = {
            commentKey: e.target.classList[1], 
          }
          axios
          //.post("http://localhost:8088/deletereply", params, {
            .post("http://49.50.174.251:8088/deletereply", params, {
 
            })
            .then((response) => {
       
              dispatch( { type: "comment_out", data: null } );
            });
        })
      }, [data]);

      return (
        <Comment.Group id="reply1">
          
          <div className="cline"></div>
          <h2 className="ch2">💬 댓글</h2>
    
    
          <Comment>
            <Comment.Content id="reply"></Comment.Content>
          </Comment>
    
          {(function () {
            if (Object.keys(user).length != 0)
              return (
                <div className="cf1">
                  <Form reply id="c__f">
                    <Form.TextArea id="replytextarea" />
                    <Button
                      id="replybutton"
                      content="댓글달기"
                      labelPosition="left"
                      icon="edit"
                      primary
                    />
                  </Form>
                </div>
              );
          })()}
        </Comment.Group>
      );
}


export default Comments