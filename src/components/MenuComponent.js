import React from 'react';

import MenuItemComponent from './MenuItemComponent';

export default function MenuComponent({ items }) {
  return (
    <div className="MenuComponent container">
      {items.map(item => <MenuItemComponent key={item.id} item={item} />)}
    </div>
  );
}
