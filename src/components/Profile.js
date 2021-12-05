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
import API from './API.js';

/** 
 *  @public Profile displays the different Card types and formats them
 */

function Profile () {
    //const contactPersonData = participantData[0];
    let contactPersonData = {};

    API.getContactMember()
    .then((userObject)=>{
        contactPersonData = userObject;
    })
    

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
                <ContactPersonCard className="ContactPersonCard" 
                    data={contactPersonData} 
                    contactImage={ContactImage}
                    active={()=>setShowEditContactMember(true)}/>
            </div>
            <div className="cards-container">
                <YouAndYourFamilyCard toggleFamilyItem={toggleFamilyItem}/>
                <CarsAndSeatsCard/>
            </div>
        </div>
    );
}
export default Profile;       
