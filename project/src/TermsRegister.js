import './TermsRegister.css';
import Register from './Register';
import Login from './Login';
import { Route, Link, Switch } from 'react-router-dom';

const TermsRegister = () => {
    return (
<div className='terms'>
<h1 className='terms-nav'>Digital Game Nomad</h1>
    <ul className='join-box'>
        <li className='checkBox-check1'>
            <ul className='clearfix'>
                
                <li>이용약관, 개인정보 수집 및 이용,
                            위치정보 이용약관(선택), 프로모션 안내
                            메일 수신(선택)에 모두 동의합니다.</li>
                <li className='checkAllBtn'><ckeckbox /></li>
            </ul>
        </li>

        <li className='checkBox-check2'>
            <ul className='clearfix'>
                <li>✔️이용약관 동의(필수)</li>
                <li className='checkAllBtn'><ckeckbox /></li>
            </ul>
            <textarea className='terms-box'>여러분을 환영합니다.
                        Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                        본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                        이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                        아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            </textarea>
        </li>

        <li className='checkBox-check3'>
            <ul className='clearfix'>
                <li>✔️개인정보 수집 및 이용에 대한 안내(필수)</li>
                <li className='checkAllBtn'><ckeckbox /></li>
            </ul>
            <textarea className='terms-box'>여러분을 환영합니다.
                        Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                        본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                        이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                        아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            </textarea>
        </li>

        <li className='checkBox-check3'>
            <ul className='clearfix'>
                <li>위치정보 이용약관 동의(선택)</li>
                <li className='checkAllBtn'><ckeckbox /></li>
            </ul>
            <textarea className='terms-box'>여러분을 환영합니다.
                        Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                        본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                        이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                        아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
            </textarea>
        </li>

        <li className='checkBox-check4'>
            <ul className='clearfix'>
                <li>이벤트 등 프로모션 알림 메일 수신(선택)</li>
                <li className='checkAllBtn'><ckeckbox /></li>
            </ul>
        </li>

    </ul>

    <div className='terms-button'>
        <div className='terms-button1'>
            <a><Link className='terms-button1-1' to="/Login">비동의</Link></a>
        </div>

        <div className='terms-button2'>
            <a><Link className='terms-button2-1'  to="/Register">동의</Link></a>
        </div>
    </div>    
    <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
    </Switch>
</div>

        )
    }
    

export default TermsRegister;