import { Parse } from "parse";

const fetchCarsFromDB = async () => {
  const carCollection = [];
  const query = new Parse.Query("Car");
  let allCarsfromDB = await query.find();

  for (let i = 0; i < allCarsfromDB.length; i++) {
    try {
      const User = Parse.User.current();
      const userid = User.id;
      const car = await query.get(allCarsfromDB[i].id);

      if (allCarsfromDB[i].get("owner") === userid) {
        const id = allCarsfromDB[i].id;
        const carModel = car.get("carModel");
        const licensePlate = car.get("licensePlate");
        const carColor = car.get("carColor");
        const carSeats = car.get("carSeats");
        const passengers = car.get("passengers");

        const carObject = {
          id: id,
          carModel: carModel,
          licensePlate: licensePlate,
          carColor: carColor,
          carSeats: carSeats,
          passengers: passengers,
        };

        carCollection.push(carObject);
      }
    } catch (error) {
      alert(`Failed to retrieve the Car entry. Error: ${error.message}`);
    }
  }

  return carCollection;
};

function addCar(data) {
  try {
    const User = Parse.User.current();
    const id = User.id;
    const model = data[0];
    const license = data[1];
    const color = data[2];
    const seats = parseInt(data[3]);
    const Car = Parse.Object.extend("Car");
    const car = new Car();

    car.set("owner", id);
    car.set("carModel", model);
    car.set("licensePlate", license);
    car.set("carColor", color);
    car.set("carSeats", seats);

    car.save().then(
      (car) => {
        alert("A car was submitted: " + car);
      },
      (error) => {
        alert("Failed to create object, error code: " + error.message);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function deleteCar(Car) {
  const car = Car;
  const carID = car.id;
  const ShoppingList = Parse.Object.extend("Car");
  const query = new Parse.Query(ShoppingList);

  query.equalTo("objectId", carID);
  let result = await query.find();
  result = result[0];

  result.destroy().then(
    () => {
      alert("Car successfully deleted ");
    },
    (error) => {
      alert("failed to delete with error-code : " + error.code);
    }
  );
}

const updateCar = async (selected) => {
  const query = new Parse.Query("Car");
  try {
    const object = await query.get(selected.id);
    object.set("carModel", selected.carModel);
    object.set("licensePlate", selected.licenseNumber);
    object.set("carSeats", parseInt(selected.seats));
    object.set("owner", Parse.User.current().id);
    object.set("carColor", selected.color);
    try {
      const response = await object.save();
      alert("Car updated");
    } catch (error) {
      console.error("Error while updating Car", error);
      alert("Error while updating Car" + error);
    }
  } catch (error) {
    console.error("Error while retrieving object Car", error);
    alert("Error while retrieving object Car" + error);
  }
};

export default {
  addCar: addCar,
  deleteCar: deleteCar,
  fetchCarsFromDB: fetchCarsFromDB,
  updateCar: updateCar,
};
