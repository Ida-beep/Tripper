import React from 'react';
import {useState} from 'react';
import participantData from './data/participantData.js';
import AddFamily from './AddFamily/AddFamily';
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
        console.log("Person: "+ userObject.firstName)
        contactPersonData = userObject;
    })
    
    //const [active,setActive] = useState(false);
    const [editActive, setEditActive] = useState(false);
    const [showPopup,setShowPopup] = useState(false);

    function togglePopup(){
        console.log("toggled")
        setShowPopup((prevState)=>!prevState)
    }

    return (
        <div className="profile">
            <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
            <AddFamily showPopup={showPopup} togglePopup={togglePopup}/>
            <EditContactPerson trigger={editActive} editState={() => setEditActive(false)} title="Edit Contact Member"/>
            <div className="profile-1">
                <ContactPersonCard className="ContactPersonCard" 
                    data={contactPersonData} 
                    contactImage={ContactImage}
                    active={()=>setEditActive(true)}/>
            </div>
            <div className="profile-2">
                <YouAndYourFamilyCard togglePopup={togglePopup}/>
                <CarsAndSeatsCard/>
            </div>
        </div>
    );
}
export default Profile;       
