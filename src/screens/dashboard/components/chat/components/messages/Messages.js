import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import _filter from "lodash.filter";

import MessageBox from "./components/messageBox";
import MessageCard from "./components/messageCard";
import styles from "./Messages.module.css";
import EmptyChat from "../emptyChat/EmptyChat";

function Messages({ receiverId, senderId }) {
  const messages = useSelector((state) => state.messages);

  const messageList = useMemo(() => {
    let newMessageList = _filter(messages, (message) => {
      return (
        (message.senderId === senderId && message.receiverId === receiverId) ||
        (message.senderId === receiverId && message.receiverId === senderId)
      );
    });
    if (!newMessageList.length)
      return (
        <EmptyChat
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF84HISxr_GYkKokwMuDPGOVA_LiGPo20Drg&usqp=CAU"
          height="200px"
        />
      );
    console.log(newMessageList);
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
      <div className={styles.messageList}>{messageList}</div>
      <MessageBox receiverId={receiverId} senderId={senderId} />
    </div>
  );
}

export default Messages;
