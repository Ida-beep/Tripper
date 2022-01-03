// import React from 'react';
// import ParticipantInfo from './ParticipantInfo';
// import participantData from './data/participantData.js';
// import OverviewCard from './OverviewCard';

import React, { useEffect, useState } from "react";
import TableScaffold from "../Cards/TableScaffold";
import FamilyMemberAPI from "../API/FamilyMemberAPI";

/**
    @public YouAndYourFamilyCard shows all relevant participating members of a family
 */

function YouAndYourFamilyCard(props) {
  const [selected, setSelected] = useState([]);
  const [memberAndFamiliy, setMemberAndFamily] = useState([]);
  const [deleteMember, setDeleteMember] = useState(false);
  const [confirmedDeletion, setconfirmedDeletion] = useState(false);
  const [addingMember, setAddingMember] = useState(false);

  function addElementToSelected(element) {
    setSelected((prevState) => [...prevState, element]);
    console.log("selected: ", selected);
  }

  async function fetchAfterUpdate() {
    const refetchedList = await FamilyMemberAPI.fetchFamilyMembersFromDB();
    setMemberAndFamily(refetchedList);
  }

  /**
   * Fetched after ADD.
   * The actual conversation with DB happen inside
   * AddFamilyMember under handleSubmit()
   */
  async function fetchUpdateAfterAdd() {
    setAddingMember(true);
    const refetchedList = await FamilyMemberAPI.fetchFamilyMembersFromDB();
    setMemberAndFamily(refetchedList);
    console.log(refetchedList);
  }

  /**
   * Fetch after DELETE
   */
  function fetchUpdateAfterDeletion() {
    FamilyMemberAPI.deleteFamilyMember(selected).then(async () => {
      const refetchedList = await FamilyMemberAPI.fetchFamilyMembersFromDB();
      setMemberAndFamily(refetchedList);
    });
  }
  function removeAllSelected() {
    selected.forEach((n) => {
      selected.splice(n);
    });
    console.log("the content of selected-array is now: ", selected);
  }
  /**
   * Runs when a new FamilyMembers is succesfully added, and a user has
   * pushed the Finish button inside AddFamilyPopup.js. It refetches the new
   * list of FamilyMembers
   */
  useEffect(() => {
    fetchUpdateAfterAdd();
    setAddingMember(false);
  }, [props.onAddingFamilyMembers]);

  /**
   * UPDATE
   */
  useEffect(() => {
    if (props.didUpdate === true) {
      console.log(
        "didupdate was passed to YouAndYourFamily with value :",
        props.didUpdate
      );
      fetchAfterUpdate();
      removeAllSelected();
      console.log("after update the list is: ", selected);
      props.setDidUpdate(false);
    }
  }, [props.didUpdate]);

  useEffect(() => {
    props.selectedMember(selected);
    console.log("New selected useeffect to use in EditContactMember");
  }, [selected]);

  useEffect(() => {
    console.log("Now reset of selected-array should start");
    removeAllSelected();
  }, [props.isCanceled]);

  /**
   * All data about FamilyMembers are fetched on page initialization
   */
  useEffect(() => {
    async function fetchData() {
      setMemberAndFamily(await FamilyMemberAPI.fetchFamilyMembersFromDB());
    }
    fetchData();
    console.log("You and your family useEffect called");
  }, []);

  /**
   * Here the FamilyMember is being deleted from the DB, and an updated list
   * is fetched from the DB
   */
  useEffect(() => {
    if (props.onConfirmation === true) {
      fetchUpdateAfterDeletion();
      setconfirmedDeletion(false);
      removeAllSelected();
    }
  }, [props.onConfirmation]);

  /**
   * HandleDelete triggers the boolean value of deleteMember to be passed to Profile.js
   */
  useEffect(() => {
    console.log("Checking if deletion should bein");
    if (deleteMember === true) {
      console.log("deletion process begun, deleting :", selected);
      props.onDeletion(deleteMember);
      props.memberToDelete(selected);
      setDeleteMember(false);
    } else {
      console.log("deletion didn't begin/ already happened");
    }
  }, [deleteMember]);
  /**
   * Handles local state and passes them on
   */
  async function handleDelete(e) {
    console.log("handleDelete called, selected member passed on to Profile");
    e.preventDefault();
    setDeleteMember(true);
  }

  /**
   * Returns boolean based on if any members is selected
   */
  function disable() {
    if (selected !== null) {
      if (selected.length < 1) {
        return true;
      }
      return false;
    }
  }

  return (
    <div className="card-container">
      <div className="table-container">
        <TableScaffold
          onSelection={(selected) => addElementToSelected(selected)}
          tkey={["firstName", "lastName", "age", "duties"]}
          theaders={["First Name", "Last Name", "Age", "Duty Preference"]}
          tdata={memberAndFamiliy}
        />
      </div>

      <div className="button-container">
        <button className="button-secondary-extra-small"
          onClick={handleDelete}
          disabled={disable()}
        >
          Delete
        </button>
        <button
          className="button-secondary-extra-small"
          onClick={props.editActive}
          disabled={disable()}
        >
          Edit
        </button>
        <button
          className="button-primary-extra-small"
          onClick={props.toggleFamilyItem}
        >
          Add Family Member
        </button>
      </div>
    </div>
  );
}
export default YouAndYourFamilyCard;
