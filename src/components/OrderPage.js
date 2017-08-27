import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent.js';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';

export default function OrderPage({ menuItems, orderItems, onAddItem }) {
  return (
    <OrderPageLayout>
      <MenuComponent items={menuItems} onAddItem={onAddItem} />
      <OrderTableComponent items={orderItems} />
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
