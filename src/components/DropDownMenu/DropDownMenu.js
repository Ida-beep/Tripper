import React from "react";
import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import DutiesAPI from "../API/DutiesAPI.js";
import DropDownItem from "./DropDownItem";

/**
 * @public DropDownMenu takes all duties from backend and displays them as DropDownItems.
 * You can select an amount of Duties that will be saved as you preferred duties (selectedDuties).
 */

function DropDownMenu() {
  let displayedDuties = [];
  const [selectedDuties, setSelectedDuties] = useState([]);
  const [open, setOpen] = useState(false);

  /*   function addToArr(name) {
    console.log(name);
    if (selectedDuties.length < 3) {
      setSelectedDuties((prevState) => [...prevState, name]);
    }
  } */
  /*  function removeDuty(name) {
    console.log(selectedDuties);
    let index = selectedDuties.indexOf(name);
    selectedDuties.splice(index, 1);
    console.log(selectedDuties);
  } */

  function mapDuties(fetchedDutyList) {
    console.log("mapping duties.. : " + fetchedDutyList.length);
    for (let i = 0; i < fetchedDutyList.length; i++) {
      displayedDuties.push(
        <DropDownItem
          key={fetchedDutyList[i].id}
          name={fetchedDutyList[i].name}
          isSelected={(duty) =>
            setSelectedDuties((prevState) => [...prevState, duty])
          }
        />
      );
    }
  }

  useEffect(() => {
    DutiesAPI.fetchDutiesFromDB().then((result) => {
      console.log("the result of API call is: ", result);
      mapDuties(result);
    });
  }, []);

  return <DropDown>{displayedDuties}</DropDown>;
}

export default DropDownMenu;
