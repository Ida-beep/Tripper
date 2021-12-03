import Parse from "parse"
 
const fetchDutiesFromDB = async () => {
    const dutyCollection = []
    const query = new Parse.Query("Duty");
    let allDutiesFromDB = await query.find();
    for (let i = 0; i < allDutiesFromDB.length; i++) { // finder alle duties i back4app baseret på objectId
        try {
            const duty = await query.get(allDutiesFromDB[i].id);
            const id = await allDutiesFromDB[i].id;
            const name = await duty.get("name");
            const minRequired = await duty.get("minRequired"); // kan ikke huske om dette var en ting...Tjek back4app.com
           
            const dutyObject = {
                id: id,
                name: name,
            minRequired: minRequired,
            };
            dutyCollection.push(dutyObject)
        
        } catch (error) {
            alert(`FAILED to retrieve the DUTY entry. Error: ${error.message}`);
          }
    } return dutyCollection
}

const fetchGuestsFromDB = async () => {
    const guestCollection = []
    const query = new Parse.Query("FamilyMember");
    let allGuestsfromDB = await query.find();
    for (let i = 0; i < allGuestsfromDB.length; i++) { // finder alle duties i back4app baseret på objectId
        try {
            const guest = await query.get(allGuestsfromDB[i].id);
            const id = await allGuestsfromDB[i].id;
            
            const firstName = await guest.get("firstName");
            const lastName = await guest.get("lastName");
            const age = await guest.get("age");
            const duties = await guest.get("duties");
           
            const guestObject = {
                id: id,
                firstName: firstName,
                lastName: lastName,
                age: age,
                duties: duties,
            };
            guestCollection.push(guestObject)
        
        } catch (error) {
            alert(`FAILED to retrieve the DUTY entry. Error: ${error.message}`);
          }
    } return guestCollection
}




export default {fetchDutiesFromDB:fetchDutiesFromDB,fetchGuestsFromDB:fetchGuestsFromDB}



