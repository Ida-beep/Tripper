import React, { useState, useEffect } from "react";
import LongInput from "../Cards/LongInput";
import PopUp from "../Cards/PopUp";
import FamilyMemberAPI from "../API/FamilyMemberAPI";
import ShortInput from "../Cards/ShortInput";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

/**
 * This popup allows users to edit information about
 * family members.
 */
function EditFamilyMemberPopup(props) {
  /* eslint-disable no-unused-vars */
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [id, setId] = useState();
  const [duties, setDuties] = useState([]);
  const personData = { id, firstName, lastName, age, duties };
  const [selectedMember, setSelectedMember] = useState();

  //Sets selected member once props.selectedMember is not null
  useEffect(() => {
    if (typeof props.selectedMember === "undefined") {
      return;
    } else {
      setSelectedMember(props.selectedMember);
    }
  }, [props.selectedMember]);

  useEffect(() => {
    if (selectedMember) {
      setFirstName(selectedMember.firstName);
      setLastName(selectedMember.lastName);
      setAge(selectedMember.age);
      setId(selectedMember.id);
    }
  }, [selectedMember]);

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

  //Upates family member on submit
  function handleSubmit(e) {
    e.preventDefault();
    FamilyMemberAPI.updateFamilyMember(personData).then(
      () => {
        console.log("Succesfully updated familymember");
        props.didUpdate(true);
      },
      (error) => {
        console.log("Failed to update familymember: ", error.code);
      }
    );
  }

  //Disables submit button until all fields are filled
  function disable() {
    if (firstName === "" || lastName === "" || age === "") {
      return true;
    }
    return false;
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Back
    </button>,
    <button
      className="button-primary-extra-small"
      type="submit"
      disabled={disable()}
    >
      Save
    </button>,
  ];

  return (
    props.editFMActive && (
      <PopUp
        data={personData}
        submitChanges={handleSubmit}
        buttons={buttons}
        title="Edit Family Member"
      >
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

export default EditFamilyMemberPopup;
