import React, { useState } from 'react'

function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    //this are the state properties
    name: '',
    email: '',
    phonenumber: '',
  })
  //now create an onChange event listener to help react detect changes in the form
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault()
    console.log(contactInfo)
    setContactInfo({ name: ' ', email: ' ', phonenumber: ' ' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={contactInfo.name}
          />
        </div>
        <div>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={contactInfo.email}
          />
        </div>
        <div>
          <input
            type='number'
            name='phonenumber'
            placeholder='Phone Number'
            value={contactInfo.phonenumber}
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
