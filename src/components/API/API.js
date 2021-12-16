import { Parse } from 'parse';

/**
 *  @public initializes connection with backedn Back4App 
 */
function initialize(){
<<<<<<< HEAD
    //Parse.initialize('cSqpSt87DAh7P1u7i99iciru7vSAbREic5H7Duxs', 'xnonzNu6x9RKtJ2OVytZmi2MlS9oPfrjlEVfmO1j');
    Parse.initialize('EVjh0m8JGZyGxYoKbj11GNJlN6mJ1gOhJDbbpBQV', 'o2WBDuLkFJlnhJmgIRTVqG29hYuzttGxVibVzgs6'); //ny database
    Parse.serverURL = 'https://parseapi.back4app.com/';
}


function editExcursion({excursionTitle, fromDate, toDate, location, description}) {
    try {
        const Excursion = Parse.Object.extend("excursion");

        const excursion = new Excursion();
        excursion.set("excursionTitle", excursionTitle);
        excursion.set("fromDate", fromDate);
        excursion.set("toDate", toDate);
        excursion.set("location", location);
        excursion.set("description", description);

        excursion.save().then((excursion)=> {
            alert("Excursion was edited: " + excursion.excursionTitle);
        }, (error) => {
            alert("Failed to edit object, error code: " + error.message)
        })
        console.log("Updated excursion information");
    } catch(error) {
        console.log(error);
    }
}

function editContactMember({firstName, lastName, street, zip, city, mobile, phone, workNumber, duties}) {    
        try{
            const ContactMember = Parse.Object.extend("contactMember");
            const contactMember = new ContactMember();
            contactMember.set("firstName",firstName);
            contactMember.set("lastName",lastName);
            contactMember.set("street",street);
            contactMember.set("zip", zip);
            contactMember.set("city", city);
            contactMember.set("mobile", mobile);
            contactMember.set("phone", phone);
            contactMember.set("workNumber", workNumber);
            contactMember.set("duties",duties);
        
            contactMember.save().then((contactMember)=>{
                alert("Contact information was saved."); 
            }, (error)=> {
                alert("Failed to update object, error code: " + error.message);
            })
            console.log("Updated contact information")
        } catch(error){
            console.log(error);
        }
}


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




/**
 
 function uploadImage({imageFile}) {
   
    try{

        const Image = Parse.Object.extend("Image");
        const newImage = new Image();

        newImage.set("imageFile", imageFile);
  
        const file = new Parse.File(imageFile.name, imageFile);
        newImage.set("file", file);


        newImage.save()
        .then((newImage)=>{
        alert("has been uploaded"); 
        }, (error)=> {
        alert("Failed to create object, error code: "+ error.message);
        });

    } catch(error){
        console.log(error);
    }
}
 */



/**
 * @public getContactMember retrieves the current users contactpersoninformation
 * TODO
 * - Pointer didn't seem to work, so now the id of contactmember is hardcoded as string in back4app
 *   Atm it's a simple string with same ID representing the current user. 
 */

async function getContactMember(){
    const User = Parse.User.current();
    const id = User.id;

    const CM = Parse.Object.extend("contactMember");
    const query = new Parse.Query(CM);

    query.equalTo("UserID_Placeholder",id)
    const results = await query.find();
    if(results.length === 1){
        const user = results[0];
        const email = user.get("Email");
        const firstName = user.get("FirstName");
        const lastName = user.get("LastName");
        const age = user.get("Age");
        const address = user.get("Address");
        const phone = user.get("Phone");
        const mobile = user.get("Mobile");
        const workPhone = user.get("WorkPhone");
        const zip = user.get("ZIP");
        const city = user.get("City");
        const duty1 = user.get("Duty1");
        const duty2 = user.get("Duty2");
        const duty3 = user.get("Duty3");
    const userObject = {firstName,lastName,age,address,mobile,phone,workPhone,email,duty1,duty2,duty3,zip,city};
    return userObject;
    }


}

=======
    Parse.initialize('EVjh0m8JGZyGxYoKbj11GNJlN6mJ1gOhJDbbpBQV', 'o2WBDuLkFJlnhJmgIRTVqG29hYuzttGxVibVzgs6');
    Parse.serverURL = 'https://parseapi.back4app.com/';
}
>>>>>>> 7fce9c712f1ee106a00ca91341c4342db977f903
async function signup({username,password}){
    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    const ContactMember = Parse.Object.extend("ContactMember");
    const contactMember = new ContactMember();
    contactMember.set("UserID",Parse.User.current().id);

    try {
        await user.signUp();
        await contactMember.save();
    } catch (error) {
        alert("Error: " + error.code + " " + error.message);
    }
}

<<<<<<< HEAD
export default {signup:signup, initialize:initialize,addFamilyMember:addFamilyMember, getContactMember:getContactMember ,editContactMember:editContactMember, addContactMember:addContactMember, editExcursion:editExcursion, deleteFamilyMember:deleteFamilyMember, getDuties:getDuties, editShoppingL:editShoppingL};
=======
export default {signup:signup, initialize:initialize};
>>>>>>> 7fce9c712f1ee106a00ca91341c4342db977f903
