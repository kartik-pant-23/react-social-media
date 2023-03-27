import React from "react";
import { useSelector } from "react-redux";

import { getInitials } from "./ProfileCircleAvatar.utils";
import "./ProfileCircleAvatar.css";

function ProfileBox({ styles }) {
  const usersState = useSelector((state) => state.users);
  return (
    <div className={`header-profile-box ${styles}`}>
      {getInitials(usersState.currentUser.name)}
    </div>
  );
}

export default ProfileBox;
