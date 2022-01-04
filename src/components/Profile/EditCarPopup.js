import React, { useState, useEffect } from "react";
import LongInput from "../Cards/LongInput";
import CarsAPI from "../API/CarsAPI";
import PopUp from "../Cards/PopUp";

function EditCarPopup(props) {
    const [carModel, setCarModel] = useState();
    const [licenseNumber, setLicenseNumber] = useState();
    const [color, setColor] = useState();
    const [seats, setSeats] = useState();
    const [id, setId] = useState();
    const [selectedCar, setSelectedCar] = useState();
    const carData = {id, carModel, licenseNumber, color, seats};

    useEffect(() => {
      if (typeof props.selectedCar === "undefined") {
        return;
      } else {
        setSelectedCar(props.selectedCar);
      }
    }, [props.selectedCar]);
  
    useEffect(() => {
      if (selectedCar) {
        setCarModel(selectedCar.carModel);
        setLicenseNumber(selectedCar.licensePlate);
        setColor(selectedCar.carColor);
        setSeats(selectedCar.carSeats);
        setId(selectedCar.id);
        console.log("id of selected is: ", selectedCar.id);
      }
    }, [selectedCar]);

    const buttons = [
        <button className="button-secondary-extra-small" 
          onClick={props.editState} >
          Cancel
        </button>,
        <button className="button-secondary-extra-small" 
          onClick={props.editState}>
          Finish
        </button>,
        <button className="button-primary-extra-small"
          type="submit" disabled={disable()}>
          Save
        </button>
    ];

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

    function handleSubmit(e) {
      e.preventDefault();
      CarsAPI.updateCar(carData).then(
        () => {
          console.log("succesfully called update");
          props.carDidUpdate(true);
        },
        (error) => {
          console.log("error in update: ", error.code);
        }
      );
    }

    function disable() {
      if (!carModel || !licenseNumber || !color || !seats) {
        return true;
      }
      return false;
    }

    return (props.editCarActive) && (
        <PopUp data={carData} submitChanges={handleSubmit} buttons={buttons}
          title="Edit Car Item">
          <div className="input-section">
            <LongInput title="Car" value={carModel} 
              changeValue={changeCarModel} type="text"/>
            <LongInput title="Seats" type="number"
              changeValue={changeSeats} value={seats} />
          </div>
          <div className="input-section">
            <LongInput title="License Number" value={licenseNumber}
              changeValue={changeLicenseNumber} type="text"/>
            <LongInput title="Color" type="text"
              changeValue={changeColor} value={color}/>
          </div>
        </PopUp>
    );
  }

export default EditCarPopup;