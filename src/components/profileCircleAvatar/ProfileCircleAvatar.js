import React from "react";
import PropTypes from "prop-types";

import { getInitials } from "./ProfileCircleAvatar.utils";
import DefaultStyles from "./ProfileCircleAvatar.module.css";

function ProfileCircleAvatar({ styles, name }) {
  const initials = getInitials(name);

  return (
    <div className={DefaultStyles.container} style={styles}>
      {initials}
    </div>
  );
}

ProfileCircleAvatar.propTypes = {
  name: PropTypes.string.isRequired,
};

ProfileCircleAvatar.defaultProps = {
  styles: {},
};

export default ProfileCircleAvatar;
