import man from './imgs/man.png';
import woman from './imgs/woman.png';
import "./Character.css";
import React from 'react';
import Flip from 'react-reveal/Flip';

class Character extends React.Component {
    render() {
    return (
        <div className='character'>
            <div className='character-choice'>
                <h1>캐릭터 선택</h1>
            </div>

            <div className='character-main'>    
                <div className='character-nav'>

                <Flip left>
                    <a target="_blank" rel="noopener noreferrer" href="http://digitalgamenomad.cf:5500/?image=1"><img src={man} className="character-man" alt="characters" /></a>
                </Flip>  

                <Flip left>
                    <a target="_blank" rel="noopener noreferrer" href="http://digitalgamenomad.cf:5500/?image=2"><img src={woman} className="character-woman" alt="characters"  /></a>  
                </Flip>

                </div>
            </div>
        </div>
    )
}
}

export default Character;