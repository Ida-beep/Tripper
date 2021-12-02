import Parse from "parse"
import React, {useState} from "react"
import duties from "../data/dutyList"
import TableScaffold from "./TableScaffold"





function DutiesCard(){    
    
    const [allDuties, setAllDuties] = useState([])
    
    let dutyCollection = []; // tom samling af duties. Denne fylder vi op til let iteration.
    
    async function getDutiesFromDB() {
        const query = new Parse.Query("Duty");
        let allDutiesDromDB = await query.find();

        for (let i = 0; i < allDutiesDromDB.length; i++) { // finder alle duties i back4app baseret på objectId
            try {
                const duty = await query.get(allDutiesDromDB[i].id);
                const id = allDutiesDromDB[i].id;
                const name = duty.get("name");
                const minRequired = duty.get("minRequired"); // kan ikke huske om dette var en ting...Tjek back4app.com
                // udvid denne med alt hvad en duty er ved at bruge duty.get("attribut")

                const dutyObject = {
                    id: id,
                    name: name,
                 minRequired: minRequired,
                // giv den derefter med her.
                };

            InsertDutyToLocalCollection(dutyObject);
        
            } catch (error) {
            alert(`FAILED to retrieve the DUTY entry. Error: ${error.message}`);
            }
        } setAllDuties(dutyCollection)
    }

    function InsertDutyToLocalCollection(duty) {
        dutyCollection.push(duty); // vi samler alle de duties du har fundet fra databasen her.
        
    }
    
    return (
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>Excursion Duties</h4>
            <div className="table-container" >
                <TableScaffold 
                    // Pass the key name from database object in array matching headers 
                    tkey={["name","minRequired"]}
                    //Pass Real headers in array
                    theaders={["Duty","Min. guests"]} 
                    // Pass object data source 
                    tdata={allDuties}
                />
            </div>
                <div className="button-container">
                    <button className="button-extra-small">Delete</button>
                    <button onClick={getDutiesFromDB} className="button-extra-small">Add Duty</button>
                    <button className="button-extra-small">Find Previous</button>
                </div>
        </div>    
    )
}

export default DutiesCard