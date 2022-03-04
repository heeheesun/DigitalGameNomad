import React, {useState} from "react"; 
import Axios from 'axios';
import "./Login.css"; 
import TermsRegister from "./TermsRegister";
import { Route, Link, Switch } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState("")

    const login = () => {
        Axios.post('http://localhost3001/login', {
            username: username,
            password: password,
        }).then((response)=> {

            if(response.data.message){
                setLoginStatus(response.data.message);
            }else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    return (
        <div className="login">
                <h1 className="login-header">로그인</h1>
                <hr className="login-hr" />                        
                <div className="login-main">
                    <div className="login-id">
                        <label className="login-id-text">아이디</label>
                        <input className="login-id-box" type="text" placeholder="아이디를 입력해주세요."
                            onChange={(e) =>{
                                setUsername(e.target.value);
                            }} 
                        />
                    </div>

                    <div className="login-password">
                        <label className="login-password-text">비밀번호</label>
                        <input className="login-password-box" type="password" placeholder="비밀번호를 입력해주세요." 
                            onChange={(e) =>{
                            setPassword(e.target.value);
                            }} 
                        />
                    </div>
                    <div><button className="login-button-register"><Link to="/TermsRegister">회원가입하기</Link></button></div>
                </div>

                <div className="login-button-main">
                    <div className="login-button-box">
                        <button className="login-button" onClick={login}> 로그인 </button>
                    </div>

                    <div className="login-button-kakao-box">
                        <button className="login-button-kakao"> 카카오 로그인 </button>
                    </div>
                </div>
                <hr className="login-hr" />        

            <h1>{loginStatus}</h1>
        </div>
    );
    <Switch>
        <Route path="/TermsRegister" component={TermsRegister} />
    </Switch>
}

export default Login;