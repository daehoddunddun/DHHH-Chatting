import React from "react";
import { Link } from "react-router-dom";
import "./RoomContens.scss";

function RoomContens(props) {
  return (
    <div className="room-contents-wrap">
      <div className="message-post-box">
        <div className="top-post-menu">
          <p className="room-info">
            <span className="room-member-max">2/4</span>방제목입니다1
          </p>
          <p className="room-menu-icon">
            컨텐츠 추가 구현중...
            <Link to="/chat" className="move-loby">
              나가기
            </Link>
          </p>
        </div>
        <input className="post-input" type="text" />
        <button className="input-btn">POST!</button>
      </div>
      <div className="view-input-message">
        <p className="login-user">► ► 김아무개님이 입장하셨습니다.</p>
        <p className="login-user">► ► 이아무개님이 입장하셨습니다.</p>
        <li className="view-input-box">
          <div className="user-profile">
            <img
              className="user-profile-img"
              src="./profile.png"
              alt="유저프로필"
            />
            <p className="user-name">김아무개</p>
          </div>
          <p className="user-text">안녕하세요.</p>
        </li>
        <li className="view-input-box2">
          <div className="user-profile">
            <img
              className="user-profile-img"
              src="./profile.png"
              alt="유저프로필"
            />
            <p className="user-name">이아무개</p>
          </div>
          <p className="user-text">헉 김아무개님 안녕하세요.</p>
        </li>
        <li className="view-input-box">
          <div className="user-profile">
            <img
              className="user-profile-img"
              src="./profile.png"
              alt="유저프로필"
            />
            <p className="user-name">김아무개</p>
          </div>
          <p className="user-text">저,,,정말,,,취업하고 싶어요.</p>
        </li>
        <li className="view-input-box2">
          <div className="user-profile">
            <img
              className="user-profile-img"
              src="./profile.png"
              alt="유저프로필"
            />
            <p className="user-name">이아무개</p>
          </div>
          <p className="user-text">힘내요,,,🥹</p>
        </li>
      </div>
    </div>
  );
}

export default RoomContens;
