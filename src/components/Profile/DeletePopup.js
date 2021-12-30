import React, { useState } from "react";
import PopUp from "../Cards/PopUp";

function DeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("confirm was pushed with :", props.memberToDelete[0].firstName);
    props.onConfirmation(true);
    props.toggleDeletePopup(false);
  }

  function handleCancel(e) {
    e.preventDefault();
    console.log("cancel was called");
    props.onCancel(true);
    props.toggleDeletePopup(false);
  }

  /**
   * TODO: These buttons need to get added functionality, cancel should not run delete
   * in API as it seems to go now
   */
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
