import React from "react";
import PropTypes from "prop-types";

import ProfileCircleAvatar from "../../../../../../components/profileCircleAvatar";
import styles from "./UserChatCard.module.css";

function UserChatCard({ name, onCardClick, id, receiverId }) {
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
          backgroundColor: "teal",
          color: "white",
          height: "2.5rem",
        }}
        name={name}
      />
      <div className={styles.userChatDescription}>
        <span>{name}</span>
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
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  receiverId: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
