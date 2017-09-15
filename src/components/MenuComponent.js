import React from 'react';

import MenuItemComponent from './MenuItemComponent';

export default function MenuComponent({ items, onAddItem }) {
  if (items === null || undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="MenuComponent row center-align">
      {items.map(item =>
        <MenuItemComponent key={item.id} item={item} onAddItem={onAddItem} />
      )}
    </div>
  );
}
