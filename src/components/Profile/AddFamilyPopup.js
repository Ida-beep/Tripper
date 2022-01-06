import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu.js";
import { useState } from "react";
import FamilyMemberAPI from "../API/FamilyMemberAPI.js";
import PopUp from "../Cards/PopUp";
import LongInput from "../Cards/LongInput.js";
import ShortInput from "../Cards/ShortInput.js";

/**
 * AddFamilyPopup defines the content of the popup to
 * add family items, using its parent PopUp.js
 */
function AddFamilyPopup(props) {
  /* eslint-disable no-unused-vars */
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [duties, setDuties] = useState([]);
  const personData = { firstName, lastName, age, duties };

  /**Sets field values to 
   * respective variables */
  function changeFirstName(e) {
    e.preventDefault();
    setFirstName(e.target.value);
  }
  function changeLastName(e) {
    e.preventDefault();
    setLastName(e.target.value);
  }
  function changeAge(e) {
    e.preventDefault();
    setAge(e.target.value);
  }

  //Adds family member on submit
  function handleSubmit(e) {
    e.preventDefault();
    FamilyMemberAPI.addFamilyMember(personData);
  }

  //Disables submit button until all field are filled
  function disable() {
    if (!firstName || !lastName || !age) {
      return true;
    }
    return false;
  }

  /**Ensures that fields are empty 
   * when reopening the add family popup.
  */
  function closeAndReset() {
    props.toggleFamilyItem();
    setAge();
    setFirstName("");
    setLastName("");
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={closeAndReset}>
      Back
    </button>,
    <button className="button-primary-extra-small" disabled={disable()}>
      Save
    </button>,
  ];

  return (
    props.showAddFamilyPopup && (
      <PopUp data={personData} submitChanges={handleSubmit} 
        buttons={buttons} title="Add Family Member">
        <div className="input-section">
          <LongInput
            title="First Name"
            value={firstName}
            changeValue={changeFirstName}
            type="text"
          />
          <LongInput
            title="Last Name"
            value={lastName}
            changeValue={changeLastName}
            type="text"
          />
          <ShortInput
            title="Age"
            value={age}
            changeValue={changeAge}
            type="text"
          />
        </div>
        <div className="input-section">
          <DropDownMenu duties={duties} />
        </div>
      </PopUp>
    )
  );
}
export default AddFamilyPopup;
