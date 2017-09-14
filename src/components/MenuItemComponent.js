import React from 'react';

export default function MenuItemComponent({ item, onAddItem }) {
  function handleClick(event) {
    event.preventDefault();
    onAddItem(item);
  }
  return (
    <div className="MenuItemComponent col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src={item.imagePath || 'N/a'} alt="N/a" />
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
          <a onClick={handleClick}>ADD TO ORDER</a>
        </div>
      </div>
    </div>
  );
}
