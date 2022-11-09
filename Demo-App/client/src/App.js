import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState('')

  fetch('http://localhost:9000/testAPI/')
    .then((res) => res.json())
    .then((data) => setMessage(data.message))

  return (
    <>
      <h1>Here is API:</h1>
      <p>{message}</p>
    </>
  )
}

export default App
