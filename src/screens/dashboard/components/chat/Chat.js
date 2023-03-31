import React, { useMemo, useState } from "react";
import _map from "lodash.map";
import _reject from "lodash.reject";
import { useSelector } from "react-redux";

import Messages from "./components/messages";
import UserChatCard from "./components/userChatCard/UserChatCard";
import EmptyChat from "./components/emptyChat";
import styles from "./Chat.module.css";

export default function Chat() {
  const [receiverId, setReceiverId] = useState(null);

  const usersData = useSelector((state) => state.users);

  const handleCardClick = (id) => () => {
    setReceiverId(id);
  };

  const showMessages = useMemo(() => {
    if (!receiverId)
      return (
        <EmptyChat image="https://cdn.dribbble.com/users/1376822/screenshots/6132861/recruitify_chat_empty_state_l.swierad.png?compress=1&resize=400x300" />
      );
    return (
      <Messages receiverId={receiverId} senderId={usersData.currentUser.id} />
    );
  }, [receiverId, usersData.currentUser.id]);

  const usersList = useMemo(() => {
    let allUsers = _reject(usersData.users, ["id", usersData.currentUser.id]);

    return _map(allUsers, (user) => {
      return (
        <UserChatCard
          key={user.id}
          name={user.name}
          onCardClick={handleCardClick(user.id)}
        />
      );
    });
  }, [usersData.currentUser.id, usersData.users]);

  return (
    <div className={styles.chatScreen}>
      <div className={styles.userChatCard}>{usersList}</div>
      {showMessages}
    </div>
  );
}
