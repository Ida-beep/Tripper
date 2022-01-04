import React, { useState, useEffect } from "react";
import TableScaffold from "../Cards/TableScaffold";
import CarsAPI from "../API/CarsAPI";

function CarsAndSeatsCard(props) {
  const [carsAndSeats, setCarsAndSeats] = useState([]);
  const [selected, setSelected] = useState();

  function addElementToSelected(element) {
    setSelected(element);
    console.log(selected);
  }

  /**
   * UPDATE
   */
   useEffect(() => {
    if (props.carDidUpdate === true) {
      console.log(
        "didupdate was passed to YouAndYourFamily with value :",
        props.carDidUpdate
      );
      fetchAfterUpdate();
      setSelected(null);
      console.log("after update the list is: ", selected);
      props.setCarDidUpdate(false);
    }
  }, [props.carDidUpdate]);

  async function fetchAfterUpdate() {
    const refetchedList = await CarsAPI.fetchCarsFromDB();
    setCarsAndSeats(refetchedList);
  }

  useEffect(() => {
    props.selectedCar(selected);
    console.log("New selected useeffect to use in EditCar", selected);
  }, [selected]);

  async function handleDelete(e) {
    e.preventDefault();
    CarsAPI.deleteCar(selected).then(async () => {
      const refetchedList = await CarsAPI.fetchCarsFromDB();
      setCarsAndSeats(refetchedList);
    });
  }

  useEffect(() => {
    async function fetchData() {
      setCarsAndSeats(await CarsAPI.fetchCarsFromDB());
    }
    fetchData();
    console.log("use Effect for fetchCarsFromDB called");
  }, []);

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
          onSelection={(selected) => addElementToSelected(selected)}
          tkey={["carModel", "licensePlate", "carColor", "carSeats"]}
          theaders={["Car", "License", "Color", "Seats"]}
          tdata={carsAndSeats}
        />
      </div>

      <div className="button-container">
        <button
          className="button-secondary-extra-small"
          onClick={handleDelete}
          disabled={disable()}
        >
          Delete
        </button>
        <button className="button-secondary-extra-small" 
          disabled={disable()} onClick={props.editActive}>
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
