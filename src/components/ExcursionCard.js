import React from 'react';
import LongCard from './LongCard.js';

function ExcursionCard(props) {

    return (
        <LongCard active={props.active}>
            <div className="excursion-card">
                <div className="excursion-card-main-content">
                    <h4>Fjelltur</h4>
                    <p className="subtitle">23/11/21 - 1/12/21, Fjellet 29</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div className="edit-button-container">
                <button className="button-extra-small" onClick={props.active}>Edit</button>
            </div>
        </LongCard>
    );
}

export default ExcursionCard;