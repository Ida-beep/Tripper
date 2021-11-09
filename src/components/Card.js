import React, {useState} from 'react';
import ParticipantCard from './ParticipantCard';
import participantData from './data/participantData.js';
import AddFamily from './AddFamily'; 
import '../index.css';

function Card(props) {

    return (//edit classname
        <div className="Card"> 
            {props.content}
        </div>
    );
}

export default Card;