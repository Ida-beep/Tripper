import React from 'react';

function LongInput(props) {

    console.log("value: ", props.value)

    return (
        <div className="long-input">
            <label>
                <p>{props.title}</p>
                <input type={props.type} value={props.value}
                onChange={props.changeValue} placeholder={props.placeholder}/>
            </label>
        </div>
    )
}

export default LongInput;