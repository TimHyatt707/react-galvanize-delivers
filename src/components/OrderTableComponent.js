import React from 'react';

export default function OrderTableComponent({ items }) {
  let subtotal = 0;
  let tax = 0;
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal += items[items.length - 1].price;
    tax += 0.1;
    total += items[items.length - 1].price + tax;
  }
  return (
    <div className="OrderTableComponent">
      <h5>Order</h5>
      <table className="striped">
        <thead>
          <tr>
            <td>Item</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr className="tableRows" />
          {items.map(item =>
            <tr key={item.id}>
              <td className="striped">
                {item.name}
              </td>
              <td className="striped">
                {item.price}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <section>
        Subtotal: {'$' + subtotal.toFixed(2)}
      </section>
      <section>
        Tax: {'$' + tax.toFixed(2)}
      </section>
      <section>
        Total: {'$' + total.toFixed(2)}
      </section>
    </div>
  );
}
