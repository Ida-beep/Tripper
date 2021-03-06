import React, { useState, useEffect } from "react";
import LongCard from "../Cards/LongCard";
import Upload from "./Upload";
import ContactMemberAPI from "../API/ContactMemberAPI.js";

/**
 * Renders the contact member card.
 * */
function ContactMemberCard(props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [phone, setPhone] = useState();
  const [workPhone, setWorkPhone] = useState();
  const [address, setAddress] = useState();
  const [zip, setZip] = useState();
  const [city, setCity] = useState();

  async function fetchData() {
    ContactMemberAPI.fetchContactMemberFromDB().then((userObject) => {
      setFirstName(userObject.firstName);
      setLastName(userObject.lastName);
      setEmail(userObject.email);
      setMobile(userObject.mobilePhone);
      setPhone(userObject.phone);
      setWorkPhone(userObject.workPhone);
      setAddress(userObject.street);
      setZip(userObject.zip);
      setCity(userObject.city);
    });
  }

  /**Returns and sets contact member data 
   * to use state variables
   */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LongCard active={props.active}>
      <div className="contact-person-card">
        <div className="contact-member-image">
          <Upload className="contact-member-image" />
        </div>
        <div className="contact-member-info">
          <div className="contact-member-name">
            <h4 style={{ fontSize: "20px", color: "#1ea774" }}>
              {firstName + " " + lastName}
            </h4>
          </div>
          <div className="address-and-email">
            <p><b>Contact Information</b></p>
            <p>{address}</p>
            <p>{zip + " " + city}</p>
            <p>{email}</p>
          </div>
          <div className="mobile-info">
            <p>(Mobile) {mobile}</p>
            <p>(Phone) {phone}</p>
            <p>(Work) {workPhone}</p>
          </div>
        </div>
      </div>
      <div className="edit-button-container">
        <button className="button-primary-extra-small" onClick={props.active}>
          Edit
        </button>
      </div>
    </LongCard>
  ) 
}

export default ContactMemberCard;
