import React from 'react';

export default function MenuItemComponent({ item, onAddItem }) {
  // console.log('these are the props', props);
  console.log('these are the props', onAddItem);
  function handleClick(event) {
    event.preventDefault();
    onAddItem(item.id);
  }
  return (
    <div className="card MenuItemComponent">
      <div className="card-image">
        <img src={item.imagePath || 'N/a'} />
      </div>
      <div className="card-content">
        <h5 className="card-title">
          {item.name || 'N/A'}
        </h5>
        <p>
          {item.price ? '$' + item.price.toFixed(2) : 'N/A'}
        </p>
      </div>
      <div className="card-action">
        <a href="#" onClick={handleClick}>
          ADD TO ORDER
        </a>
      </div>
    </div>
  );
}
