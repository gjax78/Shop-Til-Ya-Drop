import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import './Items.css'

const Items = ({items}) => {
  const shoppingItems = items.map(item => {
    return (
      <div key={item.id}>
        <ItemCard
          title={item.title}
          image={item.image}
          price={item.price}
          description={item.description}
          rating={item.rating.rate}
        />
      </div>
    )
  })

  return (
    <div className='item-container'>
      {shoppingItems}
    </div>
  )
}

export default Items;