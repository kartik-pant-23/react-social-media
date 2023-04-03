import React from "react";
import PropTypes from "prop-types";

import styles from "./EmptyChat.module.css";

function EmptyChat({ image }) {
  return (
    <div className={styles.emptyChat}>
      <img src={image} alt="empty-chat-img" />
    </div>
  );
}

export default EmptyChat;

EmptyChat.proptype = {
  image: PropTypes.string.isRequired,
};
