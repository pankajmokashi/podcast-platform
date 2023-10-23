import React, { useState } from "react";

function ExpandableText({ text, maxLength, style }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <p style={style}>
      {truncatedText}
      {!isExpanded && text.length > maxLength && (
        <span className="expandable" onClick={() => setIsExpanded(true)}>
          Read more
        </span>
      )}
      {isExpanded && (
        <span className="expandable" onClick={() => setIsExpanded(false)}>
          Read less
        </span>
      )}
    </p>
  );
}

export default ExpandableText;
