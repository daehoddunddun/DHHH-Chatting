import React from "react";
import "./ChatSub.scss";

function ChatSub(props) {
  return (
    <div className="chat-sub-wrap">
      <div className="sub-profile">
        <img className="profile-img" src="./profile.png" alt="프로필 이미지" />
        <div className="user-profile-box">
          <p className="profile-name">eogh773</p>
          <p className="logout">로그아웃</p>
        </div>
      </div>
      <div className="chat-sub-box">
        <input className="room-search" type="text" placeholder="검색" />
        <div className="select-view">
          <input type="checkbox" />
          <p>show member</p>
        </div>
      </div>
    </div>
  );
}

export default ChatSub;
