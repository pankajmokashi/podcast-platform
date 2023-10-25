import React, { useState } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar">
      <div className="gradient"></div>
      <div className={isNavExpanded ? "nav-icon icon-active" : "nav-icon"}>
        <BiMenu
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />
      </div>
      <div className={isNavExpanded ? "links expanded" : "links"}>
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
          Podcasts
        </Link>
        <Link
          to="/create-podcast"
          style={
            currentPath === "/create-podcast" ? { color: "var(--white)" } : {}
          }
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
