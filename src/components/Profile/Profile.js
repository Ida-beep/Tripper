import React from "react";
import { useState, useEffect } from "react";
import AddFamilyPopup from "./AddFamilyPopup";
import YouAndYourFamilyCard from "./YouAndYourFamilyCard";
import ContactMemberCard from "./ContactMemberCard";
import CarsAndSeatsCard from "./CarsAndSeatsCard.js";
import ContactImage from "../../assets/noun_upload photo_1337310 1.png";
import EditContactMember from "./EditContactMember.js";
import Image from "../../assets/norwegian_fjord.png";
import AddCarPopup from "./AddCarPopup";
import EditFamilyMemberPopup from "./EditFamilyMemberPopup";
import DeletePopup from "../Cards/DeletePopup";

/**
 *  @public Profile displays the different Card types and formats them
 */

function Profile() {
  const [showEditContactMember, setShowEditContactMember] = useState(false);
  const [showAddFamilyPopup, setShowAddFamilyPopup] = useState(false);
  const [showCarPopup, setShowCarPopup] = useState(false);
  //const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [editFMActive, setEditFMActive] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState();
  const [confirmedDeletion, setConfirmedDeletion] = useState();

  useEffect(() => {
    console.log("The confirmation was called with value: ", confirmedDeletion);
  }, [confirmedDeletion]);

  return (
    <div className="profile">
      <img className="photo-header-image" src={Image} alt="NorwegianFjord" />
      <AddFamilyPopup
        showAddFamilyPopup={showAddFamilyPopup}
        toggleFamilyItem={() => setShowAddFamilyPopup(false)}
      />
      <DeletePopup
        showDeletePopup={deleteMember}
        toggleDeletePopup={(isOpen) => setDeleteMember(isOpen)}
        memberToDelete={memberToDelete}
        onConfirmation={(isConfirmed) => {
          setConfirmedDeletion(isConfirmed);
        }}
      />
      <EditFamilyMemberPopup
        editFMActive={editFMActive}
        editState={() => setEditFMActive(false)}
        title="Edit Family Member"
      />
      <EditContactMember
        showEditContactMember={showEditContactMember}
        toggleContactMember={() => setShowEditContactMember(false)}
        title=""
      />
      <AddCarPopup
        showCarPopup={showCarPopup}
        toggleAddCar={() => setShowCarPopup(false)}
        title="Add Car"
      />

      <div className="page-container">
        <ContactMemberCard
          className="ContactMemberCard"
          contactImage={ContactImage}
          active={() => setShowEditContactMember(true)}
        />
      </div>
      <div className="page-container">
        <div className="duties-headline">
          <h4 style={{ fontSize: "20px" }}>Your Family and Transportation</h4>
          <p>Here you can add your family members. You can also add you car</p>
        </div>
      </div>
      <div className="cards-container">
        <YouAndYourFamilyCard
          member={(member) => {
            setMemberToDelete(member);
          }}
          onDeletion={(isDeleting) => {
            setDeleteMember(isDeleting);
          }}
          toggleFamilyItem={() => setShowAddFamilyPopup(true)}
          editActive={() => setEditFMActive(true)}
          onConfirmation={confirmedDeletion}
          onAddingFamilyMembers={showAddFamilyPopup}
        />
        <CarsAndSeatsCard toggleCarItem={() => setShowCarPopup(true)} />
      </div>
    </div>
  );
}
export default Profile;
