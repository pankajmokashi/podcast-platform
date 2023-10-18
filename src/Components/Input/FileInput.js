import React, { useState } from "react";

function FileInput({ text, accept, id, required, fileHandleFnc }) {
  const [fileSelected, setFileSelected] = useState("");

  const onChange = (e) => {
    setFileSelected(e.target.files[0]?.name);
  };

  return (
    <>
      <label
        htmlFor={id}
        className={`file-input ${fileSelected && "selected"}`}
      >
        {fileSelected ? fileSelected : text}
      </label>
      <input
        type="file"
        accept={accept}
        id={id}
        required={required}
        onChange={onChange}
        style={{ display: "none" }}
      />
    </>
  );
}

export default FileInput;
