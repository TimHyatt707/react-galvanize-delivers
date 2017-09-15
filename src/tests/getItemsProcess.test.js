import React from 'react';
import { shallow, mount } from 'enzyme';

let data = [
  {
    id: 1001,
    name: 'Royale with Cheese',
    price: 8.99,
    imagePath: 'img/burger.jpg'
  },
  {
    id: 1002,
    name: 'Arugula Pie',
    price: 11.99,
    imagePath: 'img/pizza.jpg'
  },
  {
    id: 1003,
    name: 'Smoked Swine',
    price: 14.99,
    imagePath: 'img/ribs.jpg'
  },
  {
    id: 1004,
    name: 'Ice Cream Biscut',
    price: 7.99,
    imagePath: 'img/ice_cream.jpg'
  },
  {
    id: 1005,
    name: 'Banh Mi',
    price: 9.99,
    imagePath: 'img/banh_mi.jpg'
  }
];

import getItemsProcess from './../redux/thunks/getItemsProcess';
import getMenuItems from './../api/getMenuItems';
jest.mock('./../api/getMenuItems');

describe('getItemsProcess should call the API, get correct data, and dispatch', () => {
  it('calls API,return data, dispatch', () => {
    const thunk = getItemsProcess();
    expect(typeof thunk).toBe('function');

    const dispatch = jest.fn();
    const getState = () => ({});
    getMenuItems.mockReturnValueOnce(Promise.resolve([...data]));
    return thunk(dispatch, getState).then(items => {
      expect(getMenuItems).toBeCalled();
      expect(items).toEqual([...data]);
      expect(dispatch).toBeCalledWith({
        type: 'SET_ITEMS',
        data: items
      });
    });
  });
});
