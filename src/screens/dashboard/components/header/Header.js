import React from "react";
import TextBox from "./components/textBox";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h3>Social App</h3>
      <TextBox />
      <h3>Profile</h3>
    </div>
  );
}

export default Header;
