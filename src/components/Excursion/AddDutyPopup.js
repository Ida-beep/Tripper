import React, { useState } from "react";
import PopUp from "../Cards/PopUp";
import LongInput from "../Cards/LongInput";
import DutiesAPI from "../API/DutiesAPI";

/**
 * A popup that allows the user to add new duties
 */
function AddDutyPopup(props) {
  const [name, setName] = useState();
  const [minRequired, setMinRequired] = useState();
  const dutyData = {
    name: name,
    minRequired: minRequired,
  };

  /**Sets field values to 
   * respective variables */
  function changeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function changeMinRequired(e) {
    e.preventDefault();
    setMinRequired(e.target.value);
  }

  //Adds duty to DB on submit
  function handleSubmit(e) {
    e.preventDefault();
    DutiesAPI.addDuty(dutyData);
    props.onDutyAdd(true);
  }

  /**
   * Returns true if parameters are null
   * Used to disable submit button until all
   * fields are filled.
   */
  function disable() {
    if (!name || !minRequired) {
      return true;
    }
    return false;
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Back
    </button>,
    <button className="button-primary-extra-small" disabled={disable()}>
      Add
    </button>,
  ];

  return (
    props.trigger && (
      <PopUp
        title="Add Duty"
        data={dutyData}
        editState={props.editState}
        submitChanges={handleSubmit}
        buttons={buttons}
      >
        <div className="input-section">
          <LongInput
            title="Duty"
            value={name}
            changeValue={changeName}
            type="text"
            placeholder="Cleaning"
          />
          <LongInput
            title="Min. people required"
            value={minRequired}
            changeValue={changeMinRequired}
            type="text"
            placeholder="3"
          />
        </div>
      </PopUp>
    )
  );
}

export default AddDutyPopup;
