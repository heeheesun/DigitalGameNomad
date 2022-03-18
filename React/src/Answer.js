import axios from "axios";
import { useRef } from "react";


function Answer({ userKey, questionsKey }) {

    const answer = useRef("");
    

    const submitAnswer = () => {

        if(answer.current === "") {
            alert("답변을 입력해 주세요.");
            return;
        }
        
        const URL = "http://49.50.174.251:8088/inputAnswer"
        const postData = {
            userKey: userKey,
            questionsKey: questionsKey,
            answer_text: answer.current
        }
        axios.post(URL, postData)
        .then( response => {
          
            document.querySelector("input").value = "";
            answer.current = "";
            window.location.reload();
        })
        .catch( error => {
       
        })
    }

    
    return (
        <li>
            <div className="answer-box-info">
                <input type="text" placeholder="  답변 내용을 입력해주세요." onChange={(e) => answer.current = e.target.value} />
                <button onClick={submitAnswer}>답변</button>
            </div>
        </li>
    )
}

export default Answer;