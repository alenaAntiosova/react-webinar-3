import React, {useState} from "react";
import PropTypes from "prop-types";
// import {plural} from "../../utils";
import './style.css';
import Controls from "../controls";

function Item({ item, onAddToCart }) {
  return (
    <div className='Item'>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>{item.title}</div>
      <span className='Item-price'>{item.price}₽</span>
      <div className='Item-actions'>
        <button className="Item-button" onClick={onAddToCart}>Добавить</button>
      </div>
    </div>
  );
  Item.propTypes = {
    item: PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    // onDelete: PropTypes.func,
    // onSelect: PropTypes.func
  };
  
}


export default React.memo(Item);
