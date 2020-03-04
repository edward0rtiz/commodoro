import React, { useState } from "react";
import "./ReadMore.scss";

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
    title: "Read More Example",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe fugit hic, minima dolorem suscipit optio facere eos nam architecto ipsam velit quis odio eveniet cum error dolore provident perferendis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nam voluptatum omnis tenetur autem necessitatibus cupiditate itaque quos magnam dolorum praesentium possimus enim quo id eaque sequi nesciunt nostrum officia!"
  };

  // destructure
  const { title, text, index } = content;

  // set max characters
  const maxLength = 120;

  // True if text is longer than max characters
  const exceedsMaxLength = text.length > maxLength;

  return (
    <div className="App">
      <h3>{title}</h3>

      {!expanded && exceedsMaxLength ? (
        <p>
          {shorten(text, maxLength) + "..."}

          <a className="expandLink" onClick={handleReadMore}>
            Read more
          </a>
        </p>
      ) : (
        <p>
          {text}
          <a className="expandLink" onClick={handleReadMore}>
            {exceedsMaxLength && "Read less"}
          </a>
        </p>
      )}
    </div>
  );
}

export default ReadMore;