import React from 'react';
import {createElement} from './utils.js';
import List from './components/list/index.js';
import Head from './components/head/index.js';
import Cart from './components/cart/index.js';
import Controls from './components/controls/index.js';
import PageLayout from './components/page-layout/index.js'
import './styles.css';
import { useState } from 'react';
import { useCallback } from 'react';


/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [cartCount, setCartCount] = useState(0);
  const list = store.getState().list;
  const cart = store.getState().cart;
  
  const onAddToCart = useCallback((item) => {
    store.addToCart(item);
  }, [store]);

  const getCart = () => {
    return store.getCart();
  };

  const getTotalPrice = () => {
    return store.getTotalPrice();
  };


  return (
    <PageLayout>
      <Head />
      <Cart cart ={cart} getCart={getCart} getTotalPrice={getTotalPrice} />
      <List list={list} onAddToCart={onAddToCart} />
    </PageLayout>
  );
}

export default App;
