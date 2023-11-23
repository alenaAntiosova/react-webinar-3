import React from 'react';
import {createRoot} from 'react-dom/client';
import {createElement} from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    {code: 1, title: 'Название элемента ',sumSelectedItemArray: []},
    {code: 2, title: 'Некий объект ', sumSelectedItemArray: []},
    {code: 3, title: 'Заголовок ', sumSelectedItemArray: []},
    {code: 4, title: 'Очень длинное название элемента из семи слов ', sumSelectedItemArray: []},
    {code: 5, title: 'Запись ',sumSelectedItemArray: []},
    {code: 6, title: 'Шестая запись ',sumSelectedItemArray: []},
    {code: 7, title: 'Седьмая запись ',sumSelectedItemArray: []},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
