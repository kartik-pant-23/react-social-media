import React from "react";
import PropTypes from "prop-types";

import ProfileCircleAvatar from "../../../../../../components/profileCircleAvatar";
import styles from "./UserChatCard.module.css";

function UserChatCard({ user, onCardClick, id, receiverId }) {
  return (
    <button
      type="button"
      className={
        id === receiverId ? styles.activeChatUserCard : styles.chatUserCard
      }
      onClick={onCardClick}
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
        <span className={styles.chatCardMessage}>
          How's the weekend going !! Let's catch up and make this moment
          memorable !
        </span>
      </div>
    </button>
  );
}

export default UserChatCard;

UserChatCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  receiverId: PropTypes.number,
  onCardClick: PropTypes.func.isRequired,
};
