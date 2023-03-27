import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import TextBox from "./components/textBox";
import ProfileCircleAvatar from "../../../../components/profileCircleAvatar";
import { HEADER_CIRCLE_AVATAR_STYLES } from "./Header.utils";
import "./Header.css";

function Header() {
  const usersState = useSelector((state) => state.users);

  const UserProfileBox = useMemo(() => {
    return (
      <ProfileCircleAvatar
        name={usersState.currentUser.name}
        styles={HEADER_CIRCLE_AVATAR_STYLES}
      />
    );
  }, [usersState.currentUser.name]);

  return (
    <div className="header">
      <h3>React Social App</h3>
      <TextBox />
      {UserProfileBox}
    </div>
  );
}

export default Header;
