import { Parse } from 'parse';

const fetchShoppingListFromDB = async () => {
    // const contactPerson = Parse.User.current();
    // const contactPersonID = contactPerson.id;
    
    // const familyMemberCollection = []
    // const query = new Parse.Query("familyMember");
    
    // let allFamilyMembersfromDB = await query.find();
    // for (let i = 0; i < allFamilyMembersfromDB.length; i++) { 
    //     try {
    //         const familyMember = await query.get(allFamilyMembersfromDB[i].id);
            
    //         if (familyMember.get("contactPersonID") === contactPersonID) {
    //             const id = allFamilyMembersfromDB[i].id;  
    //             const firstName = familyMember.get("firstName");
    //             const lastName = familyMember.get("lastName");
    //             const age = familyMember.get("age");
    //             const duties = familyMember.get("duties");
                
    //             const familyMemberObject = {
    //                 id: id,
    //                 firstName: firstName,
    //                 lastName: lastName,
    //                 age: age,
    //                 duties: duties,
    //             };
    //             familyMemberCollection.push(familyMemberObject)
    //         }
            
    //     } catch (error) {
    //         alert("FAILED to retrieve the CAR entry. Error: ${error.message}");
    //       }
    // } return familyMemberCollection
}

async function addShoppingItem(props) {
    try{

        const itemName = props.data[0];
        const amount = parseInt(props.data[1]);
        const unit = props.data[2];

        //Retrieving excursionID using current user
        const User = Parse.User.current();
        const queryUser = new Parse.Query("User");
        const user = await queryUser.get(User.id);
        const contactMember = await queryUser.get(user.id);
        const excursionID = contactMember.get("excursionID");

        const Item = Parse.Object.extend("ShoppingList");
        const item = new Item();

        item.set("item", itemName);
        item.set("amount",amount);
        item.set("unit", unit);
        item.set("excursionID", excursionID);

        item.save()
        .then((item)=>{
            alert(itemName + "has been added to your Shopping List"); 
        }, (error)=> {
            alert("Failed to create object, error code: " + error.message);
        });

    } catch(error){
        console.log(error);
    }
}


export default {addShoppingItem:addShoppingItem, 
    fetchShoppingListFromDB};