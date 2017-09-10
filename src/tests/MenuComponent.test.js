import React from 'react';
import { shallow, mount } from 'enzyme';

import MenuComponent from './../components/MenuComponent.js';
import MenuItemComponent from './../components/MenuItemComponent.js';

const items = [
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

const shallowWrapper = shallow(<MenuComponent items={items} />);
// const MenuItemsWrapper = mount(<MenuComponent items={items}

describe('Verify items in array are same amount as MenuItemComponents and addOn callback is fired', () => {
  const onAddItem = jest.fn();
  it('MenuItemComponents should be same length as amount of items in array', () => {
    expect(mount(<MenuComponent items={items} />).children()).toHaveLength(
      items.length
    );
  });
  it('onAddItem should fire when add to order button is clicked', () => {
    mount(<MenuComponent items={items} onAddItem={onAddItem} />)
      .childAt(1)
      .find('a')
      .simulate('click');
    expect(onAddItem).toBeCalled();
  });
});
