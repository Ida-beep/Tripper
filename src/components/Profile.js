import React from 'react';
import {useState} from 'react';
import participantData from './data/participantData.js';
import AddFamilyPopup from './AddFamilyPopup';
import YouAndYourFamilyCard from './YouAndYourFamilyCard';
import ContactPersonCard from './ContactPersonCard';
import CarsAndSeatsCard from './CarsAndSeatsCard.js';
import ContactImage from '../assets/noun_upload photo_1337310 1.png';
import EditContactPerson from './EditContactPerson.js';
import Image from '../assets/norwegian_fjord.png';
/** Profile displays the different Card types and formats them
 *  - "CardPlaceHolder" has to be changed to an actual Card Component
 *  - Likewise, "participantComponents"should be moved to new Card Component
 *    and rendered there instead of in Profile. 
 *  - Button "Add" needs to go into Card
 *  - Rename togglePopUp in YouAndYourFamilyCard
 */ 
function Profile () {
    const contactPersonData = participantData[0];
    
    const [active,setActive] = useState(false);
    const [showEditContactMember, setShowEditContactMember] = useState(false);
    const [showAddFamilyPopup,setShowAddFamilyPopup] = useState(false);

    function toggleFamilyItem(){
        console.log(" toggled <3 ")
        setShowAddFamilyPopup((prevState)=>!prevState)
    }

    function toggleContactMember() {
        setShowEditContactMember((prevState)=>!prevState)
    }

    return (
        <div className="profile">
            <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
            <AddFamilyPopup showAddFamilyPopup={showAddFamilyPopup} toggleFamilyItem={toggleFamilyItem} title="Add Family Item"/> 
            <EditContactPerson showEditContactMember={showEditContactMember} toggleContactMember={toggleContactMember} title="Edit Contact Member"/>
            <div className="profile-1">
                {/*Passing in image as prop but it's not rendering*/}
                {/*Change name of active property? */}
                <ContactPersonCard className="ContactPersonCard" 
                    data={contactPersonData} 
                    contactImage={ContactImage}
                    active={()=>setShowEditContactMember(true)}/>
            </div>
            <div className="profile-2">
                <YouAndYourFamilyCard toggleFamilyItem={toggleFamilyItem}/>
                <CarsAndSeatsCard/>
            </div>
        </div>
    );
}
export default Profile;       
