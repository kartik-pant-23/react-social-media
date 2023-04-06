import React from "react";
import PropTypes from "prop-types";

import ProfileCircleAvatar from "../profileCircleAvatar";
import styles from "./UserInfoCard.module.css";

function UserInfoCard({ user, showName, style }) {
  return (
    <div className={styles.container} style={style}>
      <ProfileCircleAvatar
        name={user.name}
        styles={{
          height: "3rem",
          backgroundColor: "teal",
          color: "white",
        }}
      />
      <div>
        <div className={styles.username}>{`${user.username} ${
          showName ? `(${user.name})` : ""
        }`}</div>
        <div
          className={styles.address}
        >{`${user.address.street}, ${user.address.city}`}</div>
      </div>
    </div>
  );
}

UserInfoCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

UserInfoCard.defaultProps = {
  showName: false,
  style: {},
};

export default UserInfoCard;
