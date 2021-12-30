import { Parse } from "parse";

const fetchFamilyMembersFromDB = async () => {
  const contactPerson = Parse.User.current();
  const contactPersonID = contactPerson.id;

  const familyMemberCollection = [];
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
        familyMemberCollection.push(familyMemberObject);
      }
    } catch (error) {
      alert("FAILED to retrieve the CAR entry. Error: " + error.message);
    }
  }
  return familyMemberCollection;
};

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

function addFamilyMember({ firstName, lastName, age, duties }) {
  try {
    const User = Parse.User.current();
    const id = User.id;
    const ageInt = parseInt(age);

    const FamilyMember = Parse.Object.extend("FamilyMember");
    const familyMember = new FamilyMember();
    familyMember.set("firstName", firstName);
    familyMember.set("lastName", lastName);
    familyMember.set("age", ageInt);
    familyMember.set("duties", duties);
    familyMember.set("contactPersonID", id);

    familyMember.save().then(
      (familyMember) => {
        alert("A Family Member was submitted: " + firstName);
      },
      (error) => {
        alert("Failed to create object, error code: " + error.message);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

const updateFamilyMember = async (selected) => {
  console.log("INSIDE UPDATE FAMILY MEMBER");

  const query = new Parse.Query("FamilyMember");
  console.log("FAMILY-API: selected: ", selected);
  try {
    //here you put the objectId that you want to update
    const object = await query.get(selected.id);
    object.set("age", selected.age);
    object.set("firstName", selected.firstName);
    object.set("lastName", selected.lastName);
    object.set("duties", selected.duties); // should be changed
    object.set("contactPersonID", Parse.User.current().id);
    try {
      const response = await object.save();
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      // Access the Parse Object attributes using the .GET method
      /*       console.log(response.get("age"));
      console.log(response.get("firstName"));
      console.log(response.get("lastName"));
      console.log(response.get("duties"));
      console.log(response.get("contactPersonID")); */
      console.log("FamilyMember updated", response);
    } catch (error) {
      console.error("Error while updating FamilyMember", error);
    }
  } catch (error) {
    console.error("Error while retrieving object FamilyMember", error);
  }
};

async function deleteFamilyMember(familyMembers) {
  for (let i = 0; i < familyMembers.length; i++) {
    const member = familyMembers[i];

    const familyMemberID = member.id;
    const FamilyMember = Parse.Object.extend("FamilyMember");
    const query = new Parse.Query(FamilyMember);

    query.equalTo("objectId", familyMemberID);
    let result = await query.find();
    result = result[0];

    if (result !== null) {
      result.destroy().then(
        () => {
          alert(" family members succesfully deleted ");
        },
        (error) => {
          alert("failed to delete with error-code : " + error.code);
        }
      );
    } else {
      console.log("deletion didn't happen since the result is null");
    }
  }
}

export default {
  fetchFamilyMembersFromDB: fetchFamilyMembersFromDB,
  updateFamilyMember: updateFamilyMember,
  addFamilyMember: addFamilyMember,
  deleteFamilyMember: deleteFamilyMember,
};
