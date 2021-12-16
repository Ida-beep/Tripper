import { Parse } from 'parse';

/**
 * @public getContactMember retrieves the current users contactpersoninformation
 * TODO
 * - Pointer didn't seem to work, so now the id of contactmember is hardcoded as string in back4app
 *   Atm it's a simple string with same ID representing the current user. 
 */

async function getContactMember(){
    const User = Parse.User.current();
    const id = User.id;

    const CM = Parse.Object.extend("ContactMember");
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

const fetchContactMemberFromDB = async () => {
    const User = Parse.User.current();
    const id = User.id;

    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(id);
    
    const contactMember = await queryUser.get(user.id);

    const username = contactMember.get("username");
    const firstName = contactMember.get("firstName");
    const lastName = contactMember.get("lastName");
    const email = contactMember.get("email");
    const street = contactMember.get("street");
    const zip = contactMember.get("zip");
    const city = contactMember.get("city");
    const mobilePhone = contactMember.get("mobilePhone");
    const phone = contactMember.get("phone");
    const workPhone = contactMember.get("workPhone");
    const duties = contactMember.get("duties");

    
    const contactMemberData = {firstName:firstName, lastName:lastName, email:email,
        street:street, zip:zip, city:city, mobilePhone:mobilePhone, phone:phone, 
        workPhone:workPhone, duty1:duties[0], duty2:duties[1], duty3:duties[2]};

    return contactMemberData
}

function addContactMember({firstName,lastName,age,duties,email,address,workphone,phone,mobile}){
    
    try{
        const ContactMember = Parse.Object.extend("ContactMember");
        const contactMember = new ContactMember();
        contactMember.set("firstName",firstName);
        contactMember.set("lastName",lastName);
        contactMember.set("age",age);
        contactMember.set("duties",duties);
        contactMember.set("email",email);
        contactMember.set("address",address);
        contactMember.set("workphone",workphone);
        contactMember.set("phone",phone);
        contactMember.set("mobile",mobile);

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

/**Current identical to addContactMember, must be changed. Also, rename to updateContactMember? */
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
            alert(contactMember + "'s contact information was saved."); 
        }, (error)=> {
            alert("Failed to update object, error code: " + error.message);
        })
        console.log("Updated contact information")
    } catch(error){
        console.log(error);
    }
}


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
    getContactMember:getContactMember,
    addContactMember:addContactMember,
    editContactMember:editContactMember};