import React, {useState, useEffect} from "react"
import TableScaffold from "./TableScaffold"
import API_get from "../API_get"

function DutiesCard(){    
    
    const [allDuties, setAllDuties] = useState([])
    
    // Renders DutyOverview from DB
    useEffect(async ()=> {
        setAllDuties(await API_get.fetchDutiesFromDB())
    }, [])
      
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
                    <button className="button-extra-small">Add Duty</button>
                    <button className="button-extra-small">Find Previous</button>
                </div>
        </div>    
    )
}

export default DutiesCard