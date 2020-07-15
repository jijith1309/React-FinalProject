import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import ContactList from './ContactList'

import ContactForm from './ContactForm'
import ContactEditForm from './ContactEditForm'

import ContactContext from  './ContactContext'




// export const ContactContext = createContext();

function App() {
  // const contact_state=useState(data);
  // const contacts=contact_state[0];
  // const updateContacts=contact_state[1];

  // const addContact=(name,email)=>{
  //  const newContact={
  //    id:uuidv4(),
  //    name,
  //    email
  //  }
  //  const newContactArr=[...contacts,newContact]
  //  updateContacts(newContactArr);
  // }

  // const deleteContact = (id) => {
  //   const newContacts = contacts.filter((contact) => contact.id !== id);
  //   updateContacts(newContacts);
  // };

  return (
    // <div >
    //   <h1>Hello Day 5 react training</h1>
    // </div>
    // <ContactContext.Provider value={{ contacts, deleteContact,addContact }}>
    // <section id="contact-list">
    //   <h1>Contacts</h1>
    //   <ContactForm addContact={addContact}></ContactForm>
    //   <ContactList contacts={contacts} deleteContact={deleteContact}>

    //   </ContactList>

    // </section>
    // </ContactContext.Provider>

// <ContactContext >
 
// <section id="contact-list">
//   <h1>Contacts</h1>
//   <ContactForm ></ContactForm>
//   <ContactList >

//   </ContactList>

// </section>
// </ContactContext>

<ContactContext>
   

<Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/add">ADD CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Switch>
      <Route path="/add">
       <ContactForm></ContactForm>
      </Route>
      <Route exact path="/edit/:id" component={ContactEditForm}>
        {/* <ContactEditForm></ContactEditForm> */}
      </Route>
      <Route path="/">
        <ContactList></ContactList>
      </Route>
    </Switch>
  </Router>
</ContactContext>


  );
}

export default App;
