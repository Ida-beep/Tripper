import React from "react"
import duties from "../data/dutyList"
import XDutyInfo from './XDutyInfo.js'

function XDutiesCard(){
    const duty = duties.map(duties => <XDutyInfo duty={duties} />)
    
    return (
        <div className="card-container">
            <div className="table-container" >
            <table>
                <thead>
                    <tr>
                        <th>Duty</th>
                        <th>Min.</th>
                        <th>Assigned Guest</th>
                    </tr>
                </thead>
                <tbody>
                    {duty}
                </tbody>
            </table>
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