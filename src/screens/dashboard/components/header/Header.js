import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import TextBox from "./components/textBox";
import ProfileCircleAvatar from "../../../../components/profileCircleAvatar";
import { HEADER_CIRCLE_AVATAR_STYLES } from "./Header.utils";
import styles from "./Header.module.css";

function Header() {
  const usersState = useSelector((state) => state.users);
  const [profileDropdownExpanded, setProfileDropdownExpanded] = useState(false);

  const handleOpenProfileDropdown = () => {
    setProfileDropdownExpanded((expanded) => !expanded);
  };

  const ProfileDropdown = useMemo(() => {
    if (profileDropdownExpanded)
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
  }, [profileDropdownExpanded]);

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
  }, [usersState.currentUser.name]);

  return (
    <div className={styles.header}>
      <h3>React Social App</h3>
      <TextBox />
      {UserProfileBox}
      {ProfileDropdown}
    </div>
  );
}

export default Header;
