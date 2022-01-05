import React from "react";
import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import DutiesAPI from "../API/DutiesAPI.js";
import DropDownItem from "./DropDownItem";

/**
 * DropDownMenu takes all duties from backend and displays them as DropDownItems.
 * You can select an amount of Duties that will be saved as you preferred duties (selectedDuties).
 */

function DropDownMenu() {
  /* eslint-disable no-unused-vars */
  let displayedDuties = [];
  const [selectedDuties, setSelectedDuties] = useState([]);

  useEffect(() => {
    function mapDuties(fetchedDutyList) {
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
    DutiesAPI.fetchDutiesFromDB().then((result) => {
      mapDuties(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DropDown>{displayedDuties}</DropDown>;
}

export default DropDownMenu;
