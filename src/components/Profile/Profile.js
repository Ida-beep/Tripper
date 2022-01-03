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
import DeletePopup from "./DeletePopup";
import Footer from "../Footer.js";
import EditCarPopup from "./EditCarPopup";

/**
 *  @public Profile displays the different Card types and formats them
 */

function Profile() {
  const [showEditContactMember, setShowEditContactMember] = useState(false);
  const [showAddFamilyPopup, setShowAddFamilyPopup] = useState(false);
  const [showCarPopup, setShowCarPopup] = useState(false);
  //const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [editFMActive, setEditFMActive] = useState(false);
  const [editCarActive, setEditCarActive] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState();
  const [confirmedDeletion, setConfirmedDeletion] = useState();
  const [cancelDelete, setCancelDelete] = useState(false);
  const [selectedMember, setSelectedMember] = useState();
  const [selectedCar, setSelectedCar] = useState();
  const [didUpdate, setDidUpdate] = useState(false);
  const [carDidUpdate, setCarDidUpdate] = useState(false);

  useEffect(() => {
    console.log("PROFILE: value of update is : ", didUpdate);
  }, [didUpdate]);

  return (
    <div className="profile">
      <img className="photo-header-image" src={Image} alt="NorwegianFjord" />
      <AddFamilyPopup
        showAddFamilyPopup={showAddFamilyPopup}
        toggleFamilyItem={() => setShowAddFamilyPopup(false)}
      />
      <DeletePopup
        showDeletePopup={deleteMember}
        onCancel={(isCanceled) => setCancelDelete(isCanceled)}
        toggleDeletePopup={(isOpen) => setDeleteMember(isOpen)}
        memberToDelete={memberToDelete}
        onConfirmation={(isConfirmed) => {
          setConfirmedDeletion(isConfirmed);
        }}
      />
      <EditFamilyMemberPopup
        selectedMember={selectedMember}
        didUpdate={(didUpdate) => setDidUpdate(didUpdate)}
        editFMActive={editFMActive}
        editState={() => setEditFMActive(false)}
      />
      <EditContactMember
        showEditContactMember={showEditContactMember}
        toggleContactMember={() => setShowEditContactMember(false)}
      />
      <AddCarPopup
        showCarPopup={showCarPopup}
        toggleAddCar={() => setShowCarPopup(false)}
        title="Add Car"
      />
      <EditCarPopup
        selectedCar={selectedCar}
        carDidUpdate={(carDidUpdate) => setCarDidUpdate(carDidUpdate)}
        editCarActive={editCarActive}
        editState={() => setEditCarActive(false)}/>

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
          memberToDelete={(member) => { setMemberToDelete(member);}}
          onDeletion={(isDeleting) => {setDeleteMember(isDeleting);}}
          selectedMember={(member) => {setSelectedMember(member);}}
          didUpdate={didUpdate}
          setDidUpdate={(isUpdating) => setDidUpdate(isUpdating)}
          toggleFamilyItem={() => setShowAddFamilyPopup(true)}
          isCanceled={cancelDelete}
          editActive={() => setEditFMActive(true)}
          onConfirmation={confirmedDeletion}
          onAddingFamilyMembers={showAddFamilyPopup}
        />
        <CarsAndSeatsCard 
          toggleCarItem={() => setShowCarPopup(true)} 
          selectedCar={(car) => {setSelectedCar(car);}}
          editActive={() => setEditCarActive(true)}
          carDidUpdate={carDidUpdate}
          setCarDidUpdate={(isUpdating) => setCarDidUpdate(isUpdating)}
        />
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
