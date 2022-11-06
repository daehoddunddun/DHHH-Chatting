import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Chat.scss";
import ChatRoom from "./components/ChatRoom";
import ChatSub from "./components/ChatSub";

function Chat() {
  const navigate = useNavigate();

  const createRoom = () => {
    navigate("/chat/create");
  };
  return (
    <div className="chat-container">
      <div className="chat-item-warp">
        <div className="chat-main-box">
          <div className="chat-menu-item">
            <Link to="/" className="go-home">
              Home
            </Link>
            <p className="reload">새로고침</p>
            <img className="peoples-img" src="./peoples.png" alt="사람이미지" />
          </div>
          <div className="chat-create-item">
            <p className="chat-room-length">3 rooms - 13 users</p>
            <button className="chat-create-btn" onClick={createRoom}>
              방 만들기
            </button>
          </div>
          <ChatRoom />
        </div>
        <ChatSub />
      </div>
      <div className="chat-footer-wrap">
        <p>
          소개 고객센터 이용약관 개인정보 처리방침 쿠키 정책 접근성 광고 정보
          블로그 상태 채용 브랜드 리소스 광고 마케팅 비즈니스용 개발자 디렉터리
          설정 eogh7773@gamil.com © 2022 dhhhChat, Inc.
        </p>
      </div>
    </div>
  );
}

export default Chat;
