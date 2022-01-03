import { Parse } from 'parse';

// const getCurrentExcursion = async () => {

//     let excursionID = "";
//     try {
//         const User = Parse.User.current();
//         const queryUser = new Parse.Query("User");
//         const user = await queryUser.get(User.id);
//         const contactMember = await queryUser.get(user.id);
//         excursionID = contactMember.get("excursionID");
//     } catch(error) {
//         console.log(error);
//     }
    
//     return excursionID
// }


const fetchShoppingListFromDB = async () => {
    
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    const excursionID = contactMember.get("excursionID");
    
    const shoppingList = []
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
                    unit: unit
                };

                shoppingList.push(itemObject);
            }
            
        } catch (error) {
            alert("FAILED to retrieve the shopping entry. Error: " + error.message);
        }
    } 
    return shoppingList
}

const updateShoppingItem = async (selected) => {
    console.log("INSIDE UPDATE SHOPPING ITEM");
    const query = new Parse.Query("ShoppingList");
    console.log("ShoppingAPI: selected: ", selected);

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

            console.log(response.get('itemName'));
            console.log(response.get('amount'));
            console.log(response.get('unit'));
            console.log(response.get('excursionID'));
            console.log('ShoppingList updated', response);
            alert("Update successful");
        } catch (error) {
            console.error('Error while updating ShoppingList', error);
            alert('Error while updating shoppinglist' + error)
            }
    } catch (error) {
        console.error('Error while retrieving object ShoppingList', error);
        alert('Error while retrieving object shoppinglist' +  error)
    }
  };

const fetchPreviousShoppingListFromDB = async (excursionID) => {
    
    const shoppingList = []
    const query = new Parse.Query("ShoppingList");
    
    let allShoppingItems = await query.find();
    console.log("all shopping items length: ", allShoppingItems.length)
    for (let i = 0; i < allShoppingItems.length; i++) { 
        try {
            const item = await query.get(allShoppingItems[i].id);
            
            const otherexcursionid = item.get("excursionID")
            console.log("other excursion id: ", otherexcursionid)
            console.log("main excursionid: ", excursionID);
            if (item.get("excursionID") === excursionID) {
                const id = allShoppingItems[i].id;
                const itemName = item.get("itemName");
                console.log("item name: " + itemName);
                const amount = item.get("amount");
                console.log("amount: " + amount)
                const unit = item.get("unit");
                console.log("unit: ", unit)

                const itemObject = {
                    id: id,
                    itemName: itemName,
                    amount: amount,
                    unit: unit
                };

                console.log("object: ", itemObject)

                shoppingList.push(itemObject);
            }
            
        } catch (error) {
            alert("FAILED to retrieve the shopping entry. Error: " + error.message);
        }
    } 

    console.log("shoppinglist: ", shoppingList)
    
    return shoppingList
}


async function addShoppingItem(data) {
    console.log("data: ", data)
    try{
        const itemName = data.itemName;
        console.log("item name", itemName)
        const amount = parseInt(data.amount);
        console.log("amount", amount)
        const unit = data.unit;
        console.log("unit", unit)

        const User = Parse.User.current();
        const queryUser = new Parse.Query("User");
        const user = await queryUser.get(User.id);
        const contactMember = await queryUser.get(user.id);
        const excursionID = contactMember.get("excursionID");

        const Item = Parse.Object.extend("ShoppingList");
        const item = new Item();

        item.set("itemName", itemName);
        item.set("amount",amount);
        item.set("unit", unit);
        item.set("excursionID", excursionID);
        
        item.save()
        .then((itemName)=>{
            alert(itemName + "has been added to your Shopping List"); 
        }, (error)=> {
            alert("Failed to create object, error code: " + error.message);
        });

    } catch(error){
        console.log(error);
    }
}

async function addMultipleShoppingItems(list) {
    
    for (let i = 0; i < list.length; i++) {
        console.log("list ", i, list[i])
        addShoppingItem(list[i])
    }
}

async function deleteShoppingItem(items){
    for(let i=0; i < items.length;i++){
        const item = items[i];

        const itemID = item.id;
        const ShoppingList = Parse.Object.extend("ShoppingList");
        const query = new Parse.Query(ShoppingList);
    
        query.equalTo("objectId",itemID)
        let result = await query.find();
        result = result[0];

        result.destroy()
        .then(()=>{
            alert("Shopping item successfully deleted ");
        }, (error)=>{
            alert("failed to delete with error-code : " + error.code);
        })
    }
}

const ShoppingAPI = {
    addShoppingItem, 
    fetchShoppingListFromDB,
    deleteShoppingItem,
    fetchPreviousShoppingListFromDB,
    addMultipleShoppingItems};

export default ShoppingAPI
