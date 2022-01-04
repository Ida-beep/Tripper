import React, { useState, useEffect } from "react";
import PopUp from "../Cards/PopUp";
import TableScaffold from "../Cards/TableScaffold";
import ExcursionAPI from "../API/ExcursionAPI";
import DutiesAPI from "../API/DutiesAPI";

function PreviousDutiesPopup(props) {
  const [excursions, setExcursions] = useState([]);
  const [selectedExcursion, setSelectedExcursion] = useState();
  const [excursionDuties, setExcursionDuties] = useState([]);
  const [selectedDuties, setSelectedDuties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      ExcursionAPI.fetchAllExcursionsFromDB().then(
        (result) => {
          console.log("Fetching prev Excursion: ", result);
          setExcursions(result);
        },
        (error) => {
          console.log(error.code);
        }
      );
    }
    fetchData();
    console.log("USEEFFECT: fetched these: ", excursions);
    console.log("Previous shopping lists useEffect called");
  }, []);

  function handleSubmit(e) {
    console.log("selected duties: ", selectedDuties);
    e.preventDefault();
    console.log("handleSubmit called");
    DutiesAPI.addMultipleDuties(selectedDuties);
  }

  function setDutyElementToSelected(element) {
    setSelectedDuties((prevState) => [...prevState, element]);
  }

  /**
   * Fetching data from Previous Excursions
   */
  useEffect(() => {
    if (typeof selectedExcursion !== "undefined") {
      async function fetchData() {
        const id = selectedExcursion.id;
        setExcursionDuties(await DutiesAPI.fetchPreviousDutyFromDB(id));
      }
      fetchData();
      console.log("openExcrsion called");
    }
  }, [selectedExcursion]);

  function disableArrow() {
    if (!selectedExcursion) {
      return true;
    }
    return false;
  }

  function setExcursionElementToSelected(element) {
    setSelectedExcursion(element);
  }

  /*   function finishAddingPrevItems() {
    props.editState;
    props.onFinishAddingPrev(true);
  }
 */
  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Cancel
    </button>,
    <button className="button-primary-extra-small">Add Selected</button>,
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Finish
    </button>,
  ];

  return (
    props.trigger && (
      <PopUp
        editState={props.editState}
        submitChanges={handleSubmit}
        buttons={buttons}
      >
        <div className="cards-container">
          <div style={{ marginTop: "20px" }} className="card-container">
            <h4 style={{ fontSize: "20px" }}>Choose Excursion</h4>
            <div className="table-container">
              <TableScaffold
                onSelection={(selectedItem) =>
                  setExcursionElementToSelected(selectedItem)
                }
                tkey={["excursionTitle"]}
                theaders={["Excursion"]}
                tdata={excursions}
              />
            </div>
          </div>
          <button
            className="button-secondary-extra-small"
            disabled={true}
            type="button"
          >
            →
          </button>
          <div style={{ marginTop: "20px" }} className="card-container">
            <h4 style={{ fontSize: "20px" }}>Duties</h4>
            <div className="table-container">
              <TableScaffold
                onSelection={(selectedItem) =>
                  setDutyElementToSelected(selectedItem)
                }
                tkey={["name", "minRequired"]}
                theaders={["Duty", "Min. Participants"]}
                tdata={excursionDuties}
              />
            </div>
          </div>
        </div>
      </PopUp>
    )
  );
}

export default PreviousDutiesPopup;
