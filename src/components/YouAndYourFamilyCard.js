import React from 'react';
import ParticipantInfo from './ParticipantInfo';
import participantData from './data/participantData.js';
import '../index.css';
import OverviewCard from './OverviewCard';

/**
 * Issues
 * - cannot get 'add' btn to show inside the OverviewCard
 * - cannot get 'add' to open the popup (somethings wrong with communication between children and parents)
 */

function YouAndYourFamilyCard(props) {
    const participantComponents = participantData.map(data => <ParticipantInfo key={data.id} name={data.name} age={data.age} dutypreferences={data.dutypreferences} carseat={data.carseat}/>);
    const CardHeader = ["Name","Age","Duties","Carseat"];
    const Rightbuttons = ["Add"];
    const LeftButtons = ["Delete"];

    return (
        <div className="you-and-your-family">
            <OverviewCard active={props.active} class="YouAndYourFamily" header={CardHeader} content={participantComponents} rightbutton={Rightbuttons} leftbutton={LeftButtons}/>
        </div>
    );
}

export default YouAndYourFamilyCard;