import React, { useState, useEffect } from "react";
import Image from "../../assets/norwegian_fjord.png";
import ExcursionCard from "./ExcursionCard.js";
import EditExcursion from "./EditExcursion";
import GuestDutyCard from "./GuestDutyCard";
import DutiesCard from "./DutiesCard";
import AddDutyPopup from "./AddDutyPopup";
import PreviousDutiesPopup from "./PreviousDutiesPopup";
import Footer from "../Navigation/Footer";
import { FaHourglassEnd } from "react-icons/fa";
import DeleteDutyPopup from "./DeleteDutyPopup";
import ShoppingListCard from "./ShoppingListCard";
import AddShoppingItem from "./AddShoppingItem";
import PreviousShoppingListsCard from "./PreviousShoppingListsCard";
import PreviousShoppingListPopup from "./PreviousShoppingListPopup";
import EditShoppingPopup from "./EditShoppingPopup";

function Excursion(props) {
  const [editExcursionActive, setExcursionEditActive] = useState(false);
  const [dutiesPopupActive, setDutiesPopupAcitve] = useState(false);
  const [previousDutiesActive, setPreviousDutiesActive] = useState(false);
  const [lastSelected, setLastSelected] = useState();
  const [dutiesAdded, setDutiesAdded] = useState(false);
  const [showDeleteDutyPopup, setShowDeleteDutyPop] = useState(false);
  const [dutyToDelete, setDutyToDelete] = useState();
  const [deletionConfirmed, setDeletionConfirmed] = useState(false);
  const [addPrevious, setAddPrevious] = useState(false);
  const [finishAddinPrev, setFinishAddingPrev] = useState(false);
  const [showShopping, setShowShopping] = useState(false);

  const [showShoppingPopUp, setShowShoppingPopUp] = useState(false);
  const [showPreviousShopping, setShowPreviousShopping] = useState(false);
  const [showEditShoppingPopUp, setShowEditShoppingPopUp] = useState(false);
  const [selectedExcursion, setSelectedExcursion] = useState();
  const [selectedShoppingItem, setSelectedShoppingItem] = useState();
  const [shoppingItemDidUpdate, setShoppingItemDidUpdate] = useState();

  useEffect(() => {
    console.log("Show Shopping? : ", showShopping);
  }, [showShopping]);

  function returnSelected(selected) {
    console.log("selected: ", selected);
    setLastSelected(selected);
  }

  return (
    <div>
      <div className="excursion">
        <img className="photo-header-image" src={Image} alt="NorwegianFjord" />
        <div className="page-container">
          {" "}
          <ExcursionCard
            emptyStats={props.emptyStats}
            active={() => setExcursionEditActive(true)}
            setShowShopping={(shouldShow) => setShowShopping(shouldShow)}
            showShopping={showShopping}
          />
        </div>

        <div className="page-container">
          {showShopping ? (
            <div className="duties-headline">
              <h4 style={{ fontSize: "16px" }}>Your Shopping List</h4>
              <p style={{ width: "464px" }}>
                Here you can view your current shopping items. You can change it
                by adding items to it, or you can search for shoppings lists
                from previous trips
              </p>
            </div>
          ) : (
            <div className="duties-headline">
              <h4 style={{ fontSize: "16px" }}>Duties and Participants</h4>
              <p style={{ width: "464px" }}>
                Here you can add duties to your excursion and assign partcipants
                to join them. You can always go back and try again!
              </p>
            </div>
          )}
        </div>
        <div>
          <DeleteDutyPopup
            setDeletionConfirmed={(isConfirmed) =>
              setDeletionConfirmed(isConfirmed)
            }
            dutyToDelete={dutyToDelete}
            showDeleteDutyPopup={showDeleteDutyPopup}
            toggleDeletePopup={() => setShowDeleteDutyPop(false)}
          />
          <EditExcursion
            trigger={editExcursionActive}
            editState={() => setExcursionEditActive(false)}
          />
          <AddDutyPopup
            onDutyAdd={(duties) => setDutiesAdded(duties)}
            trigger={dutiesPopupActive}
            editState={() => setDutiesPopupAcitve(false)}
            title="Add duty"
          />
          <PreviousDutiesPopup
            onFinishAddingPrev={(isFinished) => setFinishAddingPrev(isFinished)}
            setAddPrevious={(addPrevious) => setAddPrevious(addPrevious)}
            trigger={previousDutiesActive}
            editState={() => setPreviousDutiesActive(false)}
          />

          <AddShoppingItem
            title="Add Shopping Item"
            trigger={showShoppingPopUp}
            editState={() => setShowShoppingPopUp(false)}
          />
          <PreviousShoppingListPopup
            title="Select Shopping Items"
            trigger={showPreviousShopping}
            selectedExcursion={selectedExcursion}
            editState={() => setShowPreviousShopping(false)}
          />
          <EditShoppingPopup
            title="Edit Shopping Item"
            trigger={showEditShoppingPopUp}
            selectedShoppingItem={selectedShoppingItem}
            editState={() => setShowEditShoppingPopUp(false)}
            shoppingItemDidUpdate={(shoppingItemDidUpdate) =>
              setShoppingItemDidUpdate(shoppingItemDidUpdate)
            }
          />
          <div className="cards-container-background">
            {showShopping ? (
              <div className="cards-container">
                <ShoppingListCard
                  selectedShoppingItem={(shoppingItem) => {
                    setSelectedShoppingItem(shoppingItem);
                  }}
                  addActive={() => setShowShoppingPopUp(true)}
                  editActive={() => setShowEditShoppingPopUp(true)}
                />
                <PreviousShoppingListsCard
                  selected={(excursion) => {
                    setSelectedExcursion(excursion);
                  }}
                  openActive={() => setShowPreviousShopping(true)}
                />
              </div>
            ) : (
              <div className="cards-container">
                <DutiesCard
                  isFinished={finishAddinPrev}
                  onFinishAddingPrev={(stillGoing) =>
                    setFinishAddingPrev(stillGoing)
                  }
                  setAddPrevious={(addPrevious) => setAddPrevious(addPrevious)}
                  addPrevious={addPrevious}
                  setDeletionHappening={(isConfirming) =>
                    setDeletionConfirmed(isConfirming)
                  }
                  deletionConfirmed={deletionConfirmed}
                  setDutyToDelete={(duty) => setDutyToDelete(duty)}
                  toggleDeletePopup={(isDeleting) =>
                    setShowDeleteDutyPop(isDeleting)
                  }
                  addingDuty={(needsUpdating) => setDutiesAdded(needsUpdating)}
                  onDutiesAdded={dutiesAdded}
                  addActive={() => setDutiesPopupAcitve(true)}
                  selected={returnSelected}
                  previousActive={() => setPreviousDutiesActive(true)}
                />
                <GuestDutyCard />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Excursion;
