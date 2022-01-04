import React, { useState, useEffect } from "react";
import PopUp from "../Cards/PopUp";

function DeletePopup(props) {
  
  function handleSubmit(e) {
    console.log("delete popup handle submit called");
    e.preventDefault();
    console.log("confirm was pushed with :", props.itemToDelete);
    props.onConfirmation(true);
    props.closePopup(false);
    console.log("show delete car popup: ", props.showDeletePopup)
  }

  function handleCancel(e) {
    e.preventDefault();
    console.log("cancel was called");
    props.onCancel(true);
    props.closePopup(false);
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
            Are you sure you want to delete {props.text}?
          </p>
        </div>
      </PopUp>
    )
  );
}

export default DeletePopup;
