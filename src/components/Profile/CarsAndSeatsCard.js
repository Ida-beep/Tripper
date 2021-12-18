import React, {useState, useEffect} from 'react';
import TableScaffold from '../Cards/TableScaffold';
import CarsAPI from '../API/CarsAPI';

// function CarsAndSeatsCard() {
//     const CarsAndSeat = [];
//     const CardHeader = ["Name","Age","Duties","Carseat"];
//     const Rightbuttons = ["Add"];
//     const LeftButtons = ["Delete"];

//     return(
//         <div className="cars-and-seats">
//             <OverviewCard content={CarsAndSeat} header={CardHeader} leftbutton={LeftButtons} rightbutton={Rightbuttons}/>
//         </div>
//     )
// }
function CarsAndSeatsCard(){
    const [carsAndSeats,setCarsAndSeats] = useState([])
    
    useEffect(()=> {
        async function fetchData(){
            setCarsAndSeats(await CarsAPI.fetchCarsFromDB())
        };
        fetchData();
        console.log("use Effect for fetchCarsFromDB called")
    }, []) 

    return (   
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>Cars and Seats</h4>
            <div className="table-container">
                <TableScaffold 
                    tkey={[
                        "carModel",
                        "licensePlate",
                        "carColor",
                        "carSeats"
                    ]}
                    theaders={[
                        "Car",
                        "License",
                        "Color",
                        "Seats"
                    ]} 
                    tdata={carsAndSeats}
                />
            </div>
            
            <div className="button-container">
                <button className="button-extra-small">Delete</button>
                <button className="button-extra-small">Add</button>
            </div>       
        </div>
    )
}

export default CarsAndSeatsCard;
    
