import getMenuItems from './../../api/getMenuItems';

export default function getItemsProcess() {
  return (dispatch, getState) => {
    return getMenuItems().then(data => {
      dispatch({ type: 'SET_ITEMS', data });
      return data;
    });
  };
}
