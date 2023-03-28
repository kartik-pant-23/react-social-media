import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";

import styles from "./SideNavigation.module.css";

function SideNavigation() {
  const linksClassname = useCallback((linkState) => {
    return `${styles.navLink} ${
      linkState.isActive ? styles.navLinkActive : ""
    }`;
  }, []);

  return (
    <div className={styles.sideNav}>
      <NavLink to='/home' className={linksClassname}>
        Home
      </NavLink>
      <NavLink to='/chat' className={linksClassname}>
        Chat
      </NavLink>
      <NavLink to='/create' className={linksClassname}>
        Create Post
      </NavLink>
    </div>
  );
}

export default SideNavigation;
