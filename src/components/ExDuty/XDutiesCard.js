import React from "react"
import duties from "../data/dutyList"
import TableScaffold from "./TableScaffold"

function XDutiesCard(){    
    return (
        <div className="card-container">
            <div className="table-container" >
                <TableScaffold 
                    // Pass the key name from database object in array matching headers 
                    tkey={["name","minPeopleRequired","assignedGuests"]}
                    //Pass Real headers in array
                    theaders={["Duty","Min.","Assigned Guest"]} 
                    // Pass object data source 
                    tdata={duties}
                />
            </div>
                <div className="button-container">
                    <button className="ButtonExtraSmall">Delete</button>
                    <button className="ButtonExtraSmall">Add Duty</button>
                    <button className="ButtonExtraSmall">Find Previous</button>
                </div>
        </div>    
    )
}

export default XDutiesCard