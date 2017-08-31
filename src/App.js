import React, { Component } from 'react';
// import logo from './logo.svg';
import OrderPage from './components/OrderPage';
import getMenuItems from './api/getMenuItems';
const orderItemsArray = [];
export default class App extends Component {
  state = {
    menuItems: null,
    customerInfo: null,
    orderItems: [],
    idCounter: 0
  };
  componentDidMount() {
    getMenuItems().then(data => {
      console.log(data);
      this.setState({ menuItems: data });
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
    for (let i = 0; i < this.state.menuItems.length; i++) {
      if (this.state.menuItems[i].id === itemId) {
        orderItemsArray.push(this.state.menuItems[i]);
        orderItemsArray[orderItemsArray.length - 1].key = this.state.idCounter;
        this.state.idCounter++;
      }
      this.setState({ orderItems: orderItemsArray });
      this.render(
        <OrderPage
          menuItems={this.state.menuItems}
          orderItems={this.state.orderItems}
          customerInfo={this.state.customerInfo}
          onAddItem={this._addItem}
          onSubmitOrderForm={this._submitOrderForm}
          onCloseOrderSuccessMessage={this._closeOrderSuccessMessage}
        />,
        document.getElementById('root')
      );
    }
  };
  _submitOrderForm = customerInfo => {
    this.setState({ customerInfo: customerInfo });
    this.render(
      <OrderPage
        menuItems={this.state.menuItems}
        orderItems={this.state.orderItems}
        customerInfo={this.state.customerInfo}
        onAddItem={this._addItem}
        onSubmitOrderForm={this._submitOrderForm}
        onCloseOrderSuccessMessage={this._closeOrderSuccessMessage}
      />,
      document.getElementById('root')
    );
  };
  _closeOrderSuccessMessage = () => {
    this.setState({ customerInfo: null });
    this.render(
      <OrderPage
        menuItems={this.state.menuItems}
        orderItems={this.state.orderItems}
        customerInfo={this.state.customerInfo}
        onAddItem={this._addItem}
        onSubmitOrderForm={this._submitOrderForm}
        onCloseOrderSuccessMessage={this._closeOrderSuccessMessage}
      />,
      document.getElementById('root')
    );
  };
}
