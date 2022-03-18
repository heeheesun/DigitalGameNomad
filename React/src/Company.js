import booth1 from "./imgs/booth1.png"
import booth2 from "./imgs/booth2.png"
import "./Company.css"
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Route, Link, Switch } from 'react-router-dom'; 
import TermsCompany from "./TermsCompany";
import { useSelector } from 'react-redux';
import axios from "axios"; 

const Company = () => {
    const [dataList, setDataList] = useState([]);
    const user = useSelector(state => state.login);
    useEffect(() => {
        getcompanydata();
        
    }, []);
   
    let unum = user.loginUserKey;
   
    function getcompanydata(){
         let url = "http://49.50.174.251:8088/requestedcompanyUser/"+unum; //backend의 데이터 불러오기
         axios
           .get(url)
           .then((response) => {

           setDataList(response.data);
           })
       }
    return (
        <div>

        <div className="Company-nav">
                <h1 >기업참여신청</h1>
            </div>
        
        <nav className="booth1-nav">
            <Fade left>
            <img src={booth1} className="booth1-img" alt="img1" />
            </Fade>
        <div className="booth1-text">
            <Fade right>
                <p>
                Digital Game Nomad는 온라인 웹 플랫폼으로 사용자에게 3D 맵에서<br />
                직접 상호작용을 함으로써 현장감과 사용자 이용경험을 동시에 제공합니다.      
                </p> 
                </Fade>
            </div>

        </nav>
        
                

            <div className="booth2-nav">
                <h1>부스배치도</h1>
            </div>

            <div className="booth2">
            <Fade bottom>
                <img src={booth2} className="booth2-img" alt="img2" />
                </Fade>
            </div>
            

               {/* //////////////////////
            ////기업 신청 제한/////
            ////////////////////// */}

{user.loginUserGrade == 1 ?

<ul className="button-nav">
<Link className="button" to="/TermsCompany">참여 신청 하기</Link>
</ul> :

user.loginUserGrade == 2 ?

dataList.length != 0  ? 
//companyinfo 정보가 하나라도 있을때 
dataList.map(dataL => {
        if(dataL.company_pass == 0|| dataL.company_pass == 2 ){
          alert("이전 신청이 진행중입니다")
        }else if( dataL.company_pass == 1 || dataL.company_pass == 3){
            alert("이전 신청이 승인되었습니다")
        }})

        //companyinfo 정보가 하나도 없을때 
     :  <ul className="button-nav">
       <Link className="button" to="/TermsCompany">참여 신청 하기</Link>
       </ul> 
       
       : <ul className="button-nav">
       <Link className="button" to="/">기업등급 회원만 신청 가능 합니다.</Link>
       </ul> }  

{/* //////////////////////////////////////////////////// */}


            <Switch>
                <Route path="/TermsCompany" component={TermsCompany} />
            </Switch>
        </div>


    );
};

export default Company;