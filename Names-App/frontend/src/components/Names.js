import React from 'react'
import './Names.css'

function Names() {
  return (
    <div>
      <div className='side'></div>
      <div className='form'>
        <h1>Enter Details:</h1>
        <form>
          <div className='inputfield'>
            <input type='text' placeholder='First Name' />
          </div>
          <div className='inputfield'>
            <input type='text' placeholder='Second Name' />
          </div>
          <div className='inputfield'>
            <input type='email' placeholder='Email' />
          </div>
          <div className='inputfield'>
            <input type='number' placeholder='Phone Number' />
          </div>
          <div className='inputfield'>
            <input type='text' placeholder='Location:' />
          </div>
          <div>
            <button className='button'>Click Me</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Names
