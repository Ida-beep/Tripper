
import React, {useState} from 'react';
import { useEffect } from 'react';
import Image from '../../assets/norwegian_fjord.png';
import ShoppingCard from './ShoppingCard';
import AddShoppingItem from './AddShoppingItem';
import ShoppingListCard from './ShoppingListCard';

//import ShoppingItemList from './ShoppingItemList';
import Footer from '../Footer.js';

function Shopping() {
    const [editActive, setEditActive] = useState(false);
    const [showShoppingPopUp,setShowShoppingPopUp] = useState(false);
    
    // function toggleAddShoppingItem() {
    //     setShowShoppingPopUp((prevState)=>!prevState)
    // }
    return (
        <>
            <div className="excursion">
                <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
                <div className="excursion-card-main-content">
                    <div className="card-container">      
                        <AddShoppingItem title="Add Shopping Item" trigger={editActive} editState={() => setEditActive(false)}/>
                        <div className="excursion-1"> {/**Add className */}
                            <ShoppingCard /> {/*Add props */}
                        </div>
                    </div>
                    <ShoppingListCard active={()=>setEditActive(true)}/>
                </div>
            </div>  
            <Footer />     
        </>
    )
}
export default Shopping

                        