import React from 'react';
import XDutiesCard from './ExDuty/XDutiesCard';
import XGuestDutyCard from './ExDuty/XGuestDutyCard';

function Excursion () {
    return <div>
        <h4 className="Excursion">Excursion</h4>
        
        <div className="cards-container">
            <XDutiesCard />
            <XGuestDutyCard />
           
        </div>
       
    </div>
}
export default Excursion;