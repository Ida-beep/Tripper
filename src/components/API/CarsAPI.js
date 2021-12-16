import { Parse } from 'parse';

const fetchCarsFromDB = async () => {
    const carCollection = []
    const query = new Parse.Query("Car");
    let allCarsfromDB = await query.find();
    for (let i = 0; i < allCarsfromDB.length; i++) { // finder alle cars i back4app baseret på objectId
        try {
            const guest = await query.get(allCarsfromDB[i].id);
            
            const id = allCarsfromDB[i].id;
            const carModel = guest.get("carModel");
            const licensePlate = guest.get("licensePlate");
            const carColor = guest.get("carColor");
            const carSeats = guest.get("carSeats");
           
            const carObject = {
                id: id,
                carModel: carModel,
                licensePlate: licensePlate,
                carColor: carColor,
                carSeats: carSeats,
            };
            
            carCollection.push(carObject)
        
        } catch (error) {
            alert(`FAILED to retrieve the CAR entry. Error: ${error.message}`);
          }
    } return carCollection
}

export default {
    fetchCarsFromDB:fetchCarsFromDB
};