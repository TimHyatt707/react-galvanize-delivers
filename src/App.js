import React, { Component } from 'react';
// import logo from './logo.svg';
import OrderPage from './components/OrderPage';
import getMenuItems from './api/getMenuItems';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: null,
      customerInfo: null,
      orderItems: [],
      idCounter: 0
    };
    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }
  componentDidMount() {
    getMenuItems().then(data => {
      this.props.store.dispatch({ type: 'SET_ITEMS', data });
    });
  }
  render() {
    return (
      <OrderPage
        menuItems={this.state.menuItems}
        orderItems={this.state.orderItems}
        customerInfo={this.state.customerInfo}
        onAddItem={this._addItem}
        onSubmitOrderForm={this._submitOrderForm}
        onCloseOrderSuccessMessage={this._closeOrderSuccessMessage}
      />
    );
  }
  _addItem = itemId => {
    let item;
    for (let i = 0; i < this.state.menuItems.length; i++) {
      if (this.state.menuItems[i].id === itemId) {
        item = this.state.menuItems[i];
      }
    }
    this.props.store.dispatch({
      type: 'ADD_ITEM',
      item
    });
  };
  _submitOrderForm = customerInfo => {
    this.props.store.dispatch({
      type: 'SUBMIT_FORM',
      customerInfo
    });
  };
  _closeOrderSuccessMessage = () => {
    this.props.store.dispatch({
      type: 'CLOSE_FORM'
    });
  };
}
