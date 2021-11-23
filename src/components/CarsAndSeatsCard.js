import React from 'react';
import '../index.css';
import OverviewCard from './OverviewCard';

function CarsAndSeatsCard() {
    const CarsAndSeat = [];
    const CardHeader = ["Name","Age","Duties","Carseat"];
    const Rightbuttons = ["Add"];
    const LeftButtons = ["Delete"];

    return(
        <div className="cars-and-seats">
            <OverviewCard content={CarsAndSeat} header={CardHeader} leftbutton={LeftButtons} rightbutton={Rightbuttons}/>
        </div>
    )
}

export default CarsAndSeatsCard;
    
