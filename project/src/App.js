import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import Company from './Company';
import Board from './Board';
import DGN from './imgs/DGN.png';
import DGN3 from './imgs/DGN3.png';
import instagram from './imgs/instagram.png';
import facebook from './imgs/facebook.png';
import twitter from './imgs/twitter.png';
import Conversation from './Conversation';
import Login from './Login';
import Register from './Register';
import Service from './Service';
import Apply from "./Apply";
import TermsRegister from "./TermsRegister";
import TermsCompany from "./TermsCompany";
import BoardFree from './BoardFree';
import BoardWrite from './BoardWrite';
import BoardFreeSee from './BoardFreeSee';
import BoardScreen from './BoardScreen';
import BoardReview from './BoardReview';
import BoardScreenSee from './BoardScreenSee';
import BoardReviewSee from './BoardReviewSee';


const App = () => {
  return (
  <nav className='HomeMenu'>
    <header className='HomeNavbar'>
      <nav className='navbar'>
        <div className='navbar-logo'>
        <Link to="/"><img src={DGN} className="App-logo1" alt="logo" />  </Link>
        </div>

        <ul className='navbar-menu'>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/Conversation">소개페이지</Link></li>
        <li><Link to="/Company">기업참여신청</Link></li>
        <li><Link to="/board">게시판</Link></li>
        <li><Link to="/Service">고객센터</Link></li>
        
        
        </ul>

        <ul className='navbar-links'>
        <li><Link to="/Login">로그인</Link></li>
        <li><Link to="/TermsRegister">회원가입</Link></li>
        </ul>

      </nav>
    </header>
      {/* <ul className='HomeMenu2'>
        <h1>
          <Link to="/about">소개페이지</Link>
        </h1>
        <h1>
          <Link to="/history">기업참여신청</Link>
        </h1>
        <h1>
          <Link to="/board">게시판</Link>
        </h1>
        <h1>
          <Link to="/board">고객센터</Link>
        </h1>
        </ul> */}
        

      <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path={['/about', '/info']} component={About} />
      <Route path="/board" component={Board} />
      <Route path="/Conversation" component={Conversation} />
      <Route path="/Company" component={Company} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Service" component={Service} />
      <Route path="/Apply" component={Apply} />
      <Route path="/TermsRegister" component={TermsRegister} />
      <Route path="/TermsCompany" component={TermsCompany} />
      <Route path="/BoardFree" component={BoardFree} />
      <Route path="/BoardWrite" component={BoardWrite} />
      <Route path="/BoardFreeSee" component={BoardFreeSee} />
      <Route path="/BoardScreen" component={BoardScreen} />
      <Route path="/BoardReview" component={BoardReview} />
      <Route path="/BoardScreenSee" component={BoardScreenSee} />
      <Route path="/BoardReviewSee" component={BoardReviewSee} />
      <Route
      // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
      render={({ location }) =>(
        <div>
          <h2>이 페이지는 존재하지 않습니다.</h2>
          <p>{location.pathname}</p>
          
        </div>
      )}
      />
      </Switch>
      <footer className='foot'>
        <div className='foot-div1'>
        <Link to="/"><img src={DGN3} className="App-logo2" alt="logo" />Digital Game Nomad</Link>
        </div>

        <div className='foot-div2'>
          <div className='foot-div2-1'>
            <li><a href=''>info</a></li>
            <li><a href=''>Surpport</a></li>
            <li><a href=''>Marketing</a></li>
          </div>

          <div className='foot-div2-2'>
            <li><a href=''>Team of Use</a></li>
            <li><a href=''>Privecy Policy</a></li>
          </div>

        </div>

        <div className='foot-div3'>
          <div className='foot-div3-1'>
        <li><img src={facebook} className="icon-logo" alt="logo" /></li> 
        <li><img src={twitter} className="icon-logo" alt="logo" /></li>
        <li><img src={instagram} className="icon-logo" alt="logo" /></li>
        </div>

        <div className='foot-div3-2'>
        <li>@Digital Game Nomad</li>
        </div>
        </div>

        
      </footer>
      </nav>
  );
};

export default App;