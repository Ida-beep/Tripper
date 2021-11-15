import React from 'react';
import { Parse } from 'parse';

function AddContactPerson(){
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [age,setAge] = useState(0);
    const [mobile,setMobile]=useState();
    const [workPhone,setWorkPhone]=useState();
    const [phone,setphone]=useState();
    const [street,setStreet]=useState();
    const [zip,setZip]=useState();
    const [email,setEmail]=useState();
    const [carSeat,setCarseat]=useState();
    const [duties,setDuties]=useState([]);
    const [active,setActive] = useState(true);
    const FamilyMember = Parse.Object.extend("familyMember");
}

export default AddContactPerson;