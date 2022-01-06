import React, { useEffect } from "react";
import PopUp from "../Cards/PopUp";

/**
 * Handles final deletion of Car
 */
function DeleteCarPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirmation(true);
    props.toggleDeletePopup(false);
  }

  /**Hides popup when clicking "back" */
  function handleCancel(e) {
    e.preventDefault();
    props.onCancel(true);
    props.toggleDeletePopup(false);
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={handleCancel}>
      Cancel
    </button>,
    <button className="delete-button" type="submit">
      Confirm
    </button>,
  ];

  return (
    props.showDeletePopup && (
      <PopUp submitChanges={handleSubmit} buttons={buttons}>
        <div className="input-section">
          <p>Are you sure you want to delete {props.text}?</p>
        </div>
      </PopUp>
    )
  );
}

export default DeleteCarPopup;
