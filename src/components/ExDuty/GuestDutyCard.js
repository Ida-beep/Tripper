import React from 'react'
import participantData from '../data/participantData.js'
import TableScaffold from './TableScaffold.js'




function XGuestDutyCard () {
    // const partData = participantData.map(data => <XGuestDuty data={data}  />);
    return (   
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>Participants and Prefered Duties</h4>
            <div className="table-container">
                <TableScaffold 
                    tkey={["name","age","dutypreferences"]}
                    theaders={["Name","Age","Duty Pref"]} 
                    tdata={participantData}
                />
            </div>
            
            <div className="button-container">
                <button className="button-extra-small">Assign Selected</button>
                <button className="button-extra-small">Auto Assign All</button>
            </div>       
        </div>
    )
}

export default XGuestDutyCard