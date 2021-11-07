import React from 'react';
import {useState} from 'react';
import ParticipantCard from './ParticipantCard';
import participantData from './data/participantData.js';
import AddFamily from './AddFamily';
import '../index.css';

/** Profile displays the different Card types and formats them
 *  - "CardPlaceHolder" has to be changed to an actual Card Component
 *  - Likewise, "participantComponents"should be moved to new Card Component
 *    and rendered there instead of in Profile. 
 *  - Button "Add" needs to go into Card
 */
 
function Profile () {
    const participantComponents = participantData.map(data => <ParticipantCard key={data.id} name={data.name} age={data.age} dutypreferences={data.dutypreferences} carseat={data.carseat}/>);
    const [popup,setPopup] = useState(false);
    return (
    <div>
        <div>{popup? <AddFamily></AddFamily> : null}</div>
        <h4 className="Profile">Profile</h4>
        <button className="ButtonExtraSmall" onClick={()=>setPopup(true)}>Add</button>
        <div className="CardPlaceholder">
            {participantComponents}
        </div>
    </div>
    );
}
export default Profile;