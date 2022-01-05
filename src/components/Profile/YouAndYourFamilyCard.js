import React, { useEffect, useState } from "react";
import TableScaffold from "../Cards/TableScaffold";
import FamilyMemberAPI from "../API/FamilyMemberAPI";

/**
 * YouAndYourFamilyCard shows all relevant participating members of a family
 */
function YouAndYourFamilyCard(props) {
  /* eslint-disable no-unused-vars */
  const [memberAndFamiliy, setMemberAndFamily] = useState([]);
  const [selected, setSelected] = useState();
  const [deleteMember, setDeleteMember] = useState(false);
  const [confirmedDeletion, setConfirmedDeletion] = useState(false);
  const [addingMember, setAddingMember] = useState(false);

  useEffect(() => {
    props.selectedMember(selected);
  }, [selected]);

  /**
   * Updates list of FamilyMembers
   */
  async function fetchData() {
    setMemberAndFamily(await FamilyMemberAPI.fetchFamilyMembersFromDB());
  }
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Runs when a new FamilyMembers is succesfully added, and a user has
   * pushed the Finish button inside AddFamilyPopup.js. It refetches the new
   * list of FamilyMembers
   */
  useEffect(() => {
    setAddingMember(true);
    fetchData();
    setAddingMember(false);
  }, [props.onAddingFamilyMembers]);

  /**
   * Updates list after deletions on FamilyMembers
   */
  function fetchUpdateAfterDeletion() {
    FamilyMemberAPI.deleteFamilyMember(selected).then(async () => {
      const refetchedList = await FamilyMemberAPI.fetchFamilyMembersFromDB();
      setMemberAndFamily(refetchedList);
    });
  }

  /**
   * Updates list after edit on FamilyMembers
   */
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
   * The FamilyMember is deleted from DB, and an updated list is fetched
   */
  useEffect(() => {
    if (props.onConfirmation === true) {
      fetchUpdateAfterDeletion();
      setConfirmedDeletion(false);
      setSelected(null);
    }
  }, [props.onConfirmation]);

  /**
   * Checks if deletion should begin
   */
  useEffect(() => {
    if (deleteMember === true) {
      props.onDeletion(deleteMember);
      props.memberToDelete(selected);
      setDeleteMember(false);
    } else {
      console.log("Deletion didn't begin/ already happened");
    }
  }, [deleteMember]);

  /**
   * Returns boolean based on if any members is selected
   */
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
          tBodyKey="familyBody"
          tTableKey="familyTable"
          tHeadKey="familyHead"
          key="YouAndYourFamilyCard"
        />
      </div>

      <div className="button-container">
        <button
          className="button-secondary-extra-small"
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
