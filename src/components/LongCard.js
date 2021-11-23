import React from 'react';

function LongCard(props) {
    console.log(props.active)
    
    return (
        <div className="long-card">
            {props.children}
            <div className="edit-button-container">
                <button className="button-extra-small" onClick={props.active}>Edit</button>
            </div>
        </div>
    );
}

export default LongCard;