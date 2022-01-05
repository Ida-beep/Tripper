import React, { useState, useEffect } from "react";
import TableScaffold from "../Cards/TableScaffold";
import CarsAPI from "../API/CarsAPI";

/**
 * CarsAndSeatsCard displays information about the
 * cars and allows the user to add, edit and delete cars.
 */
function CarsAndSeatsCard(props) {
  /* eslint-disable no-unused-vars */
  const [carsAndSeats, setCarsAndSeats] = useState([]);
  const [selected, setSelected] = useState();
  const [deleteCar, setDeleteCar] = useState(false);
  const [addingCar, setAddingCar] = useState(false);
  const [confirmedDeletion, setConfirmedDeletion] = useState(false);

  /**
   * Passes selected props to parent
   */
  useEffect(() => {
    props.selectedCar(selected);
  }, [selected]);

  /**
   * Updates the current list of Cars
   */
  async function fetchData() {
    setCarsAndSeats(await CarsAPI.fetchCarsFromDB());
  }

  /**
   * Fetches all data at initial page render
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Updates after Car is edited
   */
  useEffect(() => {
    if (props.carDidUpdate === true) {
      fetchData();
      setSelected(null);
      props.setCarDidUpdate(false);
    }
  }, [props.carDidUpdate]);

  /**
   * Updates after a new Car is added
   */
  useEffect(() => {
    setAddingCar(true);
    fetchData();
    setAddingCar(false);
  }, [props.showCarPopup]);

  /**
   * Sets the selected to null after deletion
   */
  useEffect(() => {
    setSelected(null);
  }, [props.isCanceled]);

  /**
   * Check if the users has confirmed to delete
   */
  useEffect(() => {
    if (props.onConfirmation === true) {
      fetchUpdateAfterDeletion();
      setConfirmedDeletion(false);
      setSelected(null);
    }
  }, [props.onConfirmation]);

  function fetchUpdateAfterDeletion() {
    CarsAPI.deleteCar(selected).then(async () => {
      const refetchedList = await CarsAPI.fetchCarsFromDB();
      setCarsAndSeats(refetchedList);
    });
  }

  /**
   * Checks whether deletion should begin
   */
  useEffect(() => {
    if (deleteCar === true) {
      props.onDeletion(true);
      props.carToDelete(selected);
      setDeleteCar(false);
    } else {
      console.log("Deletion didn't begin/ already happened");
    }
  }, [deleteCar]);

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
          tkey={["carModel", "licensePlate", "carColor", "carSeats"]}
          theaders={["Car", "License", "Color", "Seats"]}
          tdata={carsAndSeats}
          tBodyKey="carsBody"
          tTableKey="carsTable"
          tHeadKey="carsHead"
          key="CarsAndSeatsCard"
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
          disabled={disable()}
          onClick={props.editActive}
        >
          Edit
        </button>
        <button
          className="button-primary-extra-small"
          onClick={props.toggleCarItem}
        >
          Add Car
        </button>
      </div>
    </div>
  );
}

export default CarsAndSeatsCard;
