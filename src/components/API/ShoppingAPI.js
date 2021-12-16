import { Parse } from 'parse';

function editShoppingL({item, amount, unit}) {
    try{
        
        const ShoppingList = Parse.Object.extend("ShoppingList");
        const shoppingList = new ShoppingList();
       
        shoppingList.set("item",item);
        shoppingList.set("amount",amount);
        shoppingList.set("unit",unit);

        shoppingList.save()
        .then((shoppingList)=>{
            alert(item + "has been added to your Shopping List"); 
        }, (error)=> {
            alert("Failed to create object, error code: " + error.message);
        });

    } catch(error){
        console.log(error);
    }
}


export default {editShoppingL:editShoppingL};