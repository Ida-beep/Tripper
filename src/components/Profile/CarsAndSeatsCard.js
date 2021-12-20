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
function CarsAndSeatsCard(props){
    const [carsAndSeats,setCarsAndSeats] = useState([]);
    const [selected, setSelected] = useState([]);
    
    function addElementToSelected(element){
        setSelected((prevState)=> [...prevState,element]);
        console.log(selected);
    }

    async function handleDelete(e){
        e.preventDefault();
        CarsAPI.deleteCar(selected).then(async () => {
            const refetchedList = await CarsAPI.fetchCarsFromDB();
            setCarsAndSeats(refetchedList);
        });
    }

    useEffect(()=> {
        async function fetchData(){
            setCarsAndSeats(await CarsAPI.fetchCarsFromDB())
        };
        fetchData();
        console.log("use Effect for fetchCarsFromDB called")
    }, []) 

    function disable() {
        if (selected.length < 1) {
            return true;
        }
        return false;
    }

    return (   
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>Cars and Seats</h4>
            <div className="table-container">
                <TableScaffold onSelection={(selected)=>addElementToSelected(selected)}
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
                <button className="button-extra-small" onClick={handleDelete}
                    disabled={disable()}>Delete</button>
                <button className="button-extra-small"
                    disabled={disable()}>Edit</button>
                <button className="button-extra-small" onClick={props.toggleCarItem}>Add</button>
            </div>       
        </div>
    )
}

export default CarsAndSeatsCard;
    
