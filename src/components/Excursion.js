import React, {useState} from 'react';
import PhotoHeader from './PhotoHeader';
import Image from '../assets/norwegian_fjord.png';
import ExcursionCard from './ExcursionCard.js';
import EditExcursion from './EditExcursion';
 
function Excursion() {
    const [editActive, setEditActive] = useState(false);
    
    return (
        <div className="excursion">
            <PhotoHeader image={Image} alt="NorwegianFjord"/>
            <EditExcursion trigger={editActive} editState={() => setEditActive(false)}/>
            <div className="excursion-1"> {/**Add className */}
                <ExcursionCard active={()=>setEditActive(true)}/> {/*Add props */}
            </div>
        </div>
    )
}
export default Excursion;