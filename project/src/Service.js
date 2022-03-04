import "./Service.css"; 

const Service = () => {
    return (
        <div className="service">
                <div className="service-nav">
                <h1>고객센터</h1>
                </div>

            <div className="service-main">

                <div className="service-input">
                    <input className="service-input-box" type="text" placeholder="내용을 입력해주세요"></input>
                </div>

                <div className="service-input-button-box">
                <button className="service-input-button">문의하기</button>
                </div>
            </div>
                <hr/>

            <ul className="service-list">
                <li>문의 내역1 </li>
                <li>문의 내역2 </li>
                <li>문의 내역3 </li>
            </ul>

        </div>
        );
    };
    

export default Service;