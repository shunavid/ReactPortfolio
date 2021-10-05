import React from "react";
import { Link } from "react-router-dom";
import myImage from "../image/myImage.jpg";

import "./style.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="avatar">
        <img className="myImage" src={myImage} alt="" />
      </div>

      <ul className="navigate-items">
        <li className="navigate-item">
    
        </li>
        <li className="navigate-item">
          <Link to="/" className="main">
            Home
          </Link>
        </li>
        <li className="navigate-item">
          <Link to="/about" className="about">
            About
          </Link>
        </li>
        <li className="navigate-item">
          <Link to="/resume" className="resume">
            Resume
          </Link>
        </li>
        <li className="navigate-item">
          <Link to="/contact" className="contact">
            Contact
          </Link>
        </li>
      </ul>

      <footer className="side-footer">
        <p>@2021 My Portfolio Website</p>
      </footer>
    </div>
  );
}

export default Navigation;
