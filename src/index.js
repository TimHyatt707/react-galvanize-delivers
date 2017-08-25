import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPageLayout from './components/OrderPageLayout';
import MenuComponent from './components/MenuComponent.js';
import OrderFormComponent from './components/OrderFormComponent';
import OrderTableComponent from './components/OrderTableComponent';
import OrderPage from './components/OrderPage';

function onAddItem(itemId) {
  console.log('this is the log', itemId);
}

ReactDOM.render(
  <OrderPage onAddItem={onAddItem} />,
  document.getElementById('root')
);
