import React, { useState } from "react";
import PopUp from "../Cards/PopUp";
import LongInput from "../Cards/LongInput";
import DutiesAPI from "../API/DutiesAPI";

function AddDutyPopup(props) {
  const [name, setName] = useState();
  const [minRequired, setMinRequired] = useState();

  const dutyData = {
    name: name,
    minRequired: minRequired,
  };

  function changeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function changeMinRequired(e) {
    e.preventDefault();
    setMinRequired(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit called");
    DutiesAPI.addDuty(dutyData);
    props.onDutyAdd(true);
  }

  function disable() {
    if (!name || !minRequired) {
      return true;
    }
    return false;
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Cancel
    </button>,
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Finish
    </button>,
    <button className="button-primary-extra-small" disabled={disable()}>
      Add
    </button>,
  ];

  //editState={props.toggleContactMember}
  //placeholder to longinput
  return (
    props.trigger && (
      <PopUp
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
