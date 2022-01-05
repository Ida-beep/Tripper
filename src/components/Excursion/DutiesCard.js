import React, { useState, useEffect } from "react";
import TableScaffold from "../Cards/TableScaffold";
import DutiesAPI from "../API/DutiesAPI";

/**
 * DutiesCard lists all duties of an Excursion
 */
function DutiesCard(props) {
  const [allDuties, setAllDuties] = useState([]);
  const [selected, setSelected] = useState();
  const deletionConfirmed = props.deletionConfirmed;

  /**
   * Fetches updated duty list
   */
  async function fetchUpdatedDuties() {
    const refetchedList = await DutiesAPI.fetchDutiesFromDB();
    setAllDuties(refetchedList);
  }

  /**
   * Removes all selected items from array
   */
  function removeAllSelected() {
    if (typeof selected !== "undefined") {
      for (let i = 0; i < selected.length; i++) {
        selected.splice(selected[i]);
      }
    }
  }

  /**
   * Check that deletetion is happening
   */
  useEffect(() => {
    props.setDeletionHappening(false);
    props.toggleDeletePopup(false);
    removeAllSelected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDuties]);

  /**
   * Deletes duties and refetches the list of duties
   */
  useEffect(() => {
    function fetchUpdateAfterDeletion() {
      DutiesAPI.deleteDuty(selected).then(async () => {
        const refetchedList = await DutiesAPI.fetchDutiesFromDB();
        setAllDuties(refetchedList);
      });
    }
    if (deletionConfirmed === true) {
      fetchUpdateAfterDeletion();
    }
  }, [deletionConfirmed]);

  /**
   * Fetches new list of duties, and resets the list of selected items
   */
  useEffect(() => {
    if (props.addPrevious === true) {
      fetchUpdatedDuties();
      removeAllSelected();
      props.setAddPrevious(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [props.addPrevious]);

  /**
   * Fetches new list of duties after a new one is added
   */
  useEffect(() => {
    fetchUpdatedDuties();
    props.addingDuty(false);
  }, [props.onDutiesAdded]);

  /**
   * Fetch all duties on first render
   */
  useEffect(() => {
    async function fetchData() {
      setAllDuties(await DutiesAPI.fetchDutiesFromDB());
    }
    fetchData();
  }, []);

  /**
   * Handles delete by toggleing deletePopup
   */
  async function handleDelete(e) {
    e.preventDefault();
    props.toggleDeletePopup(true);
    props.setDutyToDelete(selected);
  }

  /**
   * Determins whether a button should be disabled or enabled
   */
  function disableDelete() {
    if (!selected) {
      return true;
    }
    return false;
  }


  console.log("dutieees card")

  return (
    <div className="card-container">
      <div className="table-container">
        <TableScaffold
          onSelection={(selected) => setSelected(selected)}
          tkey={["name", "minRequired", "peopleAssigned"]}
          theaders={["Duty", "Min. participants", "People Assigned"]}
          tdata={allDuties}
          tBodyKey="dutiesBody"
          tTableKey="dutiesTable"
          tHeadKey="dutiesHead"
          key="DutiesCard"
        />
      </div>
      <div className="button-container">
        <button
          className="button-secondary-extra-small"
          onClick={handleDelete}
          disabled={disableDelete()}
        >
          Delete
        </button>
        <button
          className="button-secondary-extra-small"
          onClick={props.previousActive}
        >
          Find Previous
        </button>
        <button
          className="button-primary-extra-small"
          onClick={props.addActive}
        >
          Add Duty
        </button>
      </div>
    </div>
  );
}

export default DutiesCard;
