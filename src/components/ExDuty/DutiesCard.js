import React from "react"
import duties from "../data/dutyList"
import TableScaffold from "./TableScaffold"

function DutiesCard(){    
    return (
        <div className="card-container">
            <div className="table-container" >
                <TableScaffold 
                    // Pass the key name from database object in array matching headers 
                    tkey={["name","minPeopleRequired"]}
                    //Pass Real headers in array
                    theaders={["Duty","Min. guests"]} 
                    // Pass object data source 
                    tdata={duties}
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