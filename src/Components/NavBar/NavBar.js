import React from "react";
import netflix from "../../Assets/netflix.jpg";
import avathar from "../../Assets/Netflix-avatar.png";
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <img src={netflix} alt="" className="logo" />
      <img src={avathar} alt="" className="avatar" />
    </div>
  );
}

export default NavBar;
