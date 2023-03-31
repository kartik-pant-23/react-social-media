import React from "react";

import ProfileCircleAvatar from "../../../../../../components/profileCircleAvatar";
import styles from "./UserChatCard.module.css";

function UserChatCard({ name, onCardClick }) {
  return (
    <button type="button" className={styles.chatUserCard} onClick={onCardClick}>
      <div className={styles.chatUsersList}>
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
            How's your weekend going !! Have some plans
          </span>
        </div>
      </div>
    </button>
  );
}

export default UserChatCard;
