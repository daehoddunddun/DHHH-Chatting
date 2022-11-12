import React from "react";
import "./ChatSub.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setUserColor } from "../../../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChatSub(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutBtn = () => {
    navigate("/");
  };

  const user = useSelector((state) => {
    return state.user;
  });
  const userColor = useSelector((state) => {
    return state.color.colors;
  });

  const colorList = [
    "rgb(112, 112, 176)",
    "rgb(201, 171, 171)",
    "rgb(237, 239, 189)",
    "rgb(206, 232, 165)",
    "rgb(142, 229, 194)",
  ];

  const [color, setColor] = useState("");
  const [count, setCount] = useState(0);

  const changeColor = () => {
    if (count >= 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setColor(colorList[count]);
    dispatch(setUserColor({ colors: colorList[count] }));
  };

  return (
    <div className="chat-sub-wrap">
      <div className="sub-profile">
        <img
          className="profile-img"
          src="./profile.png"
          alt="프로필 이미지"
          style={{ background: userColor }}
          onClick={changeColor}
        />
        <div className="user-profile-box">
          <p className="profile-name">{user.username}</p>
          <p className="logout" onClick={logoutBtn}>
            로그아웃
          </p>
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
