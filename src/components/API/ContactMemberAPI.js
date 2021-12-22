import { Parse } from 'parse';

/**
 * @public getContactMember retrieves the current users contactpersoninformation
 * TODO
 * - Pointer didn't seem to work, so now the id of contactmember is hardcoded as string in back4app
 *   Atm it's a simple string with same ID representing the current user. 
 */

// async function getContactMember(){
//     const User = Parse.User.current();
//     const id = User.id;

//     const CM = Parse.Object.extend("ContactMember");
//     const query = new Parse.Query(CM);

//     query.equalTo("UserID_Placeholder",id)
//     const results = await query.find();
//     if(results.length === 1){
//         const user = results[0];
//         const email = user.get("Email");
//         const firstName = user.get("FirstName");
//         const lastName = user.get("LastName");
//         const age = user.get("Age");
//         const address = user.get("Address");
//         const phone = user.get("Phone");
//         const mobile = user.get("Mobile");
//         const workPhone = user.get("WorkPhone");
//         const zip = user.get("ZIP");
//         const city = user.get("City");
//         const duty1 = user.get("Duty1");
//         const duty2 = user.get("Duty2");
//         const duty3 = user.get("Duty3");
//     const userObject = {firstName,lastName,age,address,mobile,phone,workPhone,email,duty1,duty2,duty3,zip,city};
//     return userObject;
//     }
// }

const fetchContactMemberFromDB = async () => {
    const User = Parse.User.current();
    const id = User.id;

    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(id);
    
    const contactMember = await queryUser.get(user.id);

    const username = contactMember.get("username");
    const firstName = contactMember.get("firstName");
    const lastName = contactMember.get("lastName");
    const age = contactMember.get("age");
    const email = contactMember.get("email");
    const street = contactMember.get("street");
    const zip = contactMember.get("zip");
    const city = contactMember.get("city");
    const mobilePhone = contactMember.get("mobilePhone");
    const phone = contactMember.get("phone");
    const workPhone = contactMember.get("workPhone");
    const duties = contactMember.get("duties");
    
    const contactMemberData = {firstName:firstName, lastName:lastName, age:age, email:email,
        street:street, zip:zip, city:city, mobilePhone:mobilePhone, phone:phone, 
        workPhone:workPhone, duties};

    return contactMemberData
}

function addContactMember({firstName,lastName,age,duties,email,street,workPhone,phone,mobilePhone,zip,city}){
    
    try{
        const ContactMember = Parse.Object.extend("User");
        const contactMember = new ContactMember();
        contactMember.set("firstName",firstName);
        contactMember.set("lastName",lastName);
        contactMember.set("age",parseInt(age));
        contactMember.set("duties",duties);
        contactMember.set("email",email);
        contactMember.set("zip",parseInt(zip));
        contactMember.set("street",street);
        contactMember.set("city",city);
        contactMember.set("workPhone",parseInt(workPhone));
        contactMember.set("phone",parseInt(phone));
        contactMember.set("mobilePhone",parseInt(mobilePhone));

        contactMember.save()
        .then((contactMember)=>{
            alert("A Family Member was submitted: " + contactMember.firstName); 
        }, (error)=> {
            alert("Failed to create object, error code: " + error.message);
        });

    } catch(error){
        console.log(error);
    }
}

const updateContactMemberFromDB = async ({
    firstName,lastName,age,duties,email,street,workPhone,phone,mobile,zip,city}) => {
  
    const User = new Parse.User();
    const query = new Parse.Query(User);

    try {
        // Finds the user by its ID
        const User = Parse.User.current();
        const id = User.id;
        let user = await query.get(id);

        // Updates the data we want
        user.set('email', email);
        user.set('street', street);
        user.set('zip', parseInt(zip));
        user.set('age', parseInt(age));
        user.set('workPhone', parseInt(workPhone));
        user.set('mobilePhone', parseInt(mobile));
        user.set('phone', parseInt(phone));
        user.set('duties', duties);
        user.set('firstName', firstName);
        user.set('lastName', lastName);
        user.set('city', city);
        try {
        // Saves the user with the updated data
        let response = await user.save().then(()=>{
            alert("Info successfully updated");
        }, (error)=>{
            alert("failed to update with error-code : " + error.code);
        });

        console.log('Updated user', response);
        } catch (error) {
        console.error('Error while updating user', error);
        }
    } catch (error) {
        console.error('Error while retrieving user', error);
    }
};



/** 
 
 function uploadContactMemberImage({imageFile}) {
   
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



export default {
    fetchContactMemberFromDB:fetchContactMemberFromDB,
    addContactMember:addContactMember,
    updateContactMemberFromDB:updateContactMemberFromDB};