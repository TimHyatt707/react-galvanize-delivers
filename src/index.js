import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import OrderPageLayout from './components/OrderPageLayout';
// import MenuComponent from './components/MenuComponent.js';
// import OrderFormComponent from './components/OrderFormComponent';
// import OrderTableComponent from './components/OrderTableComponent';
import OrderPage from './components/OrderPage';

let idCounter = 1000;

const menuItems = [
  {
    id: 101,
    name: 'Some Item A',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 102,
    name: 'Some Item B',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 103,
    name: 'Some Item C',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 104,
    name: 'Some Item D',
    price: 11.99,
    imagePath: '//via.placeholder.com/300x200'
  }
];

const orderItems = [];

function onAddItem(itemId) {
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].id === itemId) {
      orderItems.push(menuItems[i]);
      orderItems[orderItems.length - 1].key = idCounter;
      idCounter++;
      ReactDOM.render(
        <OrderPage
          menuItems={menuItems}
          onAddItem={onAddItem}
          orderItems={orderItems}
        />,
        document.getElementById('root')
      );
    }
  }
}

ReactDOM.render(
  <OrderPage
    menuItems={menuItems}
    onAddItem={onAddItem}
    orderItems={orderItems}
  />,
  document.getElementById('root')
);
