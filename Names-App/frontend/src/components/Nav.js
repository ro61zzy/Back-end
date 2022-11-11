import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <h1 className='scooby'>Scooby Doo Fans</h1>
      <a href='#view' className='view'>View</a>
      <line className='line' />
      <div ><button className='btn'>Sign In / Log In</button></div>
     
    </div>
  )
}

export default Nav
