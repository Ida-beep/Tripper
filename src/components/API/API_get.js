import { Parse} from "parse"
 
const fetchDutiesFromDB = async () => {
    const dutyCollection = []
    const query = new Parse.Query("Duty");
    
    let allDutiesFromDB = await query.find();
    for (let i = 0; i < allDutiesFromDB.length; i++) { // finder alle duties i back4app baseret på objectId
        try {
            const duty = await query.get(allDutiesFromDB[i].id);
            
            const id = allDutiesFromDB[i].id;
            const name = duty.get("name");
            const minRequired = duty.get("minRequired"); // kan ikke huske om dette var en ting...Tjek back4app.com
           
            const dutyObject = {
                id: id,
                name: name,
            minRequired: minRequired,
            };
            dutyCollection.push(dutyObject)
        
        } catch (error) {
            alert(`FAILED to retrieve the DUTY entry. Error: ${error.message}`);
          }
    } return dutyCollection
}

const fetchContactMemberFromDB = async () => {
    const User = Parse.User.current();
    const id = User.id;

    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(id);
    
    const queryContactMember = new Parse.Query("contactMember");

    const userInfo = await user.get("userInfo");
    const contactMember = await queryContactMember.get(userInfo.id);

    const firstName = contactMember.get("FirstName");
    const lastName = contactMember.get("LastName");
    const email = contactMember.get("Email");
    const street = contactMember.get("Address");
    const zip = contactMember.get("ZIP");
    const city = contactMember.get("City");
    const mobile = contactMember.get("Mobile");
    const phone = contactMember.get("Phone");
    const workPhone = contactMember.get("WorkPhone");
    const duty1 = contactMember.get("Duty1");
    const duty2 = contactMember.get("Duty2");
    const duty3 = contactMember.get("Duty3");
    
    const contactMemberData = {firstName:firstName, lastName:lastName, email:email,
        street:street, zip:zip, city:city, mobile:mobile, phone:phone, 
        workPhone:workPhone, duty1:duty1, duty2:duty2, duty3:duty3};

    return contactMemberData
}

const fetchGuestsFromDB = async () => {
    const guestCollection = []
    const query = new Parse.Query("FamilyMember");
    let allGuestsfromDB = await query.find();
    for (let i = 0; i < allGuestsfromDB.length; i++) { // finder alle duties i back4app baseret på objectId
        try {
            const guest = await query.get(allGuestsfromDB[i].id);
            
            const id = allGuestsfromDB[i].id;
            const firstName = guest.get("firstName");
            const lastName = guest.get("lastName");
            const age = guest.get("age");
            const duties = guest.get("duties");
           
            const guestObject = {
                id: id,
                firstName: firstName,
                lastName: lastName,
                age: age,
                duties: duties,
            };
            
            guestCollection.push(guestObject)
        
        } catch (error) {
            alert(`FAILED to retrieve the DUTY entry. Error: ${error.message}`);
          }
    } return guestCollection
}

const fetchCarsFromDB = async () => {
    const carCollection = []
    const query = new Parse.Query("Car");
    let allCarsfromDB = await query.find();
    for (let i = 0; i < allCarsfromDB.length; i++) { // finder alle cars i back4app baseret på objectId
        try {
            const guest = await query.get(allCarsfromDB[i].id);
            
            const id = allCarsfromDB[i].id;
            const carModel = guest.get("carModel");
            const licensePlate = guest.get("licensePlate");
            const carColor = guest.get("carColor");
            const carSeats = guest.get("carSeats");
           
            const carObject = {
                id: id,
                carModel: carModel,
                licensePlate: licensePlate,
                carColor: carColor,
                carSeats: carSeats,
            };
            
            carCollection.push(carObject)
        
        } catch (error) {
            alert(`FAILED to retrieve the CAR entry. Error: ${error.message}`);
          }
    } return carCollection
}

const fetchFamilyMembersFromDB = async () => {
    const familyMemberCollection = []
    const query = new Parse.Query("FamilyMember");
    let allFamilyMembersfromDB = await query.find();
    for (let i = 0; i < allFamilyMembersfromDB.length; i++) { // finder alle cars i back4app baseret på objectId
        try {
            const familyMember = await query.get(allFamilyMembersfromDB[i].id);
            
            const id = allFamilyMembersfromDB[i].id;  
            const firstName = familyMember.get("firstName");
            const lastName = familyMember.get("lastName");
            const age = familyMember.get("age");
            const duties = familyMember.get("duties");
            
            const familyMemberObject = {
                id: id,
                firstName: firstName,
                lastName: lastName,
                age: age,
                duties: duties,
            };
            
            familyMemberCollection.push(familyMemberObject)
        
        } catch (error) {
            alert(`FAILED to retrieve the CAR entry. Error: ${error.message}`);
          }
    } return familyMemberCollection
}



export default {
    fetchDutiesFromDB:fetchDutiesFromDB,
    fetchGuestsFromDB:fetchGuestsFromDB,
    fetchCarsFromDB:fetchCarsFromDB,
    fetchFamilyMembersFromDB:fetchFamilyMembersFromDB,
    fetchContactMemberFromDB:fetchContactMemberFromDB
}



