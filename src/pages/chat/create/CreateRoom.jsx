import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRoom.scss";
import { setRoomData } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function CreateRoom(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const rollBackBtn = () => {
    navigate("/chat");
  };

  const room = useSelector((state) => state.room);
  // console.log(room);

  const [inputRoomData, setInputRoomData] = useState({
    roomName: "",
    roomInfo: "",
    roomMember: "",
    roomLanguage: "",
    roomHidden: false,
  });

  const { roomName, roomInfo, roomMember, roomLanguage, roomHidden } =
    inputRoomData;

  const inputRoomChange = (e) => {
    const { name, value, checked } = e.target;
    setInputRoomData({
      ...inputRoomData,
      [name]: value,
      roomHidden: checked,
    });
  };

  console.log(inputRoomData);

  return (
    <div className="create-room-wrap">
      <ul className="ceate-room-item">
        <li className="room-item-box">
          <p>방 이름</p>
          <input
            type="text"
            name="roomName"
            value={roomName}
            onChange={inputRoomChange}
          />
        </li>
        <li className="room-item-box">
          <p>방 설명</p>
          <input
            type="text"
            name="roomInfo"
            value={roomInfo}
            onChange={inputRoomChange}
          />
        </li>
        <li className="room-item-box">
          <p>정원</p>
          <input
            type="text"
            name="roomMember"
            value={roomMember}
            onChange={inputRoomChange}
          />
        </li>
        <li className="room-item-box">
          <p>언어</p>
          <input
            type="text"
            name="roomLanguage"
            value={roomLanguage}
            onChange={inputRoomChange}
          />
        </li>
        <li className="room-item-hidden">
          <input
            type="checkbox"
            name="roomHidden"
            value={roomHidden}
            onChange={inputRoomChange}
          />
          <p>hidden room</p>
        </li>
        <div className="create-and-menu">
          <button className="roll-back-btn" onClick={rollBackBtn}>
            뒤로가기
          </button>
          <button
            className="create-room-btn"
            onClick={() => {
              dispatch(
                setRoomData({
                  roomName: roomName,
                  roomInfo: roomInfo,
                  roomMember: roomMember,
                  roomLanguage: roomLanguage,
                  roomHidden: roomHidden,
                })
              ),
                rollBackBtn();
            }}
          >
            방 만들기
          </button>
        </div>
      </ul>
    </div>
  );
}

export default CreateRoom;
