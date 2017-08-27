import React from 'react';

export default function OrderFormComponent({ defaultCustomerInfo }) {
  return (
    <div className="OrderFormComponent">
      <form className="row">
        <i className="material-icons pink-text prefix">account_circle</i>
        <label htmlFor="name">Name</label>
        <input
          placeholder={defaultCustomerInfo.name || 'undefined'}
          id="name"
          type="text"
          className="validate"
        />
      </form>
      <form className="row">
        <i className="material-icons pink-text prefix">call</i>
        <label htmlFor="phone_number">Phone Number</label>
        <input
          placeholder={defaultCustomerInfo.phone || 'Undefined'}
          id="phone_number"
          type="text"
          className="validate"
        />
      </form>
      <form className="row">
        <i className="material-icons prefix pink-text">business</i>
        <label htmlFor="address">Address</label>
        <input
          placeholder={defaultCustomerInfo.address || 'Undefined'}
          id="address"
          type="text"
          className="validate"
        />
      </form>
      <div className="row center-align">
        <a href="#" className="btn-large pink white-text">
          PLACE ORDER
        </a>
      </div>
    </div>
  );
}
