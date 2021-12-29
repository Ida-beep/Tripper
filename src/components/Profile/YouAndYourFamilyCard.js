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
    setAddingMember(true);
    //fetchUpdatedFamilyMembers();
  }

  /**
   * Fetched an updated list after deletion, edit or adding
   */
  function fetchUpdatedFamilyMembers() {
    FamilyMemberAPI.deleteFamilyMember(selected).then(async () => {
      const refetchedList = await FamilyMemberAPI.fetchFamilyMembersFromDB();
      setMemberAndFamily(refetchedList);
    });
  }

  /**
   * Runs when a new FamilyMembers is succesfully added, and a user has
   * pushed the Finish button inside AddFamilyPopup.js. It refetches the new
   * list of FamilyMembers
   */
  useEffect(() => {
    console.log(
      "Now i want to fetch new members, the popup is open:",
      props.onAddingFamilyMembers
    );
    //fetchUpdatedFamilyMembers();
    setAddingMember(false);
  }, [props.onAddingFamilyMembers]);

  /**
   * HandleDelete triggers the boolean value of deleteMember to be passed to Profile.js
   */
  useEffect(() => {
    console.log("deletion process begun");
    props.onDeletion(deleteMember);
  }, [deleteMember]);

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
      fetchUpdatedFamilyMembers();
      setconfirmedDeletion(false);
    }
  }, [props.onConfirmation]);

  /**
   * Handles local state and passes them on
   */
  async function handleDelete(e) {
    e.preventDefault();
    setDeleteMember(true);
    props.member(selected);
  }

  /**
   * Returns boolean based on if any members is selected
   */
  function disable() {
    if (selected.length < 1) {
      return true;
    }
    return false;
  }

  return (
    <div className="card-container">
      <div className="table-container">
        <TableScaffold
          onSelection={(selected) => addElementToSelected(selected)}
          tkey={["firstName", "lastName", "age", "duties"]}
          theaders={["First Name", "Last Name", "Age", "Duty Pref"]}
          tdata={memberAndFamiliy}
        />
      </div>

      <div className="button-container">
        <button
          className="button-secondary-extra-small"
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
