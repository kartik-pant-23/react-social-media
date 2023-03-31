import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./SideNavigation.module.css";

function SideNavigation() {
  const draftPost = useSelector((state) => state.posts.draftPost);

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
        Create Post {draftPost.file && "(Draft)"}
      </NavLink>
    </div>
  );
}

export default SideNavigation;
