import React from "react";
import "./styles.css";

function Button({ text, onClick, disabled }) {
  return (
    <div className="input-wrapper">
      <button className="custom-btn" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}

export default Button;
