import React from "react";
import { useState, useEffect, useContext } from "react";
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
import DeleteCarPopup from "./DeleteCarPopup";

/**
 *  @public Profile displays the different Card types and formats them
 */

function Profile() {

  //ContactMember useStates
  const [showEditContactMember, setShowEditContactMember] = useState(false);
  
  //YouAndYourFamilyCard 
  const [showAddFamilyPopup, setShowAddFamilyPopup] = useState(false);
  const [editFMActive, setEditFMActive] = useState(false);
  const [didUpdate, setDidUpdate] = useState(false);
  const [selectedMember, setSelectedMember] = useState();
  const [deleteMember, setDeleteMember] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState();
  const [confirmedDeletion, setConfirmedDeletion] = useState();
  const [cancelDelete, setCancelDelete] = useState(false);
  const [memberName, setMemberName] = useState("");
  const [showDeleteFMPopup, setShowDeleteFMPopup] = useState(false)

  //CarsAndSeats useStates
  const [showCarPopup, setShowCarPopup] = useState(false);
  const [editCarActive, setEditCarActive] = useState(false);
  const [carDidUpdate, setCarDidUpdate] = useState(false);
  const [selectedCar, setSelectedCar] = useState();
  const [showDeleteCarPopup, setShowDeleteCarPopup] = useState(false);
  const [deleteCar, setDeleteCar] = useState(false);
  const [carToDelete, setCarToDelete] = useState();
  const [confirmedCarDeletion, setConfirmedCarDeletion] = useState();
  const [cancelCarDelete, setCancelCarDelete] = useState(false);
  const [carName, setCarName] = useState("");
 
  useEffect(() => {
    console.log("PROFILE: value of update is : ", deleteCar);
  }, [deleteCar]);

  useEffect(() => {
    if (selectedCar) {
      const carName = selectedCar.carModel
      setCarName(carName)
    }
  }, [selectedCar]);

  useEffect(() => {
    if (selectedMember) {
      const memberName = selectedMember.firstName + " " + selectedMember.lastName
      setMemberName(memberName)
    }
  }, [selectedMember])

  return (
    <div className="profile">
      <img className="photo-header-image" src={Image} alt="NorwegianFjord" />
      <AddFamilyPopup
        showAddFamilyPopup={showAddFamilyPopup}
        toggleFamilyItem={() => setShowAddFamilyPopup(false)}
      />
      <DeletePopup
        showDeletePopup={showDeleteFMPopup}
        onCancel={(isCanceled) => setCancelDelete(isCanceled)}
        toggleDeletePopup={(isOpen) => setDeleteMember(isOpen)}
        itemToDelete={selectedMember}
        text={memberName}
        closePopup={(value) =>setShowDeleteFMPopup(value)}
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
        title="Edit Car Information"
        selectedCar={selectedCar}
        carDidUpdate={(carDidUpdate) => setCarDidUpdate(carDidUpdate)}
        editCarActive={editCarActive}
        editState={() => setEditCarActive(false)}
      />
      <DeletePopup
        showDeletePopup={showDeleteCarPopup}
        onCancel={(isCanceled) => setCancelCarDelete(isCanceled)}
        closePopup={(value) =>setShowDeleteCarPopup(value)}
        toggleDeletePopup={(isOpen) => setDeleteCar(isOpen)}
        text={carName}
        itemToDelete={selectedCar}
        onConfirmation={(isConfirmed) => {
          setConfirmedCarDeletion(isConfirmed);
        }}
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
          <h4 style={{ fontSize: "16px" }}>Your Family and Transportation</h4>
          <p>Here you can add your family members. You can also add you car</p>
        </div>
      </div>
      <div className="cards-container">
        <YouAndYourFamilyCard
          memberToDelete={(member) => { setMemberToDelete(member);}}
          onDeletion={(isDeleting) => {setSelectedMember(isDeleting);}}
          selectedMember={(member) => {setSelectedMember(member);}}
          didUpdate={didUpdate}
          setDidUpdate={(isUpdating) => setDidUpdate(isUpdating)}
          toggleFamilyItem={() => setShowAddFamilyPopup(true)}
          isCanceled={cancelDelete}
          editActive={() => setEditFMActive(true)}
          onConfirmation={confirmedDeletion}
          onAddingFamilyMembers={showAddFamilyPopup}
          deleteActive={() => setShowDeleteFMPopup(true)}
        />
        <CarsAndSeatsCard
          deleteActive={() => setShowDeleteCarPopup(true)} 
          carToDelete={(car) => { setCarToDelete(car);}}
          onDeletion={(isDeleting) => {setDeleteCar(isDeleting);}}
          deleteCar={deleteCar}
          selectedCar={(car) => {setSelectedCar(car);}}
          carDidUpdate={carDidUpdate}
          setCarDidUpdate={(isUpdating) => setCarDidUpdate(isUpdating)}
          toggleCarItem={() => setShowCarPopup(true)} 
          isCanceled={cancelCarDelete}
          editActive={() => setEditCarActive(true)}
          onConfirmation={confirmedCarDeletion}
          showCarPopup={showCarPopup}
        />
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
