import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { sendMessage } from "../../../../../../../../actions/Chats.action";
import sytles from "./MessageBox.module.css";

function MessageBox({ senderId, receiverId }) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const handleSendMessage = useCallback(
    (e) => {
      e.preventDefault();
      if (!message) return;
      setMessage("");

      const messageData = {
        message: message,
        senderId: senderId,
        receiverId: receiverId,
        seen: false,
      };
      dispatch(sendMessage(messageData));
    },
    [dispatch, setMessage, senderId, receiverId, message]
  );

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

MessageBox.prototype = {
  senderId: PropTypes.number.isRequired,
  receiverId: PropTypes.number.isRequired,
};
