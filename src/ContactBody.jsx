import './App.css'

function ContactBody(FirstName, LastName,EmailAddress,PhoneNumber) {
  return (
    <div>
        const Contacts =[ {FirstName}, {LastName},{EmailAddress},{PhoneNumber}]

       <div className="contact-controls">
        <button>Delete</button>
        <button>Block</button>

       </div>
        
    </div>
  )
}

export default ContactBody