import React, { useEffect, useState } from 'react';
import './App.css';
// import fetchData from '../../apiCalls';
import data from '../../util/data';
import Items from '../Items/Items'
import Header from '../Header/Header';
import Form from '../Form/Form';

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
      <Form filter={filter} setFilter={setFilter}/>
      <Items items={filteredItems}/>
    </main>
  )
}

export default App;
