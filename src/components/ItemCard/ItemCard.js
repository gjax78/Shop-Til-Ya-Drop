import React, {useState} from "react";
import './ItemCard.css'

const ItemCard = ({title, image, price, description, rating}) => {
  const [isAdded, setIsAdded] = useState(false)

  const addItemToCart = () => {
    
  }

  return (
    <div className="item-card">
      <h1 className='title'>{title}</h1>
      <img src={image} alt='item' className="image"/>
      <h3 className="price">${price.toFixed(2)}</h3>
      {/* <h3 className="description">{description}</h3> */}
      {/* <h3 className="rating">{rating}</h3> */}
      <button className='add-to-cart' onClick={addItemToCart}>{isAdded ? 'Added!' : 'Add to cart'}</button>
    </div>
  )
}

export default ItemCard;