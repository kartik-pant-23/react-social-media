import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import ProfileCircleAvatar from "../../../../../../components/profileCircleAvatar";
import { getRecentMessage } from "./userChatCard.utils";
import styles from "./UserChatCard.module.css";

function UserChatCard({ user, isActive, senderId }) {
  const messages = useSelector((state) => state.messages);

  const navigate = useNavigate();
  const handleCardClick = useCallback(() => {
    navigate(`/chat/${user.id}`, { replace: true });
  }, [navigate, user]);

  return (
    <button
      type='button'
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
        <span>{user.username}</span>
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
};
