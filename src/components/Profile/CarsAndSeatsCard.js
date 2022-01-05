import React, { useState, useEffect } from "react";
import TableScaffold from "../Cards/TableScaffold";
import CarsAPI from "../API/CarsAPI";

/**
 * @public CarsAndSeatsCard displays information about the
 * cars and allows the user to add, edit and delete cars.
 */
function CarsAndSeatsCard(props) {
  const [carsAndSeats, setCarsAndSeats] = useState([]);
  const [selected, setSelected] = useState();
  const [deleteCar, setDeleteCar] = useState(false);
  const [addingCar, setAddingCar] = useState(false);
  const [confirmedDeletion, setConfirmedDeletion] = useState(false);

  useEffect(() => {
    props.selectedCar(selected);
    console.log("New selected useeffect to use in EditCar", selected);
  }, [selected]);

  /**
   * @public Updates the current list of Cars
   */
  async function fetchData() {
    setCarsAndSeats(await CarsAPI.fetchCarsFromDB());
  }

  useEffect(() => {
    fetchData();
    console.log("use Effect for fetchCarsFromDB called");
  }, []);

  /**
   * @public Updates after Car is edited
   */
  useEffect(() => {
    if (props.carDidUpdate === true) {
      fetchData();
      setSelected(null);
      props.setCarDidUpdate(false);
    }
  }, [props.carDidUpdate]);

  /**
   * @public Updates after a new Car is added
   */
  useEffect(() => {
    setAddingCar(true);
    fetchData();
    setAddingCar(false);
  }, [props.showCarPopup]);

  /**
   * @public Sets the selected to null after deletion
   */
  useEffect(() => {
    setSelected(null);
  }, [props.isCanceled]);

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

  useEffect(() => {
    console.log("Checking if deletion should bein");
    if (deleteCar === true) {
      console.log("deletion process begun, deleting :", selected);
      props.onDeletion(true);
      console.log("deletion was set to truuuuee: ");
      props.carToDelete(selected);
      setDeleteCar(false);
    } else {
      console.log("deletion didn't begin/ already happened");
    }
  }, [deleteCar]);

  // function handleDelete(e) {
  //   console.log("handleDelete called, selected car passed on to Profile");
  //   e.preventDefault();
  //   setDeleteCar(true);
  //   console.log("delete caaar" + deleteCar);
  // }

  // async function handleDelete(e) {
  //   e.preventDefault();
  //   CarsAPI.deleteCar(selected).then(async () => {
  //     const refetchedList = await CarsAPI.fetchCarsFromDB();
  //     setCarsAndSeats(refetchedList);
  //   });
  // }

  function handleDelete(e) {}

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
