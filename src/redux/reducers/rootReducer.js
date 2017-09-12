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
        orderItems: [action.item, ...currentState.orderItems]
      };
    case 'SUBMIT_FORM':
      return {
        ...currentState,
        customerInfo: action.customerInfo
      };
    case 'CLOSE_FORM':
      return {
        customerInfo: null
      };
    default:
      return currentState;
  }
}
