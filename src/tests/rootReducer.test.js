import React from 'react';
import { shallow, mount } from 'enzyme';

import rootReducer from './../redux/reducers/rootReducer';

let item = {
  id: 101,
  name: 'Some Item A',
  price: 9.99,
  imagePath: '//via.placeholder.com/300x200'
};

let data = [
  {
    id: 101,
    name: 'Some Item A',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 101,
    name: 'Some Item B',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 101,
    name: 'Some Item C',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  }
];

let customerInfo = {
  name: 'Bill',
  address: '123 Blood Street',
  phone: '5555555'
};

let newState = rootReducer(undefined, {});
const initialState = {
  menuItems: null,
  customerInfo: null,
  orderItems: [],
  idCounter: 0
};
const initialStateCustomerInfo = {
  menuItems: null,
  customerInfo: customerInfo,
  orderItems: [],
  idCounter: 0
};

describe('test reducer', () => {
  it('should return the initial state', () =>
    expect(newState).toEqual({
      menuItems: null,
      customerInfo: null,
      orderItems: [],
      idCounter: 0
    }));

  it('should handle ADD_ITEM', () => {
    expect(rootReducer(initialState, { type: 'ADD_ITEM', item })).toEqual({
      menuItems: null,
      customerInfo: null,
      orderItems: [
        {
          id: 101,
          name: 'Some Item A',
          price: 9.99,
          imagePath: '//via.placeholder.com/300x200'
        }
      ],
      idCounter: 0
    });
  });
  it('should handle SET_ITEMS', () => {
    expect(rootReducer(initialState, { type: 'SET_ITEMS', data })).toEqual({
      menuItems: data,
      customerInfo: null,
      orderItems: [],
      idCounter: 0
    });
  });
  it('should handle SUBMIT_FORM', () => {
    expect(
      rootReducer(initialState, { type: 'SUBMIT_FORM', customerInfo })
    ).toEqual({
      menuItems: null,
      customerInfo: customerInfo,
      orderItems: [],
      idCounter: 0
    });
  });
  it('should handle CLOSE_FORM', () => {
    expect(
      rootReducer(initialStateCustomerInfo, { type: 'CLOSE_FORM' })
    ).toEqual({
      menuItems: null,
      customerInfo: null,
      orderItems: [],
      idCounter: 0
    });
  });
  it('should handle reference error', () =>
    expect(rootReducer(initialState, { type: 'LAMBO MERCY' })).toEqual({
      menuItems: null,
      customerInfo: null,
      orderItems: [],
      idCounter: 0
    }));
});
