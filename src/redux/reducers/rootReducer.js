export default function rootReducer(
  currentState = {
    menuItems: null,
    customerInfo: null,
    orderItems: [],
    idCounter: 0
  },
  action
) {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...currentState, menuItems: action.data };
    case 'ADD_ITEM':
      return {
        ...currentState,
        orderItems: [...currentState.orderItems, action.item]
      };
    case 'SUBMIT_FORM':
      return {
        ...currentState,
        customerInfo: action.customerInfo,
        orderItems: []
      };
    case 'CLOSE_FORM':
      return {
        ...currentState,
        customerInfo: null
      };
    default:
      return currentState;
  }
}
