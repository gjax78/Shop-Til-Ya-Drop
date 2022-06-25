import React from "react";

const Form = ({filter, setFilter}) => {

  const handleChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  const clearForm = () => {
    setFilter(' ')
  }

  return (
    <form>
      <select onChange={(event) => handleChange(event)} value={filter}>
        <option value='' disabled>Select an option</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value='Electronics'>Electronics</option>
        <option value='Jewelery'>Jewelery</option>
      </select>

      <button onClick={clearForm}>Reset Form</button>
    </form>
  )
}

export default Form