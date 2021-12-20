import React from 'react';

function ShoppingLongCard(props) {
    console.log(props.active)


    //<div className="long-card">  
    return (
        <div className="shopping-long-card">   
            {props.children}
            <div className="edit-button-container">
                <button className="button-secondary-extra-small" onClick={props.active}>Create</button>
            </div>
        </div>
    );
}

export default ShoppingLongCard;