import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import _reject from "lodash.reject";
import _map from "lodash.map";

import UserCard from "./components/userCard";
import styles from "./ChangeUser.module.css";

function ChangeUser() {
  const usersState = useSelector((state) => state.users);

  const UsersList = useMemo(() => {
    const usersList = _reject(usersState.users, [
      "id",
      usersState.currentUser.id,
    ]);
    return _map(usersList, (user) => <UserCard key={user.id} user={user} />);
  }, [usersState.users, usersState.currentUser]);

  return (
    <div className={styles.container}>
      <h1>Choose User</h1>
      <div className={styles.usersList}>{UsersList}</div>
    </div>
  );
}

export default ChangeUser;
