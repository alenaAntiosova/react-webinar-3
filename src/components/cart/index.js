import React, { useState } from 'react'
import './style.css';
import PropTypes from "prop-types";
import CartItem from '../cartitem/index';



function Cart({ cart, getTotalPrice, getCart }) {
  const [openCart, setOpenCart] = useState(false);
  const body = document.querySelector('body')


  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  if (openCart===true) {
    body.classList.add('black')
  }


  return (
    <div className='Cart'>
      <h2 className='Cart-title' onClick={toggleCart}>
        В корзине:</h2>
        <p className='Cart-count'>{getCart().length} товаров <span> /</span></p>
        <p className='Cart-price'>{getTotalPrice()} руб</p>
        <button className='Cart-button' onClick={toggleCart}>Перейти</button>
      {openCart && (
        <div>
          {getCart().map((cartItem) => (
            <CartItem key={cartItem.code} cartItem={cartItem} toggleCart={toggleCart} getTotalPrice={getTotalPrice}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(Cart);
