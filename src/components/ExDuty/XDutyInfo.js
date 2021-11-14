import React from "react"

function XDutyInfo(props){
    return ( 
        <tr>
            <td>{props.duty.name}</td>
            <td>{props.duty.minPeopleRequired}</td>
            <td>---</td>
        </tr>
    )
}

export default XDutyInfo