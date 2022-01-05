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

  function handleCancel(e) {
    e.preventDefault();
    props.onCancel(true);
    props.toggleDeletePopup(false);
  }

  useEffect(() => {
    if (props.itemToDelete) {
      const carText = props.text;
    }
  }, [props.itemToDelete]);

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
