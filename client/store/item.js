import axios from 'axios';


const SET_ITEM = 'SET_ITEM';


const _setItem = (item) => {
  return{
    type:SET_ITEM,
    item
  }
}
export const fetchItem = (id) => {
  return async (dispatch) => {
    const { data: item } = await axios.get(`/api/items/${id}`);
    dispatch(_setItem(item));
  };
};


export default (state = {}, action) => {
  switch (action.type) {
    case SET_ITEM:
      return action.item;
    default:
      return state;
  }
};
