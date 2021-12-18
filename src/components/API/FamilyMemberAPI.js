import { Parse } from 'parse';

const fetchFamilyMembersFromDB = async () => {
    const contactPerson = Parse.User.current();
    const contactPersonID = contactPerson.id;
    
    const familyMemberCollection = []
    const query = new Parse.Query("FamilyMember");
    
    let allFamilyMembersfromDB = await query.find();
    for (let i = 0; i < allFamilyMembersfromDB.length; i++) { 
        try {
            const familyMember = await query.get(allFamilyMembersfromDB[i].id);
            
            if (familyMember.get("contactPersonID") === contactPersonID) {
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
            }
            
        } catch (error) {
            alert("FAILED to retrieve the CAR entry. Error: ${error.message}");
          }
    } return familyMemberCollection
}

// const fetchGuestsFromDB = async () => {
//     const guestCollection = []
//     const query = new Parse.Query("FamilyMember");
//     let allGuestsfromDB = await query.find();
//     for (let i = 0; i < allGuestsfromDB.length; i++) { // finder alle duties i back4app baseret på objectId
//         try {
//             const guest = await query.get(allGuestsfromDB[i].id);
            
//             const id = allGuestsfromDB[i].id;
//             const firstName = guest.get("firstName");
//             const lastName = guest.get("lastName");
//             const age = guest.get("age");
//             const duties = guest.get("duties");
           
//             const guestObject = {
//                 id: id,
//                 firstName: firstName,
//                 lastName: lastName,
//                 age: age,
//                 duties: duties,
//             };
            
//             guestCollection.push(guestObject)
        
//         } catch (error) {
//             alert("FAILED to retrieve the DUTY entry. Error: ${error.message}");
//           }
//     } return guestCollection
// }

function addFamilyMember({firstName, lastName, age, duties}){
    try{
        const FamilyMember = Parse.Object.extend("familyMember");
        const familyMember = new FamilyMember();
        familyMember.set("firstName",firstName);
        familyMember.set("lastName",lastName);
        familyMember.set("age",age);
        familyMember.set("duties",duties);

        familyMember.save()
        .then((familyMember)=>{
            alert("A Family Member was submitted: " + familyMember.firstName); 
        }, (error)=> {
            alert("Failed to create object, error code: " + error.message);
        });

    } catch(error){
        console.log(error);
    }
}

async function deleteFamilyMember(familyMembers){
    for(let i=0; i < familyMembers.length;i++){
        const member = familyMembers[i];

        const jsobjID = member.id;
        const FamilyMember = Parse.Object.extend("familyMember");
        const query = new Parse.Query(FamilyMember);
    
        query.equalTo("objectId",jsobjID)
        let result = await query.find();
        result = result[0];

        result.destroy()
        .then(()=>{
            alert(" family members succesfully deleted ");
        }, (error)=>{
            alert("failed to delete with error-code : " + error.code);
        })
    }
}

export default {
    fetchFamilyMembersFromDB:fetchFamilyMembersFromDB,
    addFamilyMember:addFamilyMember,
    deleteFamilyMember:deleteFamilyMember};