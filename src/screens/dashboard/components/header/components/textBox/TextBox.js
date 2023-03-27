import React from "react";

import "./TextBox.css";

function TextBox() {
  const handleSearchQuery = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      className="header-textbox"
      type="text"
      placeholder="Search users"
      onChange={handleSearchQuery}
    />
  );
}

export default TextBox;
