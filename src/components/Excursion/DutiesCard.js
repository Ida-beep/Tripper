import React, { useState, useEffect } from "react";
import TableScaffold from "../Cards/TableScaffold";
import DutiesAPI from "../API/DutiesAPI";

function DutiesCard(props) {
  const [allDuties, setAllDuties] = useState([]);
  const [selected, setSelected] = useState();

  async function fetchUpdatedDuties() {
    const refetchedList = await DutiesAPI.fetchDutiesFromDB();
    setAllDuties(refetchedList);
  }

  function removeAllSelected() {
    if (typeof selected !== "undefined") {
      for (let i = 0; i < selected.length; i++) {
        selected.splice(selected[i]);
      }
      console.log("the content of selected-array is now: ", selected);
    }
  }

  useEffect(() => {
    props.setDeletionHappening(false);
    props.toggleDeletePopup(false);
    removeAllSelected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDuties]);

  useEffect(() => {
    function fetchUpdateAfterDeletion() {
      console.log("deleting: ", selected);
      DutiesAPI.deleteDuty(selected).then(async () => {
        const refetchedList = await DutiesAPI.fetchDutiesFromDB();
        setAllDuties(refetchedList);
      });
    }
    if (props.deletionConfirmed === true) {
      console.log("The deletion is confirmed?: ", props.deletionConfirmed);
      fetchUpdateAfterDeletion();
    }
  }, [props.deletionConfirmed]);

  useEffect(() => {
    if (props.addPrevious === true) {
      fetchUpdatedDuties();
      console.log("after updating the list is now: ", selected);
      removeAllSelected();
      props.setAddPrevious(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [props.addPrevious]);

  useEffect(() => {
    console.log("DUTIES CARD : Added duties with value ", props.onDutiesAdded);
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
    console.log("DutiesCard useEffect called");
  }, []);

  async function handleDelete(e) {
    e.preventDefault();
    props.toggleDeletePopup(true);
    console.log("DUTIES CARD: selected to be deleted ", selected);
    props.setDutyToDelete(selected);
  }

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
