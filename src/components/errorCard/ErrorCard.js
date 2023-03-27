import React from "react";

import styles from "./ErrorCard.module.css";

function ErrorCard({ message }) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

ErrorCard.defaultProps = {
  message: "Oops.. something went wrong!",
};

export default ErrorCard;
