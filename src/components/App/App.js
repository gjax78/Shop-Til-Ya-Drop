import React, { useEffect, useState } from 'react';
import './App.css';
// import fetchData from '../../apiCalls';
import data from '../../util/data';
import Items from '../Items/Items'
import Header from '../Header/Header';
import Form from '../Form/Form';
import Form2 from '../Form2/Form2'

const App = () => {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')

  const fetchStoreItems = () => {
    // fetchData.getEcommerceData()
    // .then()
    setItems(data)
  }

  useEffect(() => {
    fetchStoreItems()
  }, [])

  const filteredItems = items.filter(item => item.category === filter.toLowerCase() || filter === '' ? item : null)

  return (
    <main className="App">
      <Header />
      <div className='form-section'>
        <Form2 />
      </div>
      <div className='section'>
        <Form filter={filter} setFilter={setFilter}/>
        <Items items={filteredItems}/>
      </div>
    </main>
  )
}

export default App;
