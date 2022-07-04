import React from "react";
import cart from './assets/cart.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <h1 className='app-title'>Welcome to Ecommerce</h1>
      <div className="cart">
        <button className='shopping-cart'>
          <img src={cart} alt='shopping cart' className='cart-img'/>
        </button>
      </div>
    </div>
  )
}

export default Header;