import React, { useState, useEffect } from "react";
import PopUp from "../Cards/PopUp";

function DeleteDutyPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Confirm-button was pushed");
    props.setDeletionConfirmed(true);
  }

  function handleCancel(e) {
    e.preventDefault();
    props.toggleDeletePopup();
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
    props.showDeleteDutyPopup && (
      <PopUp submitChanges={handleSubmit} buttons={buttons}>
        <div className="input-section">
          <p>Are you sure you want to delete {props.dutyToDelete.name} ?</p>
        </div>
      </PopUp>
    )
  );
}

export default DeleteDutyPopup;
