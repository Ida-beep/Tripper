import React from "react";

 /**
   * Returns Long sized input box 
   */

function LongInput(props) {
  return (
    <div className="long-input">
      <label>
        <p>{props.title}</p>
        <input
          type={props.type}
          value={props.value}
          onChange={props.changeValue}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
}

export default LongInput;
