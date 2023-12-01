import React, { useState } from 'react'
import './style.css';

function CartItem({ cartItem, count, toggleCart, getTotalPrice, getCartItemRemove }) {
  return (
    <div className='CartItem'>
      <p className='CartItem-code'>{cartItem.code}</p>
      <p className='CartItem-text'>{cartItem.title}</p>
      <span className='CartItem-price'>{cartItem.price}</span>
      <span className='CartItem-quantity'>{count} шт</span>
      <div className='CartItem-actions'>
        <button onClick={() => getCartItemRemove(cartItem.code)}>Удалить</button>
      </div>
    </div>
  );
}

export default React.memo(CartItem);
 