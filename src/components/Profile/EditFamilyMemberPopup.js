import React, { useState, useEffect } from "react";
import LongInput from "../Cards/LongInput";
import PopUp from "../Cards/PopUp";
import FamilyMemberAPI from "../API/FamilyMemberAPI";
import ShortInput from "../Cards/ShortInput";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

/**
 * 
 * @public This popup allows users to edit information about
 * family members. 
 */

function EditFamilyMemberPopup(props) {
  const [familyM, setFamilyM] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [id, setId] = useState();
  const [duties, setDuties] = useState([]);
  const personData = { id, firstName, lastName, age, duties };
  const [selectedMember, setSelectedMember] = useState();

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
      console.log("id of selected is: ", id);
    }
  }, [selectedMember]);

  // This method didn't seem to do anything?
  /*   useEffect(() => {
    async function fetchData() {
      setFamilyM(await FamilyMemberAPI.fetchFamilyMembersFromDB());
      console.log("fetchFamilyMember called :", familyM);
    }
    fetchData();
    console.log("EditFamilyMember useeffect called ");
  }, []); */

  /*   useEffect(() => {
    setFirstName(familyM.firstName);
    setLastName(familyM.lastName);
    setAge(familyM.age);
    setDuties(familyM.duties);
    setId(familyM.id);
    console.log("id of family member is: ", id);
    console.log("fistname of family member is: ", firstName);
  }, [familyM]); */

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
    console.log("age was changed");
  }

  function handleSubmit(e) {
    e.preventDefault();
    FamilyMemberAPI.updateFamilyMember(personData).then(
      () => {
        console.log("succesfully called update");
        props.didUpdate(true);
      },
      (error) => {
        console.log("error in update: ", error.code);
      }
    );
  }

  function disable() {
    if (firstName === "" || lastName === "" || age === "") {
      return true;
    }
    return false;
  }

  const buttons = [
    <button className="button-secondary-extra-small" 
      onClick={props.editState}>Back</button>,
    <button
      className="button-primary-extra-small"
      type="submit" disabled={disable()}>
      Save
    </button>,
  ];

  return (
    props.editFMActive && (
      <PopUp data={personData} submitChanges={handleSubmit} buttons={buttons}
        title="Edit Family Member">
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
