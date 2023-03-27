import React from "react";
import PropTypes from "prop-types";

import ProfileCircleAvatar from "../../../../components/profileCircleAvatar";
import { PROFILE_CIRCLE_AVATAR_STYLES } from "./UserCard.utils";
import styles from "./UserCard.module.css";

function UserCard({ user }) {
  const { name, username } = user;
  return (
    <div className={styles.userDetailsContainer}>
      <ProfileCircleAvatar name={name} styles={PROFILE_CIRCLE_AVATAR_STYLES} />
      <div className={styles.userDetails}>
        <h5 className={styles.currentUserName}>{name}</h5>
        <h3 className={styles.currentUserUsername}>{username}</h3>
      </div>
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
