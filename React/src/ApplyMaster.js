import React, { useState, useEffect } from 'react';
import "./ApplyMaster.css";
import { Route, Link, Switch,useParams } from 'react-router-dom';
import ApplyMasterList from './ApplyMasterList';
import axios from "axios"; 

import ReactPlayer from 'react-player'

import { useSelector } from 'react-redux';


const ApplyMaster = ( ) => {

    const user = useSelector(state => state.login);

    const [dataList, setDataList] = useState([]);

    let { no } = useParams(); 
    let cnum = no;

    const [imagefile, setimagefile] = useState(null);
   
    useEffect(() => {
        getcompanydata();
        getcompanyimagedata()
    }, []);


  
   
    function getcompanydata(){
   
         let url = "http://49.50.174.251:8088/requestedCompany/"+cnum; //backend의 데이터 불러오기
         axios
           .get(url)
           .then((response) => {
           setDataList(response.data);
          
           })
       }

       function getcompanyimagedata(){
   
        let url = "http://49.50.174.251:8088/requestedCompanyimage/"+cnum; //backend의 데이터 불러오기
        axios
          .get(url)
          .then((response) => {
            setimagefile(response.data);
        
          })
      }


       const approve = () => {
  
     
            const api = axios.create({
              baseURL: "http://49.50.174.251:8088"
            })
        
            api.post('/companyupdate/'+cnum, null, { params : {
               
         
                company_pass : 1
              
        
            }}).then(function (response){
              
                window.location.replace("/ApplyMasterList")
          
            }).catch(function(error){
                console.log(error)
                alert("승인기업이 6개 이하여야 합니다");
            });
        };
        
        const approvecheck = () => {
  
          
                const api = axios.create({
                  baseURL: "http://49.50.174.251:8088"
                })
            
                api.post('/companyupdate/'+cnum, null, { params : {
                   
             
                    company_pass : 3
                  
            
                }}).then(function (response){
        
                    window.location.replace("/ApplyMasterList")
              
                }).catch(function(error){
                    console.log(error)
                 
                });
            };

        const deny = () => {
  
         
                const api = axios.create({
                  baseURL: "http://49.50.174.251:8088"
                })
            
                api.post('/companyupdate/'+cnum, null, { params : {
                   
             
                    company_pass : 2
                  
            
                }}).then(function (response){
                 
                    window.location.replace("/ApplyMasterList")
                }).catch(function(error){
                    console.log(error)
                 
                });
            };
    
            const deletecompany = () => {
  
                 
                    const api = axios.create({
                      baseURL: "http://49.50.174.251:8088"
                    })
                
                    api.get('/comapnydelete/'+cnum, null, { params : {
                       
                
                    }}).then(function (response){
                
                        window.location.replace("/ApplyMasterList")
                        alert("삭제 완료")
                    }).catch(function(error){
                        console.log(error)
                     
                    });
                };
           
 
    return(
        <div className="master">
            
            <div className="master-header">
                {user.loginUserGrade == 2 ? <h1 className="master-header-text">내 기업신청 조회</h1> : <h1 className="master-header-text">신청 기업 조회</h1>}
            </div>

         
            {dataList.map(dataL => {
               
          
                if(dataL.companykey == no){          
                   return (
                    <div className="master-nav">
        <ul key={dataL.companykey}>
         
            <li>기업 이름 : {dataL.company_name}</li><br/>
            <li>게임 이름 : {dataL.game_name}</li><br />  
            <li>전시 내용 : {dataL.company_text}</li><br /> 
            <li>게임 URL : <a target="_blank" href={dataL.game_url}>클릭시 이동</a></li><br /> 
            <li>신청 일자 : {dataL.company_date}</li> <br/>
         
            <li>승인 여부 : {dataL.company_pass === 0 ? "대기" : dataL.company_pass === 1 ? "승인": "거부"}</li>

                <br/>
            
                   

             
                  <img src={`data:image/jpeg;base64,${imagefile}`} alt="Can't Loading..."
                   style={{ margin: "auto" ,   width: "420px",
                  height: "400px"}}/>
                    <br/>

                    <ReactPlayer    url={dataL.youtube_url} playing controls width={"420px"}
                  height={"400px"}/>


              

                    </ul>
                    <div className="master-button-nav">
                    {user.loginUserGrade == 1 ?     
                    <button id="master-button1" className="master-button" onClick={approve}>
                        <Link to="/ApplyMasterList">승인</Link>
                    </button>
                    : null}

                    {user.loginUserGrade == 2 && dataL.company_pass == 1 ?     
                    <button className="master-button" onClick={approvecheck}>
                        <Link to="/ApplyMasterList">승인확인</Link>
                    </button>
                    : null}

                    {user.loginUserGrade == 1 ?   
                    <button id="master-button2"className="master-button" onClick={deny}>
                        <Link to="/ApplyMasterList">거부</Link>
                    </button>
                    : null}



                    {user.loginUserGrade == 1 ?   
                    <button id="master-button3" className="master-button" onClick={deletecompany}>
                        <Link to="/ApplyMasterList">삭제</Link>
                    </button>
                    : user.loginUserGrade == 2 && dataL.company_pass == 2 ? 
                    <button className="master-button" onClick={deletecompany}>
                        <Link to="/ApplyMasterList">확인(삭제)</Link>
                    </button>:
                    <button className="master-button" onClick={deletecompany}>
                        <Link to="/ApplyMasterList">삭제</Link>
                    </button>}

                    </div>
                    </div>




                    )
                  }
                  })}  
      
    
                
          

        
            <Switch>
                <Route path="/ApplyMasterList" component={ApplyMasterList} />
            </Switch>
        </div>
    )
}

export default ApplyMaster;



    
