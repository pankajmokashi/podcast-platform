import React from "react";
import "./styles.css";
import { FaPlay } from "react-icons/fa";
import ExpandableText from "./ExpandableText";

const epiDesc = {
  fontSize: "0.9rem",
  color: "var(--grey)",
  fontWeight: "300",
  marginLeft: "1rem",
}

function EpisodeDetails({ index, title, description, audioFile, onClick }) {
  return (
    <div className="episode">
      <h3 className="epi-title">
        {index}. {title}
      </h3>
      <ExpandableText text={description} maxLength={150} style={epiDesc}/>
      <div className="epi-btn" onClick={() => onClick(audioFile)}>
        <span>Play</span>
        <span className="icon"><FaPlay /></span>
      </div>
    </div>
  );
}

export default EpisodeDetails;
