import React from "react";
import 'font-awesome/css/font-awesome.min.css';

import {useContactContext} from  './ContactContext';
 import { useHistory }  from "react-router-dom";
// export const ConstList=({contacts})=>{
//   let contact1=contacts;
//   const deleteAllcontact= () => {
//     alert('Work in progress');
//     contact1=[];
//   }
//}

// const ContactList = ({ contacts }) => {
//   return (
//     <table className="contacts-table">
//       <tbody>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Actions</th>
//         </tr>
//         {contact1.map((contact, i) => (
//           <tr key={i}>
//             <td>{contact.name}</td>
//             <td>{contact.email}</td>
//             <td onClick={deleteAllcontact}>CLear contacts</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };


const ContactList = (props) => {
  // let contact1 = contacts;
  // const deleteAllContact = () => {
  //   alert("Work In Progress");
  //   contact1 = [];

  // }
  const useHis=useHistory();
  // const {contacts,deleteContact}=props;
 const loadEditContactPage=(contact_toEdit)=>
  {
    debugger
    useHis.push('/edit/'+contact_toEdit);
  }

  const { contacts, deleteContact } =useContactContext();
  return (
    <>
    <table className="contacts-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
        {contacts.map((contact, i) => (
          <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td onClick={() => { loadEditContactPage(contact.id) }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
            <td onClick={() => { deleteContact(contact.id) }}><i class="fa fa-trash-o" aria-hidden="true"></i></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};



export default ContactList;
