import React from "react";
import "./ChatLoby.scss";

function ChatLoby(props) {
  return (
    <ul className="chat-loby">
      <p className="chat-loby-title">Loby</p>
      <li className="loby-user-list">user.1</li>
      <li className="loby-user-list">user.2</li>
    </ul>
  );
}

export default ChatLoby;
