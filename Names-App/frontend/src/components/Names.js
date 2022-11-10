import React from 'react'
import './Names.css'

function Names() {
  return (
    <div className='orig'>
      <div>
        <h1>Our Form</h1>
        <form className='fom'>
          <div>
            <input type='text' placeholder='First Name' />
          </div>
          <div>
            <input type='text' placeholder='Second Name' />
          </div>
          <div>
            <input type='email' placeholder='Email' />
          </div>
          <div>
            <input type='number' placeholder='Phone Number' />
          </div>
          <div>
            <input type='text' placeholder='Location:' />
          </div>
          <div>
            <button>Click Me</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Names
