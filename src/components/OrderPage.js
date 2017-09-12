import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent.js';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';

export default function OrderPage({
  menuItems,
  orderItems,
  onAddItem,
  onSubmitOrderForm,
  onCloseOrderSuccessMessage,
  customerInfo
}) {
  if (customerInfo) {
    return (
      <OrderPageLayout>
        <MenuComponent items={menuItems} onAddItem={onAddItem} />
        <OrderTableComponent items={orderItems} />
        <OrderSuccessMessageComponent
          onCloseOrderSuccessMessage={onCloseOrderSuccessMessage}
          customerInfo={customerInfo}
        />
      </OrderPageLayout>
    );
  } else {
    return (
      <OrderPageLayout>
        <MenuComponent items={menuItems} onAddItem={onAddItem} />
        <OrderTableComponent items={orderItems} />
        <OrderFormComponent onSubmit={onSubmitOrderForm} />
      </OrderPageLayout>
    );
  }
}
