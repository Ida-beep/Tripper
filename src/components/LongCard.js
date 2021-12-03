import React from 'react';

function LongCard(props) {
    console.log(props.active)
    
    return (
        <div className="long-card">
            {props.children}
        </div>
    );
}

export default LongCard;