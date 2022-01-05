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
      console.log("Failed to retrieve the CAR entry. Error: " + error.message);
    }
  }
  return familyMemberCollection;
};

/**
 * REST API call to get all familyMembers in the DB
 */
async function getAllFamilyMembersREST() {
  try {
    const response = await fetch(
      "https://parseapi.back4app.com/parse/classes/FamilyMember",
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "BWRXJVmbqMoffsZkk8sZYB2RNFMYU6YtQWTFa9zz",
          "X-Parse-REST-API-Key": "Oo6W88C7LWuQehuIUUx4EVliOONWKjC1Knkub8Zj",
        },
      }
    );
    const content = await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * This method is used to find all familyMembers currently participating in the excursion
 * that the User is also currently enrolled in
 */
async function fetchAllFamilyMembersInExcursion() {
  const familyMemberCollection = [];
  try {
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    const excursionID = contactMember.get("excursionID");

    const queryFamilyMembers = new Parse.Query("FamilyMember");
    let allFamilyMembersfromDB = await queryFamilyMembers.find();

    for (let i = 0; i < allFamilyMembersfromDB.length; i++) {
      try {
        const familyMember = await queryFamilyMembers.get(
          allFamilyMembersfromDB[i].id
        );

        if (familyMember.get("excursionID") === excursionID) {
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
        console.log(error.code);
      }
    }
  } catch (error) {
    console.log(error.code);
  }
  return familyMemberCollection;
}

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
    familyMember.set("excursionID", Parse.User.current().excursionID);

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
  const query = new Parse.Query("FamilyMember");
  try {
    const object = await query.get(selected.id);
    object.set("age", selected.age);
    object.set("firstName", selected.firstName);
    object.set("lastName", selected.lastName);
    object.set("duties", selected.duties);
    object.set("contactPersonID", Parse.User.current().id);
    try {
      const response = await object.save();
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
    let response = await query.find();
    response = response[0];

    if (response !== null) {
      response.destroy().then(
        () => {
          alert(" family members succesfully deleted ");
        },
        (error) => {
          alert("failed to delete with error-code : " + error.code);
        }
      );
    } else {
      console.log("deletion didn't happen since the response is null");
    }
  }
}

async function deleteOneFamilyMember(familyMember) {
  const member = familyMember;

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

const FamilyMemberAPI = {
  fetchFamilyMembersFromDB,
  deleteOneFamilyMember,
  updateFamilyMember,
  addFamilyMember,
  deleteFamilyMember,
  getAllFamilyMembersREST,
  fetchAllFamilyMembersInExcursion,
};
export default FamilyMemberAPI;
