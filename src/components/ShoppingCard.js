import React from 'react';
import ShoppingLongCard from './ShoppingLongCard.js';


function ShoppingCard(props) {


    return (
        <ShoppingLongCard active={props.active}>
                <div className="excursion-card-main-content">
                    <h4 style={{textAlign: 'center'}}>Shopping List  </h4>
                    <br/>
                    <p className="subtitle" style={{textAlign: 'center'}} >25/1/22 - 30/1/22, Fjellet 29</p>
                    <p style={{textAlign: 'center'}} >Here you can easily create a Shopping List for your Excursion. </p>
                </div>
        </ShoppingLongCard>
    );
}

export default ShoppingCard;


/**
 * 
 * 
 */