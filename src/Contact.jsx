import  { useState } from 'react';
import useContactStore from './store/ContactStore';
import './App.css'

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { contacts, addContact, updateContact, deleteContact, disableContact } = useContactStore();

  const handleAddContact = () => {
    addContact({ firstName, lastName, email, phoneNumber, disabled: false });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Book</h2>
      <form action="">
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email"placeholder="Email Address eg john@gmail.com" />
        <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
      </form>

      <div className="button-area">
        <button className='submit-button' onClick={handleAddContact}>Add Contact</button>
        
      </div>

      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div key={index} className={`contact-item ${contact.disabled ? 'disabled' : ''}`}>
          <p>First Name: <span>{contact.firstName}</span></p>
          <p>Last Name: <span>{contact.lastName}</span></p>
          <p>Contact- email: <span>{contact.email}</span></p>
          <p>Phone Number: <span>{contact.phoneNumber}</span></p>
         <div className="button-contacts">
         <button className="buttons"onClick={() => updateContact(index, { ...contact, firstName: 'Updated' })}>Update</button>
          <button className="buttons" onClick={() => deleteContact(index)}>Delete</button>
          <button className="buttons" onClick={() => disableContact(index)}>Disable</button>
         </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
