import React from 'react';

function ShortInput(props) {
    return (
        <div className="short-input">
            <label>
                <p>{props.title}</p>
                <input type={props.type} value={props.value}
                onChange={props.changeValue} />
            </label>
        </div>
    )
}

export default ShortInput;