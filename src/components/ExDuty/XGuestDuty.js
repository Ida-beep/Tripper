import React from "react"


function XGuestDuty(props){
        return(
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
            <td>{props.data.dutypreferences[0]}, {props.data.dutypreferences[1]}, {props.data.dutypreferences[2]}</td>
        </tr>
        )
}

export default XGuestDuty