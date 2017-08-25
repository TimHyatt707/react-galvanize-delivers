import React from 'react';

import MenuItemComponent from './MenuItemComponent';

export default function OrderTableComponent({ items }) {
  let subtotal = 0;
  let tax = 0;
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price;
    tax += 0.1;
    total += items[i].price + 0.1;
  }

  return (
    <div className="OrderTableComponent">
      <h5>Order</h5>
      <table className="striped">
        <thead>
          <th>Item</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr className="tableRows" />
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

{
  /* <td>
  {items[0].name || 'Undefined'}
</td>
<td className="right-align">
  {items[0].price ? '$' + items[0].price.toFixed(2) : 'Undefined'}
</td>
</tr>
<tr className="tableRows">
<td>
  {items[1].name || 'Undefined'}
</td>
<td className="right-align">
  {items[1].price ? '$' + items[1].price.toFixed(2) : 'Undefined'}
</td>
</tr>
<tr className="tableRows">
<td>
  {items[2].name || 'Undefined'}
</td>
<td className="right-align">
  {items[2].price ? '$' + items[2].price.toFixed(2) : 'Undefined'}
</td>
</tr>
<tr className="tableRows">
<td>
  {items[3].name || 'Undefined'}
</td>
<td className="right-align">
  {items[3].price ? '$' + items[3].price.toFixed(2) : 'Undefined'}
</td> */
}
