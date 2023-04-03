import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { getMessages } from "./Messages.utils";
import MessageBox from "./components/messageBox";
import MessageCard from "./components/messageCard";
import styles from "./Messages.module.css";
import EmptyChat from "../emptyChat/EmptyChat";

function Messages({ receiverId, senderId }) {
  const messages = useSelector((state) => state.messages);

  const messagesRef = useRef();
  useEffect(() => {
    if (messagesRef.current)
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  const messageList = useMemo(() => {
    let newMessageList = getMessages(senderId, receiverId, messages);

    if (!newMessageList.length)
      return (
        <EmptyChat image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF84HISxr_GYkKokwMuDPGOVA_LiGPo20Drg&usqp=CAU" />
      );
    return newMessageList.map((val, index) => {
      return (
        <MessageCard
          key={index}
          message={val.message}
          className={
            val.senderId === senderId && val.receiverId === receiverId
              ? "sender"
              : "receiver"
          }
        />
      );
    });
  }, [messages, receiverId, senderId]);
  return (
    <div className={styles.messageScreen}>
      <div ref={messagesRef} className={styles.messageList}>
        {messageList}
      </div>
      <MessageBox receiverId={receiverId} senderId={senderId} />
    </div>
  );
}

export default Messages;

Messages.propTypes = {
  receiverId: PropTypes.number.isRequired,
  senderId: PropTypes.number.isRequired,
};
