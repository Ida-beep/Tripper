import React, {useState} from 'react';
import Image from '../../assets/norwegian_fjord.png';
import ExcursionCard from './ExcursionCard.js';
import EditExcursion from './EditExcursion';
import GuestDutyCard from './GuestDutyCard';
import DutiesCard from './DutiesCard'
import AddDutyPopup from './AddDutyPopup';

function Excursion() {
    const [editExcursionActive, setExcursionEditActive] = useState(false);
    const [dutiesPopupActive, setDutiesPopupAcitve] = useState(false)
    
    
    return (
        <div>
            <div className="excursion">
                <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
                <EditExcursion trigger={editExcursionActive} editState={() => setExcursionEditActive(false)} title="Edit Excursion"/>
                <AddDutyPopup trigger={dutiesPopupActive} editState={() => setDutiesPopupAcitve(false)} title="Add duty"/>
                
                <div className="excursion-1"> {/**Add className */}
                    <ExcursionCard active={()=>setExcursionEditActive(true)}/>
                </div>
            </div>
            
            <div className="cards-container">
                <DutiesCard active={()=> setDutiesPopupAcitve(true)} />
                <GuestDutyCard />
            </div>
        </div>
    )
}
export default Excursion;