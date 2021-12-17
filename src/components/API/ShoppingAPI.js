import { Parse } from 'parse';

//**Only returns an object promise -- help?? */
async function getCurrentExcursion() {
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    const excursionID = contactMember.get("excursionID");
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

async function addShoppingItem(props) {
    try{

        console.log("addShoppingItem called");
        const itemName = props.data[0];
        const amount = parseInt(props.data[1]);
        const unit = props.data[2];

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
        
        console.log("start")
        item.save()
        .then((itemName)=>{
            console.log("success")
            alert(itemName + "has been added to your Shopping List"); 
        }, (error)=> {
            console.log("failure")
            alert("Failed to create object, error code: " + error.message);
        });

    } catch(error){
        console.log(error);
    }
}


export default {addShoppingItem:addShoppingItem, 
    fetchShoppingListFromDB:fetchShoppingListFromDB};