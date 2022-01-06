import React from "react";

/**
 * Card is a reuasble components for showing lists of items
 */
function Card(props) {
  const header = props.header.map((line) => <p>{line}</p>);
  const rightButtons = props.rightbutton.map((line) => (
    <button
      className="button-secondary-extra-small"
      onClick={props.togglePopup}
    >
      {line}
    </button>
  ));
  const leftButtons = props.leftbutton.map((line) => (
    <button className="button-secondary-extra-small">{line}</button>
  ));

  return (
    <div className="card">
      <div className="Header">{header}</div>
      {props.content}
      <div className="Footer">
        <div className="Right">{rightButtons}</div>
        <div className="Left">{leftButtons}</div>
      </div>
    </div>
  );
}

export default Card;
