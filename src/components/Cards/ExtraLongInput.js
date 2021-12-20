import React from 'react';

function ExtraLongInput(props) {
    return (
        <div className="short-input">
            <label>
                <p>{props.title}</p>
                <input type={props.type} value={props.value}
                onChange={props.changeValue} 
                size="40"/>
            </label>
        </div>
    )
}

export default ExtraLongInput;