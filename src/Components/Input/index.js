import React from "react";
import "./styles.css";

function Input({ type, placeholder, state, setState, required }) {
  return (
    <div className="input-wrapper">
      <input
        className="custom-input"
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
        required={required}
      />
    </div>
  );
}

export default Input;
