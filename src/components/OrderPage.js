import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent.js';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';

export default function OrderPage({ onAddItem }) {
  console.log('order page', onAddItem);
  return (
    <OrderPageLayout>
      <MenuComponent
        items={[
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
        ]}
        onAddItem={onAddItem}
      />
      <OrderTableComponent
        items={[
          {
            id: 101,
            name: 'Some Item A',
            price: 9.99
          },
          {
            id: 102,
            name: 'Some Item B',
            price: 8.99
          },
          {
            id: 103,
            name: 'Some Item C',
            price: 7.99
          },
          {
            id: 104,
            name: 'Some Item D',
            price: 11.99
          }
        ]}
      />
      <OrderFormComponent
        defaultCustomerInfo={{
          name: 'Timothy Hyatt',
          phone: '(707)501-7418',
          address: '1701 Wise Drive'
        }}
      />
    </OrderPageLayout>
  );
}
