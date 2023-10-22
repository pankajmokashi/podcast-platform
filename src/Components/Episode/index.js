import React from "react";
import "./styles.css";
import { FaPlay } from "react-icons/fa";

function EpisodeDetails({ index, title, description, audioFile, onClick }) {
  return (
    <div className="episode">
      <h3 className="epi-title">
        {index}. {title}
      </h3>
      <p className="epi-desc">{description}</p>
      <div className="epi-btn" onClick={() => onClick(audioFile)}>
        <span>Play</span>
        <span className="icon"><FaPlay /></span>
      </div>
    </div>
  );
}

export default EpisodeDetails;
