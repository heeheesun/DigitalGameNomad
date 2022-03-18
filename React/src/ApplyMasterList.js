import { Route, Link, Switch } from "react-router-dom";
import "./ApplyMasterList.css";
import ApplyMaster from "./ApplyMaster";
import React, { useState, useEffect } from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";

const ApplyMasterList = () => {
  const user = useSelector((state) => state.login);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getcompanydata();
  }, []);

  function getcompanydata() {
    let url = "http://49.50.174.251:8088/requestedCompany"; //backend의 데이터 불러오기
    axios.get(url).then((response) => {
      setDataList(response.data);

    });
  }



  return (
    <div className="master-list">
      <div className="master-list-header">
      {user.loginUserGrade == 2 ?  <h1>내 기업신청 리스트</h1>:  <h1>신청 기업 리스트</h1>}
      </div>

      <div className="master-list-nav">
        <ul>
          <ul className="master-list-nav-menu">
            <ul className="master-float-left">
              <li>기업 이름</li>
            </ul>

            <li>|</li>

            <ul className="master-center1-1">
              <li>게임 이름</li>
            </ul>

            <li>|</li>

            <ul className="master-center2-1">
              <li>신청일</li>
            </ul>

            <li>|</li>

            <ul className="master-float-right">
              <li>승인 여부</li>
            </ul>
          </ul>

          {dataList.map(dataL => {
   
            if (user.loginUserGrade == 1) {
              return (
                <li key={dataL.companykey}>
                  <hr className="master-list-hr" />
                  <br />

                  <ul className="a__ul">
                    <ul className="master-float-left1">
                      <li>
                        {" "}
                        <Link to={`/ApplyMaster/${dataL.companykey}`}>
                          {dataL.company_name}
                        </Link>
                      </li>
                    </ul>

                    <ul className="master-center1">
                      <li>
                        {" "}
                        <Link to={`/ApplyMaster/${dataL.companykey}`}>
                          {dataL.game_name}
                        </Link>
                      </li>
                    </ul>

                    <ul className="master-center2">
                      <li>2022.02.27</li>
                    </ul>

                    <ul className="master-float-right1">
                      <li className="master-list-wait">
                        {dataL.company_pass == 0
                          ? "대기"
                          : dataL.company_pass == 1
                          ? "승인"
                          : dataL.company_pass == 3
                          ? "승인(기업확인완료)"
                          : "거부"}
                      </li>
                    </ul>
                  </ul>
                </li>
              );
            } else if ( user.loginUserGrade == 2 && user.loginUserKey == dataL.userKey.userKey  ) {
              return (
                <li key={dataL.companykey}>
                  <hr className="master-list-hr" />
                  <br />

                  <ul>
                    <ul className="master-float-left">
                      <li>
                        {" "}
                        <Link to={`/ApplyMaster/${dataL.companykey}`}>
                          {dataL.company_name}
                        </Link>
                      </li>
                    </ul>

                    <ul className="master-center1">
                      <li>
                        {" "}
                        <Link to={`/ApplyMaster/${dataL.companykey}`}>
                          {dataL.game_name}
                        </Link>
                      </li>
                    </ul>

                    <ul className="master-center2">
                      <li>2022.02.27</li>
                    </ul>

                    <ul className="master-float-right">
                      <li className="master-list-wait">
                        {dataL.company_pass == 0
                          ? "대기"
                          : dataL.company_pass == 1
                          ? "승인"
                          : dataL.company_pass == 3
                          ? "승인(기업확인완료)"
                          : "거부"}
                      </li>
                    </ul>
                  </ul>
                </li>
              );
            }
          })}

          <hr className="master-list-hr" />
          <br />
        </ul>
      </div>
      <Switch>
        <Route path="/ApplyMaster" component={ApplyMaster} />
      </Switch>
    </div>
  );
};

export default ApplyMasterList;
