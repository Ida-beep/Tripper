import { Parse } from "parse";

const fetchShoppingListFromDB = async () => {
  const User = Parse.User.current();
  const queryUser = new Parse.Query("User");
  const user = await queryUser.get(User.id);
  const contactMember = await queryUser.get(user.id);
  const excursionID = contactMember.get("excursionID");

  const shoppingList = [];
  const query = new Parse.Query("ShoppingList");

  let allShoppingItems = await query.find();
  for (let i = 0; i < allShoppingItems.length; i++) {
    try {
      const item = await query.get(allShoppingItems[i].id);

      if (item.get("excursionID") === excursionID) {
        const id = allShoppingItems[i].id;
        const itemName = item.get("itemName");
        const amount = item.get("amount");
        const unit = item.get("unit");

        const itemObject = {
          id: id,
          itemName: itemName,
          amount: amount,
          unit: unit,
        };

        shoppingList.push(itemObject);
      }
    } catch (error) {
      alert("Failed to retrieve the shopping entry. Error: " + error.message);
    }
  }
  return shoppingList;
};

/* const updateShoppingItem = async (selected) => {
    const query = new Parse.Query("ShoppingList");
    try {
        const User = Parse.User.current();
        const queryUser = new Parse.Query("User");
        const user = await queryUser.get(User.id);
        const contactMember = await queryUser.get(user.id);
        const excursionID = contactMember.get("excursionID");

        const object = await query.get(selected.id);
        object.set('itemName', selected.item);
        object.set('amount', parseInt(selected.amount));
        object.set('unit', selected.unit);
        object.set('excursionID', excursionID);
        try {
            const response = await object.save();
            alert("Update successful");
        } catch (error) {
            alert('Error while updating shoppinglist' + error)
            }
    } catch (error) {
        alert('Error while retrieving object shoppinglist' +  error)
    }
  }; */

const fetchPreviousShoppingListFromDB = async (excursionID) => {
  const shoppingList = [];
  const query = new Parse.Query("ShoppingList");
  let allShoppingItems = await query.find();

  for (let i = 0; i < allShoppingItems.length; i++) {
    try {
      const item = await query.get(allShoppingItems[i].id);
      const otherexcursionid = item.get("excursionID");

      if (item.get("excursionID") === excursionID) {
        const id = allShoppingItems[i].id;
        const itemName = item.get("itemName");
        const amount = item.get("amount");
        const unit = item.get("unit");
        const itemObject = {
          id: id,
          itemName: itemName,
          amount: amount,
          unit: unit,
        };
        shoppingList.push(itemObject);
      }
    } catch (error) {
      alert("Failed to retrieve the shopping entry. Error: " + error.message);
    }
  }

  return shoppingList;
};

async function addShoppingItem(data) {
  try {
    const itemName = data.itemName;
    const amount = parseInt(data.amount);
    const unit = data.unit;
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    const excursionID = contactMember.get("excursionID");
    const Item = Parse.Object.extend("ShoppingList");
    const item = new Item();

    item.set("itemName", itemName);
    item.set("amount", amount);
    item.set("unit", unit);
    item.set("excursionID", excursionID);

    item.save().then(
      (itemName) => {
        alert(itemName + "has been added to your Shopping List");
      },
      (error) => {
        alert("Failed to create object, error code: " + error.message);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function addMultipleShoppingItems(list) {
  for (let i = 0; i < list.length; i++) {
    addShoppingItem(list[i]);
  }
}

async function deleteShoppingItem(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemID = item.id;
    const ShoppingList = Parse.Object.extend("ShoppingList");
    const query = new Parse.Query(ShoppingList);

    query.equalTo("objectId", itemID);
    let result = await query.find();
    result = result[0];

    result.destroy().then(
      () => {
        alert("Shopping item successfully deleted ");
      },
      (error) => {
        alert("failed to delete with error-code : " + error.code);
      }
    );
  }
}

const ShoppingAPI = {
  addShoppingItem,
  fetchShoppingListFromDB,
  deleteShoppingItem,
  fetchPreviousShoppingListFromDB,
  addMultipleShoppingItems,
};

export default ShoppingAPI;
