import React from "react";

import TextBox from "./components/textBox";
import ProfileBox from "../../../../components/profileCircleAvatar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h3>React Social App</h3>
      <TextBox />
      <ProfileBox />
    </div>
  );
}

export default Header;
