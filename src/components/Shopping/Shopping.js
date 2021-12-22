
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

function Shopping() {
    const [editActive, setEditActive] = useState(false);
    const [showShoppingPopUp,setShowShoppingPopUp] = useState(false);

    return (
        <>
            <div className="excursion">
                <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
                <AddShoppingItem title="Add Shopping Item" trigger={editActive} editState={() => setEditActive(false)}/>
                
                <div className="excursion-1">
                    <ShoppingCard /> {/*Add props */}
                </div>
                <div className="cards-container">
                    <ShoppingListCard active={()=>setEditActive(true)}/>
                    <PreviousShoppingListsCard/>
                </div>
            </div>  
            <Footer />     
        </>
    )
}
export default Shopping

                        