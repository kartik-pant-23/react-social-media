import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { sendMessage } from "../../../../../../../../actions/Chats.action";
import sytles from "./MessageBox.module.css";

function MessageBox({ senderId, receiverId }) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    setMessage("");

    const messageData = {
      message: message,
      senderId: senderId,
      receiverId: receiverId,
    };
    dispatch(sendMessage(messageData));
  };

  return (
    <form className={sytles.messageBox} onSubmit={handleSendMessage}>
      <input
        className={sytles.messageBoxInput}
        type="text"
        placeholder="Enter Message"
        onChange={handleMessageChange}
        value={message}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageBox;
