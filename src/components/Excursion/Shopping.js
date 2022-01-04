/* import React, { useState } from "react";
import { useEffect } from "react";
import Image from "../../assets/norwegian_fjord.png";
import ShoppingCard from "./ShoppingCard";
import AddShoppingItem from "./AddShoppingItem";
import ShoppingListCard from "./ShoppingListCard";
import PreviousShoppingListsCard from "./PreviousShoppingListsCard";

//import ShoppingItemList from './ShoppingItemList';
import Footer from "../Footer.js";
import ShoppingAPI from "../API/ShoppingAPI";
import PreviousShoppingListPopup from "./PreviousShoppingListPopup";
import EditShoppingPopup from "./EditShoppingPopup"; */

/* function Shopping() { */
/**
 * @public Shopping renders the Shopping page containing the shopping list
 * from the current excursion, as well as access to lists from previous
 * excursions, in which you can add shopping items from those lists to
 * your current shopping list.
 *
 */

/*   const [showShoppingPopUp, setShowShoppingPopUp] = useState(false);
  const [showPreviousShopping, setShowPreviousShopping] = useState(false);
  const [showEditShoppingPopUp, setShowEditShoppingPopUp] = useState(false);
  const [selectedExcursion, setSelectedExcursion] = useState();
  const [selectedShoppingItem, setSelectedShoppingItem] = useState();
  const [shoppingItemDidUpdate, setShoppingItemDidUpdate] = useState();

  /**Returns the last selected elements from the cards. */

/*   useEffect(() => {
    console.log("last selected: ", selectedExcursion);
  }, [selectedExcursion]); */

/* return (
    <>
      <div className="excursion">
        <img className="photo-header-image" src={Image} alt="NorwegianFjord" />
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
        <div className="page-container">
          <ShoppingCard />
        </div>
        <div className="page-container">
          <div className="duties-headline">
            <h4 style={{ fontSize: "20px" }}>Your Shopping List</h4>
            <p style={{ width: "434px" }}>
              Here you can view your current shopping items. You can change it
              by adding items to it, or you can search for shoppings lists from
              previous trips
            </p>
          </div>
        </div>
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
      </div>
      <Footer />
    </>
  );
} */
/* export default Shopping; */
