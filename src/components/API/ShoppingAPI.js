import { Parse } from 'parse';

const getCurrentExcursion = async () => {

    let excursionID = "";
    try {
        const User = Parse.User.current();
        const queryUser = new Parse.Query("User");
        const user = await queryUser.get(User.id);
        const contactMember = await queryUser.get(user.id);
        excursionID = contactMember.get("excursionID");
    } catch(error) {
        console.log(error);
    }
    
    return excursionID
}


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


export default {addShoppingItem:addShoppingItem, 
    fetchShoppingListFromDB:fetchShoppingListFromDB,
    deleteShoppingItem:deleteShoppingItem,
    getCurrentExcursion:getCurrentExcursion,
    fetchPreviousShoppingListFromDB,
    addMultipleShoppingItems:addMultipleShoppingItems};