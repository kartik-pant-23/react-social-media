import React from "react";

import styles from "./MessageCard.module.css";

function MessageCard({ className, message }) {
  return <div className={styles[className]}>{message}</div>;
}

export default MessageCard;
