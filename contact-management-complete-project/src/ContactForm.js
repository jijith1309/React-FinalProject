import React  from 'react'
// import React,{useState}  from 'react'
import './ContactForm.css';
import { useInput } from "./hook";

import {useContactContext} from  './ContactContext'
import { useHistory }  from "react-router-dom";

const ContactForm = (props) => {

  const [name, onChangeHandlerForName, resetName] = useInput("");
  const [email, onChangeHandlerForEmail, resetEmail] = useInput("");
  const [phone, onChangeHandlerForPhone, resetPhone] = useInput("");

  const { addContact } = useContactContext();
    // const name_state=useState("");
    // const name=name_state[0];
    // const setName=name_state[1];

    // const email_state=useState("");
    // const email=email_state[0];
    // const setEmail=email_state[1];
    

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
  
    const useHis=useHistory();
    const submit = (event) => {
      event.preventDefault();
    //   addContact(name, email);
    //   setName("");
    //   setEmail("");
    console.log('Name:'+name);
    console.log('Eamil:'+email);
    // props.addContact(name,email)
      // setName("");
      // setEmail("");
      addContact(name, email,phone);
      resetName();
      resetEmail();
      resetPhone();
      useHis.push('/');
    };
  
    return (
      <form onSubmit={submit} className="contact-form">
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
  
  export default ContactForm;