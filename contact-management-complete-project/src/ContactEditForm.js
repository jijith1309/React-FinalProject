import React from "react";
// import React,{useState}  from 'react'
import './ContactForm.css';
import { useInput } from "./hook";

import {useContactContext} from  './ContactContext'
import { useHistory }  from "react-router-dom";

const ContactEditForm = (props) => {
    debugger
     let contactId =props.match.params.id;
    const { contacts,editContact } = useContactContext();
    let selectedContact=contacts.filter(el=>el.id===contactId);

  const [name, onChangeHandlerForName] = useInput(selectedContact[0].name);
  const [email, onChangeHandlerForEmail] = useInput(selectedContact[0].email);
  const [phone, onChangeHandlerForPhone] = useInput(selectedContact[0].phone);

  
    const useHis=useHistory();
   const submit = (event) => {
      event.preventDefault();
   
    console.log('Name:'+name);
    console.log('Eamil:'+email);
  
    editContact(contactId,name, email,phone);
      // resetName();
      // resetEmail();
      // resetPhone();
      useHis.push('/');
    };
  
    return (
      <form onSubmit={submit} className="contact-form">
           <input hidden
          id="contactId"
          value={contactId}
          />
        <label htmlFor="name">Name:</label>
        <br></br>
        <input
          id="name"
          value={name}
          onChange={onChangeHandlerForName}
          type="text"
          placeholder="name..."
          required
        />
        <br></br>
        <label htmlFor="email">Email:</label>
        <br></br>
        <input
          id="email"
          value={email}
          onChange={onChangeHandlerForEmail}
          type="text"
          placeholder="email..."
          required
        />
         <br></br>
        <label htmlFor="phone">Phone:</label>
        <br></br>
        <input
          id="phone"
          value={phone}
          onChange={onChangeHandlerForPhone}
          type="text"
          placeholder="phone..."
          required
        />
        <button className="add-button">
          Add
        </button>
      </form>
    );
  };
  
  export default ContactEditForm;