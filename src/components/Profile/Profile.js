import React from 'react';
import {useState} from 'react';
import AddFamilyPopup from './AddFamilyPopup';
import YouAndYourFamilyCard from './YouAndYourFamilyCard';
import ContactMemberCard from './ContactMemberCard';
import CarsAndSeatsCard from './CarsAndSeatsCard.js';
import ContactImage from '../../assets/noun_upload photo_1337310 1.png';
import EditContactMember from './EditContactMember.js';
import Image from '../../assets/norwegian_fjord.png';
import AddCarPopup from './AddCarPopup';
import EditFamilyMemberPopup from './EditFamilyMemberPopup';

/** 
 *  @public Profile displays the different Card types and formats them
 */

function Profile () {
    const [showEditContactMember, setShowEditContactMember] = useState(false);
    const [showAddFamilyPopup,setShowAddFamilyPopup] = useState(false);
    const [showCarPopup, setShowCarPopup] = useState(false);
    const [editFMActive, setEditFMActive] = useState(false)

    return (
        <div className="profile">
            <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
            <AddFamilyPopup showAddFamilyPopup={showAddFamilyPopup} 
                toggleFamilyItem={()=>setShowAddFamilyPopup(false)} /> 

            <EditFamilyMemberPopup editFMActive={editFMActive} 
                editState={() => setEditFMActive(false)} title="Edit Family Member"/>
            <EditContactMember showEditContactMember={showEditContactMember} 
                toggleContactMember={()=>setShowEditContactMember(false)} 
                title="Edit Contact Member"/>
            <AddCarPopup showCarPopup={showCarPopup} 
                toggleAddCar={()=>setShowCarPopup(false)} 
                title="Add Car"/>
            
            <div className="profile-1">
                <ContactMemberCard className ="ContactMemberCard" 
                    contactImage={ContactImage}
                    active={()=>setShowEditContactMember(true)}/>
            </div>
            <div className="cards-container">
                <YouAndYourFamilyCard toggleFamilyItem={()=>setShowAddFamilyPopup(true)}
                    editActive={()=> setEditFMActive(true)}/>
                <CarsAndSeatsCard toggleCarItem={()=>setShowCarPopup(true)}/>
            </div>
        </div>
    );
}
export default Profile;       

