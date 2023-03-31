import React from "react";
<<<<<<< HEAD
import propTypes from "prop-types";
=======
import PropTypes from "prop-types";
>>>>>>> main

import { getInitials } from "./ProfileCircleAvatar.utils";
import DefaultStyles from "./ProfileCircleAvatar.module.css";

function ProfileCircleAvatar({ styles, name, onClick }) {
  const initials = getInitials(name);

  if (onClick) {
    styles = {
      ...styles,
      cursor: "pointer",
    };
  }

  return (
    <button
      className={DefaultStyles.container}
      style={styles}
      onClick={onClick}
    >
      {initials}
    </button>
  );
}

ProfileCircleAvatar.propTypes = {
  name: PropTypes.string.isRequired,
};

ProfileCircleAvatar.defaultProps = {
  styles: {},
  onClick: () => {},
};

export default ProfileCircleAvatar;

ProfileCircleAvatar.prototype = {
  name: propTypes.string,
};
