import React from 'react';
import ParticipantInfo from './ParticipantInfo';
import participantData from './data/participantData.js';
import OverviewCard from './OverviewCard';

/**
    @public YouAndYourFamilyCard shows all relevant participating members of a family
 */

function YouAndYourFamilyCard(props) {
    const participantComponents = participantData.map(data => <ParticipantInfo key={data.id} name={data.name} age={data.age} dutypreferences={data.dutypreferences} carseat={data.carseat}/>);
    const CardHeader = ["Name","Age","Duties","Carseat"];
    const Rightbuttons = ["Add"];
    const LeftButtons = ["Delete"];

    return (
        <div className="you-and-your-family">
            <OverviewCard togglePopup={props.togglePopup} class="YouAndYourFamily" header={CardHeader} content={participantComponents} rightbutton={Rightbuttons} leftbutton={LeftButtons}/>
        </div>
    );
}

export default YouAndYourFamilyCard;