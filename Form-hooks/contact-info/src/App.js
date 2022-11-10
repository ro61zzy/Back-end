import React, { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([])

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo])
  }
  console.log(contacts)

  return (
    <div className='App'>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
