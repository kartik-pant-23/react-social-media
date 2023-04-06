import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProfileCircleAvatar from "../../components/profileCircleAvatar";
import styles from "./Profile.module.css";

export default function Profile() {
  const users = useSelector((state) => state.users);

  return (
    <div className={styles.userProfile}>
      <ProfileCircleAvatar
        name={users.currentUser.name}
        styles={{
          height: "9rem",
          fontSize: "3rem",
          backgroundColor: "teal",
          color: "white",
        }}
      />
      <div className={styles.userDetails}>
        <span className={styles.title}>Name</span>
        <h3 className={styles.value}>{users.currentUser.name}</h3>
        <span className={styles.title}>Username</span>
        <h3 className={styles.value}>{users.currentUser.username}</h3>
        <span className={styles.title}>Email</span>
        <h3 className={styles.value}>{users.currentUser.email}</h3>
        <span className={styles.title}>Address</span>
        <h4 className={styles.value}>
          {users.currentUser.address.street +
            ", " +
            users.currentUser.address.city +
            ", " +
            users.currentUser.address.zipcode}
        </h4>

        <Link className={styles.link} to="/changeUser">
          Change User
        </Link>
      </div>
    </div>
  );
}
