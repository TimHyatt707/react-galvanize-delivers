import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';

import './OrderFormComponent.story.css';

storiesOf('OrderFormComponent', module).add('Happy path', () =>
  <OrderFormComponent
    defaultCustomerInfo={{
      name: 'Timothy Hyatt',
      phone: '(707)501-7418',
      address: '1701 Wise Drive'
    }}
  />
);
