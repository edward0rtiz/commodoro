import React, { useState } from "react";
import "./ReadMore.scss";
import { Button } from "react-bootstrap";

function ReadMore (props) {
  let [expanded, expand] = useState(false);

  function handleReadMore() {
    expand(!expanded);
  }

  // Shorten a string to less than maxLen characters without truncating words.
  function shorten(str, maxLen, separator = " ") {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

  // data
  const content = {
    text:
      `${props.description}`
  };

  // destructure
  const { text } = content;

  // set max characters
  const maxLength = 120;

  // True if text is longer than max characters
  const exceedsMaxLength = text.length > maxLength;

  return (
    <div className="App">
      {!expanded && exceedsMaxLength ? (
        <div className="description">
          <p>{shorten(text, maxLength) + "..."}</p>
          <Button className="expandLink" variant="success" size="sm" onClick={handleReadMore}>
            Read More
          </Button>
        </div>
      ) : (
        <div className="description">
          <p>{text}</p>
          <Button className="expandLink" variant="success" size="sm" onClick={handleReadMore}>
            {exceedsMaxLength && "Read less"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ReadMore;