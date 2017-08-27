import React from 'react';

import MenuItemComponent from './MenuItemComponent';

export default function MenuComponent({ items, onAddItem }) {
  return (
    <div className="MenuComponent row center-align">
      {items.map(item =>
        <MenuItemComponent key={item.id} item={item} onAddItem={onAddItem} />
      )}
    </div>
  );
}
