import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import ProfileCircleAvatar from "../../../../../../components/profileCircleAvatar";
import { getRecentMessage } from "./userChatCard.utils";
import styles from "./UserChatCard.module.css";

function UserChatCard({ user, onCardClick, isActive, senderId }) {
  let messageData = {
    seen: null,
    message: null,
  };
  const messages = useSelector((state) => state.messages);
  const handleCardClick = useCallback(onCardClick(user.id), [user.id]);
  return (
    <button
      type="button"
      className={isActive ? styles.activeChatUserCard : styles.chatUserCard}
      onClick={handleCardClick}
    >
      <ProfileCircleAvatar
        styles={{
          backgroundColor: user.color,
          color: "white",
          height: "2.5rem",
        }}
        name={user.name}
      />
      <div className={styles.userChatDescription}>
        <span>{user.name}</span>
        <span
          className={
            !getRecentMessage(senderId, user.id, messages).seen
              ? styles.activeChatCardMessage
              : styles.chatCardMessage
          }
        >
          {getRecentMessage(senderId, user.id, messages).message}
        </span>
      </div>
    </button>
  );
}

export default UserChatCard;

UserChatCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  receiverId: PropTypes.number,
  onCardClick: PropTypes.func.isRequired,
};

/*

 senderId : 1,
 receiverId: 4,  if(currId === receiverId) seen = true;
 message : Hey!! ,
 seen : false,


 const handleSeenMessage = ()=>{

 }

*/
