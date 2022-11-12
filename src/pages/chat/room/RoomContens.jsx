import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RoomContens.scss";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function RoomContens() {
  const socket = io.connect("http://localhost:4002");
  socket.emit("connection");

  const userColor = useSelector((state) => {
    return state.color.colors;
  });

  const roomData = useSelector((state) => state);
  const [inputMeassage, setInputMessage] = useState("");
  const [joinUserName, setJoinUserName] = useState([]);
  const [receive, setReceive] = useState([]);

  const setMessage = (e) => {
    setInputMessage(e.target.value);
  };

  useEffect(() => {
    socket.emit("join", {
      name: roomData.user.username,
      userId: 1,
      color: userColor,
    });
    socket.on("joinMessage", (joinMessage) => {
      setJoinUserName(joinMessage.userEnter);
    });
  }, [roomData]);

  const clickSendMessage = (e) => {
    if (inputMeassage.length > 0) {
      e.preventDefault();
      socket.emit("init", {
        name: roomData.user.username,
        message: inputMeassage,
        color: userColor,
      });
      setInputMessage("");
    } else {
      alert("메세지를 입력해주세요");
    }
  };

  const enterSendMessage = (e) => {
    if (e.key === "Enter") {
      clickSendMessage(e);
    }
  };

  useEffect(() => {
    socket.on("connection", (value) => {
      setReceive(value.chatData);
    });
  });

  const navigate = useNavigate();
  const moveLoby = () => {
    socket.on("disconnect");
    navigate("/chat");
  };

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [enterSendMessage]);

  return (
    <div className="room-contents-wrap">
      <div className="message-post-box">
        <div className="top-post-menu">
          <p className="room-info">
            <span className="room-member-max">2/4</span>방제목입니다1
          </p>
          <p className="room-menu-icon">
            컨텐츠 추가 구현중...
            <a className="move-loby" onClick={moveLoby}>
              나가기
            </a>
          </p>
        </div>
        <input
          className="post-input"
          type="text"
          value={inputMeassage}
          onChange={setMessage}
          onKeyPress={enterSendMessage}
        />
        <button className="input-btn" onClick={clickSendMessage}>
          POST!
        </button>
      </div>
      <div className="view-input-message" ref={scrollRef}>
        {joinUserName.map((item) => {
          return <p className="login-user">► ► {item}님이 입장하셨습니다.</p>;
        })}

        {receive.map((item) => {
          return (
            <li className="view-input-box" index={item.name}>
              <div className="user-profile">
                <img
                  className="user-profile-img"
                  src="./profile.png"
                  alt="유저프로필"
                  style={{ background: item.color }}
                />
                <p className="user-name">{item.name}</p>
              </div>
              <p className="user-text">{item.message}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default RoomContens;
