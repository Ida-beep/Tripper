
import React, {useState} from 'react';
import Image from '../assets/norwegian_fjord.png';
import ShoppingCard from '../ShoppingCard';
import EditShopping from './EditShopping';

//import ShoppingItemList from './ShoppingItemList';
import Footer from '../Footer.js';


function Shopping() {
    const [editActive, setEditActive] = useState(false);
    
    return (
        <>
            <div className="excursion">
                <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
                <div className="excursion-card-main-content">
                    <div className="card-container">      
                <EditShopping trigger={editActive} editState={() => setEditActive(false)}/>
                <div className="excursion-1"> {/**Add className */}
                    <ShoppingCard active={()=>setEditActive(true)}/> {/*Add props */}
                </div>
                </div>

                </div>

         
            </div>  
            <Footer />     
        </>
    )
}
export default Shopping

                        