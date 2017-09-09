import React from 'react';
// import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import MenuItemComponent from './../components/MenuItemComponent';

const item = {
  name: 'Some Item A',
  price: 9.99,
  imagePath: '//via.placeholder.com/300x200'
};

function handleClick(event) {
  event.preventDefault();
  onAddItem(item.id);
}

const wrapper = shallow(<MenuItemComponent item={item} />);

describe('Should render MenuItemComponent, name, price, and onAddItem', () => {
  const fullWrapper = mount(<MenuItemComponent item={item} />);
  const onAddItem = jest.fn();
  it('renders div component', () => {
    expect(wrapper.find('div')).toHaveLength(5);
  });
  it('renders item name', () => {
    expect(fullWrapper.props().item.name).toBe(item.name);
  });
  it('renders item price', () => {
    expect(fullWrapper.props().item.price).toBe(item.price);
  });
  it('should test if onAddItem function was fired', () => {
    const onAddItem = jest.fn();

    mount(<MenuItemComponent onAddItem={onAddItem} item={item} />)
      .find('a')
      .simulate('click');
    expect(onAddItem).toBeCalled();
  });
});
