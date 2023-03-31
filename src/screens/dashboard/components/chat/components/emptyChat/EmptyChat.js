import React from "react";

import styles from "./EmptyChat.module.css";

function EmptyChat({ image }) {
  return (
    <div className={styles.emptyChat}>
      <img src={image} alt="empty-chat-img" />
    </div>
  );
}

export default EmptyChat;
