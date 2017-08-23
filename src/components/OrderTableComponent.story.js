import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';
import './OrderTableComponent.story.css';

storiesOf('OrderTableComponent', module).add('Happy path', () => {
  return (
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
  );
});
