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
    try {
      async function fetchData() {
        setExcursions(await ExcursionAPI.fetchAllExcursionsFromDB());
      }
      fetchData();
      console.log("Previous shopping lists useEffect called");
    } catch (error) {
      console.log("couldn't read prevDuties");
    }
  }, []);

  function handleSubmit(e) {
    console.log("selected duties: ", selectedDuties);
    e.preventDefault();
    console.log("handleSubmit called");
    DutiesAPI.addMultipleDuties(selectedDuties[selectedDuties.length - 1]);
  }

  /**  this one creates an infinite loop 
    - what I used to get the arrowbutton working*/
  // function openExcursion() {
  //     if (typeof selectedExcursion !== "undefined") {
  //         async function fetchData(){
  //             const id = selectedExcursion.id
  //             setExcursionDuties(await DutiesAPI.fetchPreviousDutyFromDB(id))
  //         };
  //         fetchData();
  //         console.log("openExcrsion called");
  //     }
  // }

  /*   CAREFUL: useEffect(() => {
    if (typeof selectedExcursion !== "undefined") {
      async function fetchData() {
        const id = selectedExcursion.id;
        setExcursionDuties(await DutiesAPI.fetchPreviousDutyFromDB(id));
      }
      fetchData();
      console.log("openExcrsion called");
    }
  }, [selectedExcursion]); */

  function disableArrow() {
    if (!selectedExcursion) {
      return true;
    }
    return false;
  }

  function setExcursionElementToSelected(element) {
    setSelectedExcursion(element);
  }

  function setDutyElementToSelected(element) {
    setSelectedDuties((prevState) => [...prevState, element]);
    setSelectedDuties(element);
  }

  function handleAdd() {
    props.setAddPrevious(true);
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Cancel
    </button>,
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Finish
    </button>,
    <button className="button-primary-extra-small" onClick={handleAdd}>
      Add Selected
    </button>,
  ];

  return (
    props.trigger && (
      <PopUp
        title={props.title}
        editState={props.editState}
        submitChanges={handleSubmit}
        buttons={buttons}
      >
        <div className="cards-container">
          <div style={{ marginTop: "20px" }} className="card-container">
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
            disabled={disableArrow()}
            type="button"
          >
            →
          </button>
          {/* onClick={openExcursion()} */}
          <div style={{ marginTop: "20px" }} className="card-container">
            <div className="table-container">
              <TableScaffold
                onSelection={(selectedItem) =>
                  setDutyElementToSelected(selectedItem)
                }
                tkey={["name", "minRequired"]}
                theaders={["Duty", "Min. guests"]}
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

// onSelection={(selectedItem)=>addElementToSelected(selectedItem)}
