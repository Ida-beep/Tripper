import React, { useState } from "react";
import PopUp from "./PopUp";

function DeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirmation(true);
    props.toggleDeletePopup(false);
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Cancel
    </button>,
    <button className="delete-button">Confirm</button>,
  ];

  return (
    props.showDeletePopup && (
      <PopUp submitChanges={handleSubmit} buttons={buttons}>
        <div className="input-section">
          <p>
            Are you sure you want to delete {props.memberToDelete[0].firstName}{" "}
            {props.memberToDelete[0].lastName}?
          </p>
        </div>
      </PopUp>
    )
  );
}

export default DeletePopup;
