import React, { useEffect, useState } from "react";
import TableScaffold from "../Cards/TableScaffold";
import ShoppingAPI from "../API/ShoppingAPI";

function ShoppingListCard(props) {
  const [shoppingList, setShoppingList] = useState([]);
  const [selected, setSelected] = useState();

  async function handleDelete(e) {
    e.preventDefault();
    console.log("handle delete called");
    ShoppingAPI.deleteShoppingItem(selected).then(async () => {
      const refetchedList = await ShoppingAPI.fetchShoppingListFromDB();
      setShoppingList(refetchedList);
    });
  }

  useEffect(() => {
    props.selectedShoppingItem(selected);
    console.log("New selected useeffect to use in EditCar", selected);
  }, [selected]);

  useEffect(() => {
    async function fetchData() {
      setShoppingList(await ShoppingAPI.fetchShoppingListFromDB());
    }
    fetchData();
    console.log("Shoppinglist useEffect called");
  }, []);

  function disable() {
    if (!selected) {
      return true;
    }
    return false;
  }

  return (
    <div className="card-container">
      <div className="table-container">
        <TableScaffold
          onSelection={(selected) => setSelected(selected)}
          tkey={["itemName", "amount", "unit"]}
          theaders={["Item", "Amount", "Unit"]}
          tdata={shoppingList}
        />
      </div>
      <div className="button-container">
        <button
          className="button-secondary-extra-small"
          onClick={handleDelete}disabled={disable()}>
          Delete
        </button>
        <button className="button-secondary-extra-small" 
          disabled={disable()} onClick={props.editActive}>
          Edit
        </button>
        <button className="button-primary-extra-small" 
          onClick={props.addActive}>Add</button>
      </div>
    </div>
  );
}

export default ShoppingListCard;
