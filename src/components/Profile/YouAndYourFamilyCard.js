import React, { useEffect, useState } from "react";
import TableScaffold from "../Cards/TableScaffold";
import FamilyMemberAPI from "../API/FamilyMemberAPI";

/**
    @public YouAndYourFamilyCard shows all relevant participating members of a family
 */

function YouAndYourFamilyCard(props) {
  const [memberAndFamiliy, setMemberAndFamily] = useState([]);
  const [selected, setSelected] = useState();
  const [deleteMember, setDeleteMember] = useState(false);
  const [confirmedDeletion, setConfirmedDeletion] = useState(false);
  const [addingMember, setAddingMember] = useState(false);

  useEffect(() => {
    props.selectedMember(selected);
  }, [selected]);

  //UPDATES LIST OF FAMILY MEMBERS
  async function fetchData() {
    setMemberAndFamily(await FamilyMemberAPI.fetchFamilyMembersFromDB());
  }
  useEffect(() => {
    fetchData();
  }, []);
  

  /** UPDATE AFTER ADDING
   * Runs when a new FamilyMembers is succesfully added, and a user has
   * pushed the Finish button inside AddFamilyPopup.js. It refetches the new
   * list of FamilyMembers
   */
  useEffect(() => {
    setAddingMember(true);
    fetchData();
    setAddingMember(false);
  }, [props.onAddingFamilyMembers]);

  
  //Fetch after DELETE
  function fetchUpdateAfterDeletion() {
    const lastSelected = selected[0]
    FamilyMemberAPI.deleteOneFamilyMember(selected).then(async () => {
      const refetchedList = await FamilyMemberAPI.fetchFamilyMembersFromDB();
      setMemberAndFamily(refetchedList);
    });
  }

  //UPDATE AFTER EDITING FAMILY MEMBER
  useEffect(() => {
    if (props.didUpdate === true) {
      fetchData();
      setSelected(null);
      props.setDidUpdate(false);
    }
  }, [props.didUpdate]);

  
  useEffect(() => {
    setSelected(null);
  }, [props.isCanceled]);

  /**
   * Here the FamilyMember is being deleted from the DB, and an updated list
   * is fetched from the DB
   */
  useEffect(() => {
    if (props.onConfirmation === true) {
      fetchUpdateAfterDeletion();
      setConfirmedDeletion(false);
      setSelected(null);
    }
  }, [props.onConfirmation]);

  //HandleDelete triggers the boolean value of deleteMember to be passed to Profile.js
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
  
  //Handles local state and passes them on
  async function handleDelete(e) {
    console.log("handleDelete called, selected member passed on to Profile");
    e.preventDefault();
    setDeleteMember(true);
    console.log("delete meeeember" + deleteMember)
  }

  //Returns boolean based on if any members is selected
  function disable() {
    if (!selected) {
      return true;
    }
    return false;
  }

  return (
    <div className="card-container">
      <div className="table-container">
        <TableScaffold
          onSelection={(selected) => setSelected(selected)}
          tkey={["firstName", "lastName", "age", "duties"]}
          theaders={["First Name", "Last Name", "Age", "Duty Preference"]}
          tdata={memberAndFamiliy}
        />
      </div>

      <div className="button-container">
        <button className="button-secondary-extra-small"
          onClick={props.deleteActive}
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
