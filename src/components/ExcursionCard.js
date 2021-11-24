import React from 'react';
import LongCard from './LongCard.js';
//import excursion data

function ExcursionCard(props) {
    
    return (
        <LongCard active={props.active}>
            <div className="excursion-card">
                <div className="excursion-card-main-content">
                    <h2>Fjelltur</h2>
                    <p className="subtitle">23/11/21 - 1/12/21, Fjellet 29</p> {/*Different tag? Add subtitle style?*/}
                    <p>Description: Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        </LongCard>
    );
}

export default ExcursionCard;