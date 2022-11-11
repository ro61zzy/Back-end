import React from 'react'
import './Names.css'
import scooby from './img2.png'

function Names() {
  return (
    <div className='page'>
      <img src={scooby} alt='scooby' className='side'></img>
      <div>
        <h1>Enter Details:</h1>
        <form className='form'>
          <input type='text' className='inputfield' placeholder='First Name:' />
          <input
            type='text'
            className='inputfield'
            placeholder='Last Name:'
          />
          <input type='email' className='inputfield' placeholder='Email:' />
          <input
            type='number'
            className='inputfield'
            placeholder='Phone Number:'
          />
          <input type='text' className='inputfield' placeholder='Location:' />

          <button className='button'>Click Me</button>
        </form>
      </div>
    </div>
  )
}

export default Names
