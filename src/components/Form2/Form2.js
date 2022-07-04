import React, { useState } from "react";
import './Form2.css'

const Form2 = ({ updateSubmissions }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newSubmission = {
      id: Date.now(),
      name: name, 
      email: email, 
      address: address, 
      age: age
    } 
    updateSubmissions(newSubmission)
  }

  return (
    <form className='input-form'>
      <label htmlFor="name-input" className='name-title'>Name:</label>
      <input
        type='text'
        className='name-input'
        id='name-input'
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label htmlFor="email-input">Email:</label>
      <input
        type='text'
        className='email-input'
        id='email-input'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="address-input">Address:</label>
      <input
        type='text'
        className='address-input'
        id='address-input'
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <label htmlFor="age-input">Age:</label>
      <input
        type='number'
        className='age-input'
        id='age-input'
        value={age}
        onChange={e => setAge(e.target.value)}
      />

      <button
      type='submit'
      className='submit'
      onClick={e => handleSubmit(e)}
      >SUBMIT</button>
    </form>
  )
}

export default Form2