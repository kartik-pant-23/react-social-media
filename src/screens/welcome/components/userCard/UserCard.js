import React from "react";
import PropTypes from "prop-types";

import styles from "./UserCard.module.css";

function UserCard({ user }) {
  const { name, username } = user;
  return (
    <div className={styles.userDetails}>
      <h5 className={styles.currentUserName}>{name}</h5>
      <h3 className={styles.currentUserUsername}>{username}</h3>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
