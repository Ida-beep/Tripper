import React, {useState} from 'react';
import Card from './Card';
import ParticipantCard from './ParticipantCard';
import participantData from './data/participantData.js';
import AddFamily from './AddFamily'; 
import '../index.css';
import OverviewCard from './OverviewCard';

function YouAndYourFamilyCard(props) {
    
    return (
        <div>
            <OverviewCard>
                {props.content}
            </OverviewCard>
        </div>
    );
}

export default YouAndYourFamilyCard;