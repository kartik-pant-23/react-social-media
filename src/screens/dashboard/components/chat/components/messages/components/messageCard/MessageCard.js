import React from "react";
import PropTypes from "prop-types";

import styles from "./MessageCard.module.css";

function MessageCard({ className, message }) {
  return <div className={styles[className]}>{message}</div>;
}

export default MessageCard;

MessageCard.proptype = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
