import { Parse } from 'parse';

const fetchCarsFromDB = async () => {
    const carCollection = []
    const query = new Parse.Query("Car");
    let allCarsfromDB = await query.find();
    for (let i = 0; i < allCarsfromDB.length; i++) { // finder alle cars i back4app baseret på objectId
        try {
            const User = Parse.User.current();
            const userid = User.id;
            const car = await query.get(allCarsfromDB[i].id);
            
            if (allCarsfromDB[i].get("owner") == userid) {
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
                    passengers: passengers
                };
                
                carCollection.push(carObject)
            }
            
        } catch (error) {
            alert(`FAILED to retrieve the CAR entry. Error: ${error.message}`);
          }
    } 
    
    return carCollection
}

export default {
    fetchCarsFromDB:fetchCarsFromDB
};