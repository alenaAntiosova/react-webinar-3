import React, { useState } from 'react'
import './style.css';

function CartItem({cartItem }) {
   return (
     <div className='CartItem'>
      <div className='CartItem-header'>
        <h2 className='CartItem-title'>Корзина</h2>
      </div>
      <div className='CartItem-wrapper'>
       <div className='CartItem-code'>{cartItem.code}</div>
       <div className='CartItem-title'>{cartItem.title}</div>
       <span className='CartItem-price'>{cartItem.price}</span>
       <span className='CartItem-quantity'>Количество: {cartItem.quantity}</span>
       <div className='CartItem-actions'>
         <button onClick={() => onRemoveFromCart(cartItem.code)}>Удалить</button>
       </div>
      </div>
     </div>
   ); 
}
export default React.memo(CartItem);
 