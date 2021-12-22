import React from 'react';

function ShortInput(props) {
    return (
        <div className="short-input">
            <label>
                <p>{props.title}</p>
                <input type={props.type} value={props.value}
                onChange={props.changeValue} placeholder={props.placeholder}
                size="8"/>
            </label>
        </div>
    )
}

export default ShortInput;