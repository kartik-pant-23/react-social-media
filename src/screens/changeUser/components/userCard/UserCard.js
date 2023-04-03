import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { changeCurrentUser } from "../../../../actions/User.actions";
import ProfileCircleAvatar from "../../../../components/profileCircleAvatar";
import styles from "./UserCard.module.css";

function UserCard({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserCardClick = useCallback(() => {
    dispatch(changeCurrentUser(user));
    navigate("/home");
  }, [dispatch, user, navigate]);

  return (
    <div className={styles.container} onClick={handleUserCardClick}>
      <ProfileCircleAvatar
        name={user.name}
        styles={{
          height: "3rem",
          backgroundColor: user.color,
          color: "white",
        }}
      />
      <div>
        <div className={styles.username}>{user.username}</div>
        <div className={styles.name}>{user.name}</div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
