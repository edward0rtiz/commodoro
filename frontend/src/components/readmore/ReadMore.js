import React, { useState } from "react";
import "./ReadMore.scss";
import { Button } from "react-bootstrap";

function ReadMore () {
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe fugit hic, minima dolorem suscipit optio facere eos nam architecto ipsam velit quis odio eveniet cum error dolore provident perferendis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nam voluptatum omnis tenetur autem necessitatibus cupiditate itaque quos magnam dolorum praesentium possimus enim quo id eaque sequi nesciunt nostrum officia!"
  };

  // destructure
  const { text, index } = content;

  // set max characters
  const maxLength = 120;

  // True if text is longer than max characters
  const exceedsMaxLength = text.length > maxLength;

  return (
    <div className="App">
      {!expanded && exceedsMaxLength ? (
        <div className="description">
          <p>{shorten(text, maxLength) + "..."}</p>
          <Button className="expandLink" variant="primary" size="sm" onClick={handleReadMore}>
            Read More
          </Button>
        </div>
      ) : (
        <div className="description">
          <p>{text}</p>
          <Button className="expandLink" variant="primary" size="sm" onClick={handleReadMore}>
            {exceedsMaxLength && "Read less"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ReadMore;