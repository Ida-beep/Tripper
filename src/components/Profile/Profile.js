import React from 'react';
import {useState, useEffect} from 'react';
import AddFamilyPopup from './AddFamilyPopup';
import YouAndYourFamilyCard from './YouAndYourFamilyCard';
import ContactPersonCard from './ContactPersonCard';
import CarsAndSeatsCard from './CarsAndSeatsCard.js';
import ContactImage from '../../assets/noun_upload photo_1337310 1.png';
import EditContactPerson from './EditContactPerson.js';
import Image from '../../assets/norwegian_fjord.png';
import ContactMemberAPI from '../API/ContactMemberAPI.js';

/** 
 *  @public Profile displays the different Card types and formats them
 */

function Profile () {
    const [showEditContactMember, setShowEditContactMember] = useState(false);
    const [showAddFamilyPopup,setShowAddFamilyPopup] = useState(false);
    let contactPersonData = {};

/*     async function fetchData(){
        ContactMemberAPI.getContactMember()
        .then((userObject)=> {
            contactPersonData = userObject;
    })}

    useEffect(()=> {
        await fetchData();
    }, []); */

    function toggleFamilyItem(){
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
