import React, {useState} from "react";
import "./Apply.css"; 

function Apply () {
    return (
        <div className="apply">
            <div className="registration">
                <div>
                <h1 className="apply-header">참여신청</h1>
                <hr />
                
                <div className="apply-name">
                <label className="apply-text">기업 이름</label>
                <input  className="apply-box-name" type="text" placeholder="  기업 이름을 입력해주세요." 
                
                />
                </div>
                </div>
                
                <div className="apply-game">
                <label className="apply-text">게임 이름</label>
                <input className="apply-box-game" type="text" placeholder="  게임 이름을 입력해주세요." 
                
                />
                </div>
                
                <div className="apply-info">
                <label className="apply-text">전시 내용</label>
                <input className="apply-box-info" type="text" placeholder="  전시 내용을 입력해주세요."
                
                />
                </div>

                <div className="apply-url">
                <labal className="apply-text">게임 URL</labal>
                <input className="apply-box-name" type="text" placeholder="  게임 URL을 입력해주세요."></input>
                </div>

                <hr />
                
                <div className="apply-button">
                <button className="apply-button-box" > 참여 신청 </button>
                </div>

            </div>
            </div>

    );
}

export default Apply;