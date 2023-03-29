import React from "react";
import PropTypes from "prop-types";

import ProfileCircleAvatar from "../../../../../../../../components/profileCircleAvatar";
import styles from "./PostItemHeader.module.css";

function PostItemHeader({ user }) {
  return (
    <div className={styles.container}>
      <ProfileCircleAvatar
        name={user.name}
        styles={{
          height: "3rem",
          backgroundColor: "teal",
          color: "white",
        }}
      />
      <div>
        <div className={styles.username}>{user.username}</div>
        <div
          className={styles.address}
        >{`${user.address.street}, ${user.address.city}`}</div>
      </div>
    </div>
  );
}

PostItemHeader.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostItemHeader;
