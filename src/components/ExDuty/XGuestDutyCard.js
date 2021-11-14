import React from 'react'
import participantData from '../data/participantData.js'
import XGuestDuty from "./XGuestDuty"

function XGuestDutyCard () {
    const partData = participantData.map(data => <XGuestDuty data={data}  />);
    return (
    <div className="card-container">
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Pref. Duties</th>
                    </tr>
                </thead>
                <tbody>
                    {partData}
                    {partData}
                    {partData}
                </tbody>
            </table>
        </div>
        <div className="button-container">
            <button className="ButtonExtraSmall">Assign Selected</button>
            <button className="ButtonExtraSmall">Auto Assign All</button>
        </div>
        
    </div>
    )
}

export default XGuestDutyCard