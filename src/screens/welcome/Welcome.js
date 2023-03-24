import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeCurrentUserRandomly } from "../../actions/User.actions";
import styles from "./Welcome.module.css";

function Welcome() {
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (usersState.users) {
      dispatch(changeCurrentUserRandomly());
    }
  }, [dispatch, usersState.users]);

  const UserDetails = useMemo(() => {
    if (usersState.currentUser != null) {
      const { name, username } = usersState.currentUser;
      return (
        <div className={styles.userDetails}>
          <h5 className={styles.currentUserName}>{name}</h5>
          <h3 className={styles.currentUserUsername}>{username}</h3>
        </div>
      );
    }
  }, [usersState.currentUser]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome</h1>
        {usersState.currentUser && UserDetails}
        {usersState.loading && <div>Fetching user details...</div>}
        {usersState.currentUser && (
          <button className={styles.getStartedButton}>Get Started</button>
        )}
      </div>
    </div>
  );
}

export default Welcome;
