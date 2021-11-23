/* Having issues rendering the following: (first index of array)
<ContactPersonCard content={participantData[0]}/>*/

import React from 'react';
import {useState} from 'react';
import participantData from './data/participantData.js';
import AddFamily from './AddFamily/AddFamily';
import ImageCard from './ImageCard.js';
import YouAndYourFamilyCard from './YouAndYourFamilyCard';
import ContactPersonCard from './ContactPersonCard';
import CarsAndSeatsCard from './CarsAndSeatsCard.js';

/** Profile displays the different Card types and formats them
 *  - "CardPlaceHolder" has to be changed to an actual Card Component
 *  - Likewise, "participantComponents"should be moved to new Card Component
 *    and rendered there instead of in Profile. 
 *  - Button "Add" needs to go into Card
 */
function Profile () {
    const contactPersonData = participantData[0];
    const [showPopup,setShowPopup] = useState(false);

    function togglePopup(){
        console.log(" toggled <3 ")
        setShowPopup((prevState)=>!prevState)
        
    }

    return (
        <div className="Profile">
            <AddFamily showPopup={showPopup} togglePopup={togglePopup}/>
        <div className="Profile-1">
            <ContactPersonCard className="ContactPersonCard" data={contactPersonData}/>
            <ImageCard className="ImageCard"/>
        </div>
        <div className="Profile-2">
            <YouAndYourFamilyCard togglePopup={togglePopup}/>
            <CarsAndSeatsCard/>
        </div>
        </div>
    );
}
export default Profile;       
