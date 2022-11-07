import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Index.scss";
import { setUserData } from "../redux/store";

function Index() {
  const [userName, setUserName] = useState("");
  const [changeImg, setChangeImg] = useState("./dhhh_white.png");

  const user = useSelector((state) => state.user);

  const InputUserName = (e) => {
    setUserName(e.target.value);
  };

  const changeImgBtn = () => {
    if (changeImg == "./dhhh_white.png") {
      setChangeImg("./dhhh_color.png");
    } else {
      setChangeImg("./dhhh_white.png");
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userEnter = () => {
    if (userName.length < 1) {
      alert("이름을 입력해주세요");
    } else {
      navigate("/chat");
    }
  };

  return (
    <div className="index-container">
      <div className="item-warp">
        <img className="main-img" src={changeImg} alt="메인이미지" />
        <div className="user-sign-wrap">
          <div className="user-name-box">
            <p className="user-name-text">USERNAME:</p>
            <input
              className="user-name-input"
              type="text"
              onChange={InputUserName}
              value={userName}
            />
          </div>
          <div className="user-menu-box">
            <a href="#!">설정</a>
            <a href="#!">자주 묻는 질문 (FAQ)</a>
            <a href="#!">규칙</a>
          </div>
          <button
            className="user-sign-btn"
            onClick={() => {
              dispatch(setUserData({ username: userName })), userEnter();
            }}
          >
            ENTER
          </button>
          <strong className="project-text">porject DHHH</strong>
          <p className="easter-egg" name="취업하고싶다" onClick={changeImgBtn}>
            ecb7a8ec9785ed9598eab3a0ec8bb6eb8ba4
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
