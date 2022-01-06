import React from 'react';

 /**
   * Returns A Long Card 
   */

function LongCard(props) {
    return (
        <div className="long-card">
            {props.children}
        </div>
    );
}

export default LongCard;