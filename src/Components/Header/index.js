import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links">
        <Link
          to="/"
          style={currentPath === "/" ? { color: "var(--white)" } : {}}
        >
          Signup
        </Link>
        <Link
          to="/podcasts"
          style={currentPath === "/podcasts" ? { color: "var(--white)" } : {}}
        >
          Postcasts
        </Link>
        <Link
          to="/create-podcast"
          style={currentPath === "/create-podcast" ? { color: "var(--white)" } : {}}
        >
          Start a Podcast
        </Link>
        <Link
          to="/profile"
          style={currentPath === "/profile" ? { color: "var(--white)" } : {}}
        >
          Profile
        </Link>
      </div>
    </div>
  );
}

export default Header;
