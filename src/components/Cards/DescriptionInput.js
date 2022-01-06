import React from "react";

 /**
   * Returns Large input box for longer descriptions 
   */

function DescriptionInput(props) {
  return (
    <div className="short-input">
      <label>
        <p>{props.title}</p>
        <textarea
          type={props.type}
          value={props.value}
          onChange={props.changeValue}
        />
      </label>
    </div>
  );
}

export default DescriptionInput;
