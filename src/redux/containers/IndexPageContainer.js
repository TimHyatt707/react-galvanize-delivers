import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import OrderPage from './../../components/OrderPage';

import getItemsProcess from './../thunks/getItemsProcess';

function mapStateToProps(state, ownProps) {
  return {
    menuItems: state.menuItems,
    customerInfo: state.customerInfo,
    orderItems: state.orderItems,
    idCounter: state.idCounter
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getItemsProcess()),
    addItem: itemId =>
      this.props.state.menuItems.find(itemId).then(item => {
        dispatch({ type: 'ADD_ITEM', item });
      }),
    submitOrderForm: customerInfo =>
      dispatch({ type: 'SUBMIT_FORM', customerInfo }),
    closeOrderSuccessMessage: () => dispatch({ type: 'CLOSE_FORM' })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(OrderPage);