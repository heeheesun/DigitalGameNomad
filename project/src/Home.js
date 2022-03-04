import DGN2 from './imgs/DGN2.png';
import './Home.css';
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
import Tada from 'react-reveal/Tada';

const Home = () => {
    return (
        <div className="Home">
            
            <header className="Home-header">
                <Zoom> 
                    <Tada>
                        <img src={DGN2} className="Home-logo" alt="logo"  />  
                    </Tada>
                </Zoom>
                <Slide top>
                    <a
                        className="Home-link"
                        href="{main}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    입장하기
                    </a>
                </Slide>       
            </header>
        </div>
        );
    };
    

export default Home;