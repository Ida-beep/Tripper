import React, { useState, useEffect } from "react";
import PopUp from "../Cards/PopUp";
import TableScaffold from "../Cards/TableScaffold";
import ExcursionAPI from "../API/ExcursionAPI";
import DutiesAPI from "../API/DutiesAPI";

/**
 * Lists previous excursion and their shopping lists
 */
function PreviousDutiesPopup(props) {
  const [excursions, setExcursions] = useState([]);
  const [selectedExcursion, setSelectedExcursion] = useState();
  const [excursionDuties, setExcursionDuties] = useState([]);
  const [selectedDuties, setSelectedDuties] = useState([]);

  /**Fetched All Excursion from database*/
  useEffect(() => {
    async function fetchData() {
      ExcursionAPI.fetchAllExcursionsFromDB().then(
        (result) => {
          setExcursions(result);
        },
        (error) => {
          console.log(error.code);
        }
      );
    }
    fetchData();
  }, []);

  /**Submits selected duties*/
  function handleSubmit(e) {
    e.preventDefault();
    DutiesAPI.addMultipleDuties(selectedDuties);
  }

  /**Adds an element to the array of duties*/
  function setDutyElementToSelected(element) {
    setSelectedDuties((prevState) => [...prevState, element]);
  }

  /**Fetches data from Previous Excursions*/
  useEffect(() => {
    if (typeof selectedExcursion !== "undefined") {
      async function fetchData() {
        const id = selectedExcursion.id;
        setExcursionDuties(await DutiesAPI.fetchPreviousDutyFromDB(id));
      }
      fetchData();
    }
  }, [selectedExcursion]);

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Back
    </button>,
    <button className="button-primary-extra-small">Add Selected</button>,
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
                  setSelectedExcursion(selectedItem)
                }
                tkey={["excursionTitle"]}
                theaders={["Excursion"]}
                tdata={excursions}
                tBodyKey="popupDutiesBody"
                tTableKey="popupDutiesTable"
                tHeadKey="popupDutiesHead"
                key="PreviousDutyCard"
              />
            </div>
          </div>
          <button
            className="button-secondary-extra-small"
            disabled={true}
            type="button"
          >
            ???
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
                tBodyKey="popupExcursionBody"
                tTableKey="popupExcursionTable"
                tHeadKey="popupExcursionHead"
                key="PreviousDutyPopup"
              />
            </div>
          </div>
        </div>
      </PopUp>
    )
  );
}

export default PreviousDutiesPopup;
