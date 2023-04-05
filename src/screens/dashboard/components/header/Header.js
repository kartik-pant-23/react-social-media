import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import TextBox from "./components/textBox";
import ProfileCircleAvatar from "../../../../components/profileCircleAvatar";
import Overlay from "../../../../components/overlay";
import { HEADER_CIRCLE_AVATAR_STYLES } from "./Header.utils";
import styles from "./Header.module.css";

function Header() {
  const usersState = useSelector((state) => state.users);
  const [profileDropdownExpanded, setProfileDropdownExpanded] = useState(false);

  const handleOpenProfileDropdown = useCallback(() => {
    setProfileDropdownExpanded(true);
  }, []);

  const handleCloseProfileDropdown = useCallback(() => {
    setProfileDropdownExpanded(false);
  }, []);

  const ProfileDropdown = useMemo(() => {
    return (
      <div className={styles.profileDropdown}>
        <Link className={styles.link} to='profile'>
          Profile
        </Link>
        <hr className={styles.divider} />
        <Link className={styles.link} to='changeUser'>
          Change User
        </Link>
      </div>
    );
  }, []);

  const UserProfileBox = useMemo(() => {
    return (
      <button
        className={styles.userProfileBox}
        onClick={handleOpenProfileDropdown}
      >
        <ProfileCircleAvatar
          name={usersState.currentUser.name}
          styles={HEADER_CIRCLE_AVATAR_STYLES}
        />
      </button>
    );
  }, [usersState.currentUser.name, handleOpenProfileDropdown]);

  return (
    <div className={styles.header}>
      <h3>React Social App</h3>
      <TextBox />
      {UserProfileBox}
      <Overlay
        Content={ProfileDropdown}
        isOpen={profileDropdownExpanded}
        shouldCloseOnOverlayClicked={true}
        onClose={handleCloseProfileDropdown}
        contentStyles={{
          top: "5rem",
          right: "1rem",
        }}
      />
    </div>
  );
}

export default Header;
