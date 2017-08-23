import React from 'react';

export default function OrderFormComponent({ defaultCustomerInfo }) {
  return (
    <div className="OrderFormComponent">
      <form className="row">
        <div class="input-field">
          <i className="material-icons pink-text prefix">account_circle</i>
          <label for="name">Name</label>
          <input
            placeholder={defaultCustomerInfo.name || 'undefined'}
            id="name"
            type="text"
            className="validate"
          />
        </div>
      </form>
      <form className="row">
        <div class="input-field">
          <i className="material-icons pink-text prefix">call</i>
          <label for="phone_number">Phone Number</label>
          <input
            placeholder={defaultCustomerInfo.phone || 'Undefined'}
            id="phone_number"
            type="text"
            class="validate"
          />
        </div>
      </form>
      <form className="row">
        <div class="input-field">
          <i className="material-icons prefix pink-text">business</i>
          <label for="address">Address</label>
          <input
            placeholder={defaultCustomerInfo.address || 'Undefined'}
            id="address"
            type="text"
            class="validate"
          />
        </div>
      </form>
      <div className="row center-align">
        <a
          href="#"
          className="btn-large pink white-text"
          onclick="testFields()">
          PLACE ORDER
        </a>
      </div>
    </div>
  );
}
