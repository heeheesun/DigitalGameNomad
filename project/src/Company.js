import booth1 from "./imgs/booth1.png"
import booth2 from "./imgs/booth2.png"
import "./Company.css"
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Route, Link, Switch } from 'react-router-dom'; 
import TermsCompany from "./TermsCompany";

const Company = () => {
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
            

            <ul className="button-nav">
            <a ><Link className="button" to="/TermsCompany">참여 신청 하기</Link></a>
            </ul>

            <Switch>
                <Route path="/TermsCompany" component={TermsCompany} />
            </Switch>
        </div>


    );
};

export default Company;