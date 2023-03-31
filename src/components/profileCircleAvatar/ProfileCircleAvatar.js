import React from "react";
import propTypes from "prop-types";

import { getInitials } from "./ProfileCircleAvatar.utils";
import "./ProfileCircleAvatar.css";

function ProfileCircleAvatar({ styles, name }) {
  const initials = getInitials(name);

  return (
    <div className="header-profile-box" style={styles}>
      {initials}
    </div>
  );
}

export default ProfileCircleAvatar;

ProfileCircleAvatar.prototype = {
  name: propTypes.string,
};
