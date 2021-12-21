import React, {useEffect, useState} from 'react';
import TableScaffold from '../Cards/TableScaffold';
import ExcursionAPI from '../API/ExcursionAPI';

function PreviousShoppingListsCard(props) {
    const [excursions,setExcursions] = useState([]);
    const [selected, setSelected] = useState();

    function addElementToSelected(element){
        setSelected(element);
    }

    useEffect(()=> {
        async function fetchData(){
            setExcursions(await ExcursionAPI.fetchAllExcursionsFromDB())
        };
        fetchData();
        console.log("Previous shopping lists useEffect called");
    }, []) 

    function disable() {
        if (!selected) {
            return true;
        }
        return false;
    }
 
    return (
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>Get Shopping List From Previous</h4>
            <div className="table-container">
                    <TableScaffold onSelection={(selected)=>addElementToSelected(selected)}
                        tkey={[
                            "excursionTitle"
                        ]}
                        theaders={[
                            "Excursion"
                        ]} 
                        tdata={excursions}
                    />
            </div>
            <div className="button-container">
                <button className="button-primary-extra-small"
                    disabled={disable()}>Open</button>
            </div> 
        </div>
    );
}

export default PreviousShoppingListsCard;   