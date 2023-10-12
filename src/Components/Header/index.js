import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#fff" : "#8EA6BB",
        })}
      >
        Signup
      </NavLink>
      <NavLink
        to="/podcast"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#fff" : "#8EA6BB",
        })}
      >
        Postcasts
      </NavLink>
      <NavLink
        to="/newpodcast"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#fff" : "#8EA6BB",
        })}
      >
        Start a Podcast
      </NavLink>
      <NavLink
        to="/profile"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#fff" : "#8EA6BB",
        })}
      >
        Profile
      </NavLink>
    </div>
  );
}

export default Header;
