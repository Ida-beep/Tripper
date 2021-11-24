import React, {useState} from 'react';
import Image from '../assets/norwegian_fjord.png';
import ExcursionCard from './ExcursionCard.js';
import EditExcursion from './EditExcursion';
import GuestDutyCard from './ExDuty/GuestDutyCard';
import DutiesCard from './ExDuty/DutiesCard'

function Excursion() {
    const [editActive, setEditActive] = useState(false);
    
    return (
        <div>
            <div className="excursion">
                <img className="photo-header-image" src={Image} alt="NorwegianFjord"/>
                <EditExcursion trigger={editActive} editState={() => setEditActive(false)}/>
                <div className="excursion-1"> {/**Add className */}
                    <ExcursionCard active={()=>setEditActive(true)}/> {/*Add props */}
                </div>
            </div>
            
            <h4 style={{textAlign: 'center'}}>Excursion Duties</h4>
            
            <div className="cards-container">
                <DutiesCard />
                <GuestDutyCard />
            </div>
        </div>
    )
}
export default Excursion;