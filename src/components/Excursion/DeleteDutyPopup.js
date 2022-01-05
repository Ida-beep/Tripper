import React from "react";
import PopUp from "../Cards/PopUp";

/**
 * A popup that allows the user to delete items to their shoppinglist
 */
function DeleteDutyPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
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
        <div key={props.dutyToDelete.name} className="input-section">
          <p>
            Are you sure you want to delete <b>{props.dutyToDelete.name}</b> ?
          </p>
        </div>
      </PopUp>
    )
  );
}

export default DeleteDutyPopup;
