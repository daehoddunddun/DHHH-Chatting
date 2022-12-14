import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ChatRoom.scss";

function ChatRoom() {
  return (
    <div>
      <div className="chat-room-list">
        <p className="room-num">1</p>
        <Link to="/room" className="chat-room-name">
          방제목입니다1
        </Link>
        <div className="chat-create-user">김아무개</div>
        <div className="chat-user-max">2/4</div>
      </div>
      <div className="chat-room-list">
        <p className="room-num">2</p>
        <strong className="chat-room-name">방제목입니다2</strong>
        <div className="chat-create-user">이아무개</div>
        <div className="chat-user-max">7/8</div>
      </div>
      <div className="chat-room-list">
        <p className="room-num">3</p>
        <strong className="chat-room-name">방제목입니다3</strong>
        <div className="chat-create-user">저아무개</div>
        <div className="chat-user-max">2/2</div>
      </div>
    </div>
  );
}

export default ChatRoom;
