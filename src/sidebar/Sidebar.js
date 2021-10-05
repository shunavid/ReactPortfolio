import React from "react";
import Navigation from "../navigation/Navigation";
import "./style.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profileImage">
        <Navigation />
      </div>
    </div>
  );
}

export default Sidebar;
