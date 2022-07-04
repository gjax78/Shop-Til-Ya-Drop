import React from "react";
import './Form2.css'

const Form2 = () => {
  return (
    <form classname='input-form'>
      <label htmlFor="name-input" className='name-title'>Name:</label>
      <input
        type='text'
        className='name-input'
        id='name-input'
      />

      <label htmlFor="email-input">Email:</label>
      <input
        type='text'
        className='email-input'
        id='email-input'
      />

      <label htmlFor="address-input">Address:</label>
      <input
        type='text'
        className='address-input'
        id='address-input'
      />

      <label htmlFor="age-input">Age:</label>
      <input
        type='number'
        className='age-input'
        id='age-input'
      />

      <button type='submit' className='submit'>SUBMIT</button>
    </form>
  )
}

export default Form2