import React from "react";
import PopUp from "../Cards/PopUp";

/**
 * Popup that handles final deletion
 */
function DeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirmation(true);
    props.closePopup(false);
  }

  //Hides popup
  function handleCancel(e) {
    e.preventDefault();
    props.onCancel(true);
    props.closePopup(false);
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

export default DeletePopup;
