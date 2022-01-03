import { Parse } from 'parse';

const createExcursion = async (
  {excursionName, fromDate, toDate, location, description}) => {
  
  const newExcursion = new Parse.Object('Excursion');
  newExcursion.set('excursionTitle', excursionName);
  newExcursion.set('fromDate', new Date(fromDate));
  newExcursion.set('toDate', new Date(toDate));
  newExcursion.set('location', location);
  newExcursion.set('description', description);
  try {
    const result = await newExcursion.save();
    // Access the Parse Object attributes using the .GET method
    console.log('Excursion created', result);
    alert('Excursion created', result);
    return result;
  } catch (error) {
    console.error('Error while creating Excursion: ', error);
    alert("error: ", error)
  }
};

const fetchExcursionFromDB = async () => {
    
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    const excursionID = contactMember.get("excursionID");

    const query = new Parse.Query("Excursion");
    let excursions = await query.find();


    let excursionInfo = {}
    
    for (let i = 0; i < excursions.length; i++) { 
        try {
            const excursion = await query.get(excursions[i].id);
            
            if (excursion.id === excursionID) {
                const excursionTitle = excursion.get("excursionTitle");
                const dateFrom = excursion.get("fromDate");
                const fromDate = new Date(dateFrom);
                const fromDateString = fromDate.toLocaleDateString()
                const dateTo = excursion.get("toDate");
                const toDate = new Date(dateTo)
                const toDateString = toDate.toLocaleDateString();
                const location = excursion.get("location");
                const description = excursion.get("description");
                
                const excursionObject = {
                    id: excursionID,
                    excursionTitle: excursionTitle,
                    fromDate: fromDateString,
                    toDate: toDateString,
                    location: location,
                    description: description
                };
                excursionInfo = excursionObject;

            }
            
        } catch (error) {
            alert("FAILED to retrieve the Excursion entry entry. Error: " + error.message);
          }
    } 
    return excursionInfo
}

const fetchAllExcursionsFromDB = async () => {

  const query = new Parse.Query("Excursion");
  let excursions = await query.find();

  let excursionArr = []
  
  for (let i = 0; i < excursions.length; i++) { 
      try {
          const excursion = await query.get(excursions[i].id);
          console.log("iiiiid: ", excursion.id)
          const excursionTitle = excursion.get("excursionTitle");
          
          const excursionObject = {
              id: excursion.id,
              excursionTitle: excursionTitle,
          };
          excursionArr.push(excursionObject);
      } catch (error) {
          alert("FAILED to retrieve the Excursion entry entry. Error: " + error.message);
        }
  } 
  return excursionArr
}

const updateExcursion = async ({
    excursionTitle, dateFrom, dateTo, location, description}) => {
    
    const query = new Parse.Query("Excursion");
    console.log("excursion title: " + excursionTitle);
    console.log("date from: " + dateFrom);
    console.log("date to: " + dateTo);
    console.log("location: " + location);
    console.log("description: " + description);
    
    try {
      // here you put the objectId that you want to update
      const User = Parse.User.current();
      const queryUser = new Parse.Query("User");
      const user = await queryUser.get(User.id);
      const contactMember = await queryUser.get(user.id);
      const excursionID = contactMember.get("excursionID");

      console.log("inside try with clause")

      const object = await query.get(excursionID);
      object.set('excursionTitle', excursionTitle);
      object.set('fromDate', new Date(dateFrom));
      object.set('toDate', new Date(dateTo));
      object.set('location', location);
      object.set('description', description);
      try {
        const response = await object.save().then(()=>{
          alert("Info successfully updated");
      }, (error)=>{
          alert("failed to update with error-code : " + error);
      });
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        // Access the Parse Object attributes using the .GET method
        console.log(response.get('excursionTitle'));
        console.log(response.get('fromDate'));
        console.log(response.get('toDate'));
        console.log(response.get('location'));
        console.log(response.get('description'));
        console.log('Excursion updated', response);
      } catch (error) {
        console.error('Error while updating Excursion', error);
        }
      } catch (error) {
        console.error('Error while retrieving object Excursion', error);
      }
  }

const ExcursionAPI = {
  createExcursion,
  updateExcursion,
  fetchAllExcursionsFromDB,
  fetchExcursionFromDB};

export default ExcursionAPI