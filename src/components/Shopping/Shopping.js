
import React, {useState} from 'react';
import { useEffect } from 'react';
import Image from '../../assets/norwegian_fjord.png';
import ShoppingCard from './ShoppingCard';
import AddShoppingItem from './AddShoppingItem';
import ShoppingListCard from './ShoppingListCard';
import PreviousShoppingListsCard from './PreviousShoppingListsCard'

//import ShoppingItemList from './ShoppingItemList';
import Footer from '../Footer.js';
import ShoppingAPI from '../API/ShoppingAPI';
import PreviousShoppingListPopup from './PreviousShoppingListPopup';

function Shopping() {

    /**
     * @public Shopping renders the Shopping page containing the shopping list
     * from the current excursion, as well as access to lists from previous 
     * excursions, in which you can add shopping items from those lists to
     * your current shopping list.
     * 
    */

    const [showShoppingPopUp,setShowShoppingPopUp] = useState(false);
    const [showPreviousShopping, setShowPreviousShopping] = useState(false);
    const [lastSelected, setLastSelected] = useState();

    /**Returns the last selected elements from the cards. */
    function returnSelected(selected) {
        console.log("selected: ",selected);
        setLastSelected(selected);
    }

    useEffect(()=> {
        console.log("last selected: ", lastSelected);
    }, [lastSelected]);

    return (
        <>
            <div className="excursion">
                <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
                <AddShoppingItem title="Add Shopping Item" trigger={showShoppingPopUp} editState={() => setShowShoppingPopUp(false)}/>
                <PreviousShoppingListPopup title="Select Shopping Items" 
                    trigger={showPreviousShopping} excursionID={lastSelected}
                    editState={() => setShowPreviousShopping(false)} />
                <div className="page-container">
                    <ShoppingCard /> {/*Add props */}
                </div>
                <div className="cards-container">
                    <ShoppingListCard active={()=>setShowShoppingPopUp(true)}/>
                    <PreviousShoppingListsCard selected={returnSelected} active={()=>setShowPreviousShopping(true)}/>
                </div>
            </div>  
            <Footer />     
        </>
    )
}
export default Shopping

                        