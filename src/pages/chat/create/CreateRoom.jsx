import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRoom.scss";

function CreateRoom(props) {
  const navigate = useNavigate();

  const rollBackBtn = () => {
    navigate("/chat");
  };

  return (
    <div className="create-room-wrap">
      <ul className="ceate-room-item">
        <li className="room-item-box">
          <p>방 이름</p>
          <input type="text" />
        </li>
        <li className="room-item-box">
          <p>방 설명</p>
          <input type="text" />
        </li>
        <li className="room-item-box">
          <p>정원</p>
          <input type="text" />
        </li>
        <li className="room-item-box">
          <p>언어</p>
          <input type="text" />
        </li>
        <li className="room-item-hidden">
          <input type="checkbox" />
          <p>hidden room</p>
        </li>
        <div className="create-and-menu">
          <button className="roll-back-btn" onClick={rollBackBtn}>
            뒤로가기
          </button>
          <button className="create-room-btn">방 만들기</button>
        </div>
      </ul>
    </div>
  );
}

export default CreateRoom;
