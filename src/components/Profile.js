import React from 'react';
import {useState} from 'react';
import participantData from './data/participantData.js';
import AddFamily from './AddFamily/AddFamily';
import '../index.css';
import YouAndYourFamilyCard from './YouAndYourFamilyCard';
import ContactPersonCard from './ContactPersonCard';
import CarsAndSeatsCard from './CarsAndSeatsCard.js';
import PhotoHeader from './PhotoHeader';
import HeaderImage from '../assets/norwegian_fjord.png';
import ContactImage from '../assets/noun_upload photo_1337310 1.png';
import EditContactPerson from './EditContactPerson.js';
/** Profile displays the different Card types and formats them
 *  - "CardPlaceHolder" has to be changed to an actual Card Component
 *  - Likewise, "participantComponents"should be moved to new Card Component
 *    and rendered there instead of in Profile. 
 *  - Button "Add" needs to go into Card
 */
 
function Profile () {
    const contactPersonData = participantData[0];
    //reconsider names?
    const [active,setActive] = useState(false);
    const [editActive, setEditActive] = useState(false);


    return (
        <div className="profile">
            <PhotoHeader image={HeaderImage} alt="NorwegianFjord"/>
            <AddFamily active={active}/>
            <EditContactPerson trigger={editActive} editState={() => setEditActive(false)} title="Edit Contact Member"/>
            <div className="profile-1">
                {/*Passing in image as prop but it's not rendering*/}
                {/*Change name of active property? */}
                <ContactPersonCard className="ContactPersonCard" 
                    data={contactPersonData} 
                    contactImage={ContactImage}
                    active={()=>setEditActive(true)}/>
            </div>
            <div className="profile-2">
                <YouAndYourFamilyCard active={()=>setActive(true)}/>
                <CarsAndSeatsCard/>
            </div>
        </div>
    );
}
export default Profile;       
