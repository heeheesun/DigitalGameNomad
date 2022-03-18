import { Route, Link, Switch } from 'react-router-dom';
import FadeInSection from "./FadeInSection";
import "./Conversation.css"
import styles from './Conversation.module.css';
import kakao from "./imgs/kakao.png";
import Character from './Character';


const coversation = [
  {
    id: 1,
    name: "",
    text: "너 이번에 지스타 한다는거 갈거야?",
  },
  {
    id: 2,
    name: "",
    text: "아니 나 코로나 무서워서 안가려고 ㅠㅠ",
  },
  {
    id: 3,
    name: "",
    text: "여기 온라인 게임 전시회 있다는데 볼래?",
  },
  {
    id: 4,
    name: "",
    text: "여기 어떤 곳인데?",
  },
  {
    id: 5,
    name: "",
    text: "온라인으로 게임 해보고 후기나 스크린샷을 남길수 있나봐! 여기 게시판에 사람들이 쓴 글도 볼 수 있어",
  },
  {
    id: 6,
    name: "",
    text: "오! 우리가 직접 전시도 할 수 있어?",
  },
  {
    id: 7,
    name: "",
    text: "기업 회원으로 가입하고 참가 신청하면 할 수 있는듯? 여기 참가 신청하는 페이지도 있어!",
  },
  {
    id: 8,
    name: "",
    text: "와 재밌겠다! 나도 해볼래!"
  },
]

const Conversation = () => {
  return (
    <div className="Conversation">
      <h1 className="produce">소개 페이지</h1>
      {coversation.map(name => (
        <FadeInSection key={name.id}>
          {
            name.id % 2 === 1
              ? (<div className='box1'>
                <img src={kakao} className="profile" />
                {name.id === 3 ? <Link to="/"><span className={styles.textC}>{name.text}</span></Link> :
                  name.id === 5 ? <Link to="/Board"><span className={styles.textC}>{name.text}</span></Link> :
                    name.id === 7 ? <Link to="/Company"><span className={styles.textC}>{name.text}</span></Link> :
                      <span>{name.text}</span>}

              </div>
              )
              : <div className='box2'>
                <span> {name.text}</span><img src={kakao} className="profile" />
              </div>
          }
        </FadeInSection>
      ))}

<ul className="talk-button-nav">
            <a className="talk-button" target="_blank"><Link to="/Character">전시관 입장하기</Link></a>
            </ul>
            <Switch>
                <Route path="/Character" component={Character} />
            </Switch>
      
    </div>
  )
}

export default Conversation;