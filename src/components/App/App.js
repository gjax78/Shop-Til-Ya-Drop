import React, { useEffect, useState } from 'react';
import './App.css';
// import fetchData from '../../apiCalls';
import data from '../../util/data';
import Items from '../Items/Items'
import Header from '../Header/Header';
import Form from '../Form/Form';
import Form2 from '../Form2/Form2'
import Submissions from '../Submissions/Submissions';

const App = () => {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')
  const [submissions, setSubmissions] = useState([])

  const fetchStoreItems = () => {
    // fetchData.getEcommerceData()
    // .then()
    setItems(data)
  }

  useEffect(() => {
    fetchStoreItems()
  }, [])

  const filteredItems = items.filter(item => item.category === filter.toLowerCase() || filter === '' ? item : null)

  const updateSubmissions = (newSubmission) => {
    setSubmissions([...submissions, newSubmission])
  }

  return (
    <main className="App">
      <Header />
      <div className='form-thing'>
        <div className='form-section'>
          <Form2 updateSubmissions={updateSubmissions}/>
        </div>
        <div className='submissions-section'>
         <Submissions submissions={submissions} />
        </div>
      </div>
      <div className='section'>
        <Form filter={filter} setFilter={setFilter}/>
        <Items items={filteredItems}/>
      </div>
    </main>
  )
}

export default App;
