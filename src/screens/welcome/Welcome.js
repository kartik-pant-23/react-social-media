import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeCurrentUserRandomly } from "../../actions/User.actions";
import ErrorCard from "../../components/errorCard";
import UserCard from "./components/userCard";
import styles from "./Welcome.module.css";

function Welcome() {
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (usersState.users) {
      dispatch(changeCurrentUserRandomly());
    }
  }, [dispatch, usersState.users]);

  const handleGetStartedClicked = () => {
    navigate("/home", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome</h1>
        {usersState.loading && <div>Fetching user details...</div>}

        {usersState.currentUser && (
          <>
            <UserCard user={usersState.currentUser} />
            <button
              className={styles.getStartedButton}
              onClick={handleGetStartedClicked}
            >
              Get Started
            </button>
          </>
        )}

        {(usersState.error ||
          (!usersState.loading && !usersState.currentUser)) && (
          <ErrorCard message={usersState.error} />
        )}
      </div>
    </div>
  );
}

export default Welcome;
