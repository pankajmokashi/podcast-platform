import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function PodcastCard({ id, title, smallImage }) {
  return (
    <Link to={`/podcasts/${id}`}>
      <div className="podcast-card">
        <img className="small-image" src={smallImage} alt="displayImage" />
        <p className="title">{title}</p>
      </div>
    </Link>
  );
}

export default PodcastCard;