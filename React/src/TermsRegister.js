import './TermsRegister.css';
import Register from './Register';
import Login from './Login';
import { Route, Link, Switch, } from 'react-router-dom';
import React, {useState} from "react";
import { useHistory } from "react-router"

const TermsRegister = () => {

    const [checkList, setCheckList] = useState([]);

    // 체크박스 전체선택시 모두선택 체크박스 활성화시키기
    const handleCheck = e => {
        e.target.checked
        ? setCheckList([...checkList, e.target.name])
        : setCheckList(checkList.filter(el => el !== e.target.name));
    };

   // 전체체크 선택시 전체 선택 or 전체해제
    const checkAll = e => {
        e.target.checked ? setCheckList(['terms', 'privacy']) : setCheckList([]);
    };

    const isAllChecked = checkList.length === 2;
    const disabled = !isAllChecked;

    const history = useHistory();

        return (
            <div className='terms'>
                <h1 className='terms-nav'>Digital Game Nomad</h1>
                <ul className='join-box'>
                    <li className='checkBox-check1'>
                        <ul className='clearfix'>
                
                            <li className='checkAllText'>&nbsp;&nbsp;이용약관(필수), 개인정보 수집 및 이용(필수)에 모두 동의합니다. 
                                <input className='checkAllBtn'
                                            type="checkbox"
                                            name="checkAll"
                                        onChange={checkAll}
                                        checked={checkList.length === 2 ? true : false}
                                />
                            </li>
                        </ul>
                    </li>

                    <li className='checkBox-check2'>
                        <ul className='clearfix'>
                            <li>✔️ 이용약관 동의(필수)
                                <input className='checkAllBtn'
                                            type="checkbox"
                                            name="terms"
                                        onChange={handleCheck}
                                        checked={checkList.includes('terms') ? true : false}
                                />
                            </li>
                        </ul>
                        <textarea className='terms-box'>
                        여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                        </textarea>
                    </li>

                    <li className='checkBox-check3'>
                        <ul className='clearfix'>
                            <li>✔️ 개인정보 수집 및 이용에 대한 안내(필수)
                                <input className='checkAllBtn'
                                            type="checkbox"
                                            name="privacy"
                                        onChange={handleCheck}
                                        checked={checkList.includes('privacy') ? true : false}
                                />
                            </li>
                        </ul>
                        <textarea className='terms-box'>                  여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                        </textarea>
                    </li>

                    <li className='checkBox-check3'>
                        <ul className='clearfix'>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;위치정보 이용약관 동의(선택)
                                <input className='checkAllBtn'
                                            type="checkbox"
                                />
                            </li>
                        </ul>
                        <textarea className='terms-box'>                  여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
                            Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
                            본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
                            이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
                            아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                        </textarea>
                    </li>

                    <li className='checkBox-check4'>
                        <ul className='clearfix'>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이벤트 등 프로모션 알림 메일 수신(선택)
                                <input className='checkAllBtn'
                                            type="checkbox"
                                />
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className='terms-button'>
                    <div className='terms-button1'>
                        <Link className='terms-button1-1' to="/Login">거부</Link>
                    </div>

                    <button 
                        className='terms-button1-2'
                        onClick={() => {history.push({
                            pathname: "/Register",

                                })}}
                                disabled={disabled} 
                                style={disabled 
                                    ? { backgroundColor: '#e7e7e7' }
                                    : { backgroundColor: 'green' }
                                }
                        >
                        동의
                    </button>
                </div>    
                <Switch>
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                </Switch>
            </div>
        );
    }


    

export default TermsRegister;