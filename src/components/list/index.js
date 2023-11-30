import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, onAddToCart }) {
  return (
    <div className='List'>
      {list.map(item => (
        <Item key={item.code} item={item} onAddToCart={() => onAddToCart(item)} />
      ))}
    </div>
  );

  List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.number
    })).isRequired,
    // onDeleteItem: PropTypes.func,
    // onSelectItem: PropTypes.func
  };
}

export default React.memo(List);
