import React, { useState, useEffect } from "react";
import LongInput from "../Cards/LongInput";
import CarsAPI from "../API/CarsAPI";
import PopUp from "../Cards/PopUp";

/**
 * Handles edits on a chosen car
 */
function EditCarPopup(props) {
  const [carModel, setCarModel] = useState();
  const [licenseNumber, setLicenseNumber] = useState();
  const [color, setColor] = useState();
  const [seats, setSeats] = useState();
  const [id, setId] = useState();
  const [selectedCar, setSelectedCar] = useState();
  const carData = { id, carModel, licenseNumber, color, seats };

  //Sets selected car once props.selectedCar is not null
  useEffect(() => {
    if (typeof props.selectedCar === "undefined") {
      return;
    } else {
      setSelectedCar(props.selectedCar);
    }
  }, [props.selectedCar]);

  /**Sets all variables from selected car once 
   * it contains a value*/
  useEffect(() => {
    if (selectedCar) {
      setCarModel(selectedCar.carModel);
      setLicenseNumber(selectedCar.licensePlate);
      setColor(selectedCar.carColor);
      setSeats(selectedCar.carSeats);
      setId(selectedCar.id);
    }
  }, [selectedCar]);

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Back
    </button>,
    <button
      className="button-primary-extra-small"
      type="submit"
      disabled={disable()}
    >
      Save
    </button>,
  ];

  /**Sets field values to 
   * respective variables */
  function changeCarModel(e) {
    e.preventDefault();
    setCarModel(e.target.value);
  }
  function changeLicenseNumber(e) {
    e.preventDefault();
    setLicenseNumber(e.target.value);
  }
  function changeColor(e) {
    e.preventDefault();
    setColor(e.target.value);
  }
  function changeSeats(e) {
    e.preventDefault();
    setSeats(e.target.value);
  }

  //Updates car on submit
  function handleSubmit(e) {
    e.preventDefault();
    CarsAPI.updateCar(carData).then(
      () => {
        console.log("Succesfully updated car");
        props.carDidUpdate(true);
      },
      (error) => {
        console.log("Failed to update car: ", error.code);
      }
    );
  }

  //Disables submit untill all fields are filled
  function disable() {
    if (!carModel || !licenseNumber || !color || !seats) {
      return true;
    }
    return false;
  }

  return (
    props.editCarActive && (
      <PopUp
        data={carData}
        submitChanges={handleSubmit}
        buttons={buttons}
        title="Edit Car Item"
      >
        <div className="input-section">
          <LongInput
            title="Car"
            value={carModel}
            changeValue={changeCarModel}
            type="text"
          />
          <LongInput
            title="Seats"
            type="number"
            changeValue={changeSeats}
            value={seats}
          />
        </div>
        <div className="input-section">
          <LongInput
            title="License Number"
            value={licenseNumber}
            changeValue={changeLicenseNumber}
            type="text"
          />
          <LongInput
            title="Color"
            type="text"
            changeValue={changeColor}
            value={color}
          />
        </div>
      </PopUp>
    )
  );
}

export default EditCarPopup;
