import React from "react";
import cart from './assets/cart.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to Ecommerce</h1>
      <img src={cart} alt='shopping cart' />
    </div>
  )
}

export default Header;