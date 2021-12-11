import { Parse } from 'parse';

const fetchDutiesFromDB = async () => {
    const dutyCollection = []
    const query = new Parse.Query("Duty");
    
    let allDutiesFromDB = await query.find();
    for (let i = 0; i < allDutiesFromDB.length; i++) { // finder alle duties i back4app baseret på objectId
        try {
            const duty = await query.get(allDutiesFromDB[i].id);
            
            const id = allDutiesFromDB[i].id;
            const name = duty.get("name");
            const minRequired = duty.get("minRequired"); // kan ikke huske om dette var en ting...Tjek back4app.com
           
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

async function getDuties(){
    const Duty = Parse.Object.extend("Duty");
    const query = new Parse.Query(Duty);
    const dutyCollection = [];

    const results = await query.find();
    
    results.forEach(duty => {
        const name = duty.get("name");
        const minRequiredGuests = duty.get("minRequiredGuests");
           
        const dutyObject= {
            name: name,
            minRequiredGuests: minRequiredGuests,
        };
        
        dutyCollection.push(dutyObject)
    });
    
    return dutyCollection;
}

export default {
    fetchDutiesFromDB:fetchDutiesFromDB,
    getDuties:getDuties};