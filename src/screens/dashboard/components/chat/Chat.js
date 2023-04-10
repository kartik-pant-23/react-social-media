import React, { useEffect, useMemo, useState } from "react";
import _map from "lodash.map";
import _reject from "lodash.reject";
import { useSelector, useDispatch } from "react-redux";

import { seenMessage } from "../../../../actions/Chats.action";
import Messages from "./components/messages";
import UserChatCard from "./components/userChatCard/UserChatCard";
import EmptyChat from "./components/emptyChat";
import styles from "./Chat.module.css";
import { useParams } from "react-router-dom";
import { getRecentUserList } from "./Chat.utils";

export default function Chat() {
  const { userId } = useParams();
  const [receiverId, setReceiverId] = useState(null);
  const dispatch = useDispatch();

  const usersData = useSelector((state) => state.users);
  let allUsers = _reject(usersData.users, ["id", usersData.currentUser.id]);
  const messages = useSelector((state) => state.messages);
  let tmpUsers = useMemo(
    () =>
      getRecentUserList(
        usersData.currentUser.id,
        receiverId,
        messages,
        allUsers
      ),
    []
  );

  useEffect(() => {
    if (userId) {
      setReceiverId(userId ? parseInt(userId) : null);
      dispatch(seenMessage(usersData.currentUser.id, parseInt(userId)));
    }
  }, [userId, dispatch, setReceiverId, usersData.currentUser.id]);

  const showMessages = useMemo(() => {
    if (!receiverId)
      return (
        <EmptyChat image="https://cdn.dribbble.com/users/1376822/screenshots/6132861/recruitify_chat_empty_state_l.swierad.png?compress=1&resize=500x200" />
      );
    return (
      <Messages receiverId={receiverId} senderId={usersData.currentUser.id} />
    );
  }, [receiverId, usersData.currentUser.id]);

  const usersList = useMemo(() => {
    return _map(tmpUsers, (user) => {
      return (
        <UserChatCard
          key={user.id}
          isActive={user.id === receiverId}
          user={user}
          senderId={usersData.currentUser.id}
        />
      );
    });
  }, [usersData.currentUser.id, receiverId, tmpUsers]);

  return (
    <div className={styles.chatScreen}>
      <div className={styles.userChatCard}>{usersList}</div>
      {showMessages}
    </div>
  );
}
