import React, {useState} from 'react';
import Image from '../../assets/norwegian_fjord.png';
import ExcursionCard from './ExcursionCard.js';
import EditExcursion from './EditExcursion';
import GuestDutyCard from './GuestDutyCard';
import DutiesCard from './DutiesCard'
import AddDutyPopup from './AddDutyPopup';
import DeletePopup from '../Cards/DeletePopup';

function Excursion() {
    const [editExcursionActive, setExcursionEditActive] = useState(false);
    const [dutiesPopupActive, setDutiesPopupAcitve] = useState(false);
    const [lastSelected, setLastSelected] = useState();
    
    function returnSelected(selected) {
        console.log("selected: ",selected);
        setLastSelected(selected);
    }

    return (
        <div>
            <div className="excursion">
                <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
                <EditExcursion trigger={editExcursionActive} 
                    editState={() => setExcursionEditActive(false)} title="Edit Excursion"/>
                <AddDutyPopup trigger={dutiesPopupActive} 
                    editState={() => setDutiesPopupAcitve(false)} title="Add duty"/>
                
                <div className="excursion-1"> {/**Add className */}
                    <ExcursionCard active={()=>setExcursionEditActive(true)}/>
                </div>
            </div>
            
            <div className="cards-container">
                <DutiesCard active={()=> setDutiesPopupAcitve(true)} selected={returnSelected}/>
                <GuestDutyCard />
            </div>
        </div>
    )
}
export default Excursion;