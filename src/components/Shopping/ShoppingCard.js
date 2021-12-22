import React from 'react';
import ShoppingLongCard from './ShoppingLongCard.js';
import LongCard from '../Cards/LongCard'


function ShoppingCard(props) {


    return (
        <LongCard >
            <div className="shopping-card-main-content">
                <h4>Shopping List</h4>
                <p className="subtitle"  >25/1/22 - 30/1/22, Fjellet 29</p>
                <p>Here you can easily create a Shopping List for your Excursion. </p>
                <p style={{paddingTop:"10px"}}>Adults:   Teenagers:    Kids:</p>
            </div>
        </LongCard>
    );
}

export default ShoppingCard;
