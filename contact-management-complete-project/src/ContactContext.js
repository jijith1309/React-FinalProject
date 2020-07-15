import React, { createContext, useState, useEffect } from 'react'

// import data from './contact'
import axios from "axios";

// import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";


const BASE_API='http://localhost:8080'
const ContactContext1 = createContext();
export const useContactContext = () => useContext(ContactContext1);
const ContactContext = (props) => {

	const [contacts, updateContacts] = useState([]);

    useEffect(() => {
		
		console.log('useEffect has been called!');
		axios.get(`${BASE_API}/contact/`).then((res) => {
			
			updateContacts(res.data);
		});
    }, []);
	
	
	
    const deleteContact = (contactid) => {
		axios.delete(`${BASE_API}/contact/${contactid}`).then(() => {
			axios
				.get(`${BASE_API}/contact/`)
				.then((res) => {
					updateContacts(res.data);
				})
				.catch((error) => {
					console.error(error);
					alert("Something went wrong!");
				});
		});
	};


    const addContact = (name, email,phone) => {
		const contact = {
			name,
			email,
		    phone,
		};

		axios
			.post(`${BASE_API}/contact/`, contact)
			.then((res) => {
				const newContact = res.data;
				const newContacts = [...contacts, newContact];
				updateContacts(newContacts);
			})
			.catch((error) => {
				console.error(error);
				alert("Something went wrong!");
			});
	};

	const editContact = (contactid,name, email,phone) => {
		debugger
		console.log('edit contact:'+props.name)
		const contact = {
			name,
			email,
		    phone,
		};

		axios
			.put(`${BASE_API}/contact/${contactid}`, contact)
			.then((res) => {
				axios.get(`${BASE_API}/contact/`).then((res) => {
			
					updateContacts(res.data);
				});
				
			})
			.catch((error) => {
				console.error(error);
				alert("Something went wrong!");
			});
	};

    // const addContact = (name, email) => {
    //     const newContact = {
    //         id: uuidv4(),
    //         name,
    //         email
    //     }
    //     const newContactArr = [...contacts, newContact]
    //     updateContacts(newContactArr);
    // }

    // const deleteContact = (id) => {
    //     const newContacts = contacts.filter((contact) => contact.id !== id);
    //     updateContacts(newContacts);
    // };

    return (
        <ContactContext1.Provider value={{ contacts, deleteContact, addContact,editContact }}>
            {props.children}
        </ContactContext1.Provider>
    );
}

export default ContactContext;