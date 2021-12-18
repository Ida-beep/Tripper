import React, {useEffect, useState} from 'react';
import TableScaffold from '../Cards/TableScaffold';
import ShoppingAPI from '../API/ShoppingAPI';

function ShoppingListCard() {
    const [shoppingList,setShoppingList] = useState([]);
    const [selected, setSelected] = useState([]);

    function handleAdd() {
        console.log("handleAdd was called")
        ShoppingAPI.addShoppingItem({firstName:"Emil",lastName:"Løndeberg",age:"45",duties:["lala","blabla"]});
    } 

    async function handleDelete(e){
        e.preventDefault();
        console.log("handle delete called");
        ShoppingAPI.deleteFamilyMember(selected).then(async () => {
            const refetchedList = await ShoppingAPI.fetchShoppingListFromDB();
            setShoppingList(refetchedList);
        });
    } 

    function addElementToSelected(element){
        setSelected((prevState)=> [...prevState,element]);
        console.log(selected);
    }

    useEffect(()=> {
        async function fetchData(){
            setShoppingList(await ShoppingAPI.fetchShoppingListFromDB())
        };
        fetchData();
        console.log("Shoppinglist useEffect called");
    }, []) 

 
    return (
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>Your Shopping Items</h4>
            <div className="table-container">
                    <TableScaffold onSelection={(selected)=>addElementToSelected(selected)}
                        tkey={[
                            "itemName",
                            "amount",
                            "unit"
                        ]}
                        theaders={[
                            "Item",
                            "Amount",
                            "Unit"
                        ]} 
                        tdata={shoppingList}
                    />
            </div>
             <div className="button-container">
                <button className="button-extra-small" onClick={handleDelete}>Delete</button>
                <button className="button-extra-small" onClick={handleAdd}>Add</button>
            </div> 
        </div>
    );
}

export default ShoppingListCard;   