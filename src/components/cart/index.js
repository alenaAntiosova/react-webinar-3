import React, { useState } from 'react'
import './style.css';
import PropTypes from "prop-types";
import Modal from '../modal/index';

function Cart({ getTotalPrice, getCart, getCartItemRemove }) {
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const pageLayout = document.querySelector('.PageLayout');
  

  if (openCart === true) {
    if (pageLayout) {
      pageLayout.classList.add('Overlay');
    }
  } else {
    if (pageLayout) {
      pageLayout.classList.remove('Overlay');
    }
  }

  return (
    <div className='Cart'>
      <h2 className='Cart-title' onClick={toggleCart}>
        В корзине:
      </h2>
      <p className='Cart-count'>
        {getCart().length === 0 ? "пусто" : `${getCart().length} товар${getCart().length === 1 ? '' : 'ов'}`}
      </p>
      <p className='Cart-price'>
        {getTotalPrice() === 0 ? "" : `${getTotalPrice()} руб`}
      </p>
      <button className='Cart-button' onClick={toggleCart}>Перейти</button>
      {openCart && (
        <Modal getCart={getCart} toggleCart={toggleCart} getCartItemRemove={getCartItemRemove} getTotalPrice={getTotalPrice} />
      )}
    </div>
  );
}

export default React.memo(Cart);
