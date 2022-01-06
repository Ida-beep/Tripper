import React, { useEffect, useState } from "react";
import TableScaffold from "../Cards/TableScaffold";
import ShoppingAPI from "../API/ShoppingAPI";

function ShoppingListCard(props) {
  const [shoppingList, setShoppingList] = useState([]);
  const [selected, setSelected] = useState();

  /**
   * Deletes shopping item
   */
  async function handleDelete(e) {
    e.preventDefault();
    ShoppingAPI.deleteShoppingItem(selected).then(async () => {
      const refetchedList = await ShoppingAPI.fetchShoppingListFromDB();
      setShoppingList(refetchedList);
    });
  }

  /**
   * Sets the selected shopping item as selected
   */
  useEffect(() => {
    props.selectedShoppingItem(selected);
  }, [selected]);

  /**
   * Fetches shoppinglist from database
   */
  useEffect(() => {
    async function fetchData() {
      setShoppingList(await ShoppingAPI.fetchShoppingListFromDB());
    }
    fetchData();
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
          tBodyKey="shoppingBody"
          tTableKey="shoppingTable"
          tHeadKey="shoppingHead"
          key="ShoppingListCard"
        />
      </div>
      <div className="button-container">
        <button
          className="button-secondary-extra-small"
          onClick={handleDelete}
          disabled={true}
        >
          Delete
        </button>
        <button
          className="button-secondary-extra-small"
          disabled={true}
          onClick={props.editActive}
        >
          Edit
        </button>
        <button
          className="button-primary-extra-small"
          onClick={props.addActive}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ShoppingListCard;
