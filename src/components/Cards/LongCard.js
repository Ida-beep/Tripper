import React from 'react';

function LongCard(props) {
    
    return (
        <div className="long-card">
            {props.children}
        </div>
    );
}

export default LongCard;