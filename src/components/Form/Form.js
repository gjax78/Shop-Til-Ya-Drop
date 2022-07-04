import React from "react";
import './Form.css'

const Form = ({filter, setFilter}) => {

  const handleChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  const clearForm = () => {
    setFilter(' ')
  }

  return (
    <form className='form'>
      <select onChange={(event) => handleChange(event)} value={filter} className='dropdown'>
        <option value='' disabled>Select an option</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value='Electronics'>Electronics</option>
        <option value='Jewelery'>Jewelery</option>
      </select>

      <input
        type='text'
        className='search'
        placeholder='Search through items...'
        value={filter}
        onChange={event => handleChange(event)}
      />

      <button onClick={clearForm} className='reset-form'>Reset Form</button>
    </form>
  )
}

export default Form