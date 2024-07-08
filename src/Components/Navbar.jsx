import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <div className="logo_container">
        <div className="logo">
          <NavLink to="/">LOGO</NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/participate">Participate</NavLink>
            </li>
            <li>
              <NavLink to="/maps">Maps</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="profilepiccontainer">
          <div className="profile">
            <NavLink to="#">Dropdown</NavLink>
          </div>

          <div className="dropdown-menu">
            <ul>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/">Log Out</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
