import React, { Component } from 'react';

export default class OrderFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { errorMsg: false };
    this._handleForm = this._handleForm.bind(this);
    this.error = this.error.bind(this);
  }
  error() {
    this.setState({
      errorMsg: 'Invalid Input'
    });
  }

  _handleForm(event) {
    event.preventDefault();
    const $form = event.target;
    if ($form.name.value && $form.phone_number.value && $form.address.value) {
      if (
        $form.phone_number.value.match(/^\d{3}-\d{3}-\d{4}$/) &&
        $form.phone_number.value.match(/^\(\d{3}\)\d{3}-\d{4}/)
      ) {
        this.error();
      } else {
        {
          let customerData = {
            name: $form.name.value,
            phone: $form.phone_number.value,
            address: $form.address.value
          };
          this.props.onSubmit(customerData);
        }
      }
    } else {
      this.error();
    }
  }

  render() {
    return (
      <form onSubmit={this._handleForm} className="OrderFormComponent">
        <div className="row">
          <i className="material-icons pink-text prefix">account_circle</i>
          <label htmlFor="name">Name</label>
          <input
            placeholder={'Customer Name' || 'Undefined'}
            id="name"
            type="text"
            className="validate"
          />
        </div>
        <div className="row">
          <i className="material-icons pink-text prefix">call</i>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            placeholder={'Customer Phone Number' || 'Undefined'}
            id="phone_number"
            type="text"
            className="validate"
          />
        </div>
        <div className="row">
          <i className="material-icons prefix pink-text">business</i>
          <label htmlFor="address">Address</label>
          <input
            placeholder={'Customer Address' || 'Undefined'}
            id="address"
            type="text"
            className="validate"
          />
        </div>
        <div className="row center-align">
          <button className="btn-large pink white-text">PLACE ORDER</button>
        </div>
        <div>
          <h2 className="red-text">
            {this.state.errorMsg}
          </h2>
        </div>
      </form>
    );
  }
}
