import React, { useState } from 'react'
import CartItem from '../cartitem/index';
import {formatPrice} from "../../utils";
import './style.css';


function Modal({ cartItem, getCart, toggleCart, getTotalPrice, getCartItemRemove }) {
   return (
     <div className="Modal">
       <div className='Modal-header'>
         <h2 className='Modal-title'>Корзина</h2>
         <div className='Modal-actions'>
           <button className='Modal-button' onClick={toggleCart}>Закрыть</button>
         </div>
       </div>
       <div>
         {getCart().map((cartItem) => (
           <CartItem
             key={cartItem.code}
             cartItem={cartItem}
             toggleCart={toggleCart}
             getTotalPrice={formatPrice(getTotalPrice)}
             count={getCart().length}
             getCartItemRemove={getCartItemRemove}
           />
         ))}
       </div>
       <div className='Modal-footer'>
         <p className='Modal-footer-text1'>Итого:</p>
         <p className='Modal-footer-text2'>{formatPrice(getTotalPrice())}</p>
       </div>
     </div>
   );
 }
 
 export default React.memo(Modal);
 