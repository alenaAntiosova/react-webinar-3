import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Head() {
  return (
    <div className='Head'>
      <h1>Магазин</h1>
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
};

export default React.memo(Head);
