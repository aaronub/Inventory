
import axios from 'axios';

// action type
const CREATE_ITEM = 'CREATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const SET_ITEMS = 'SET_ITEMS';

// action creators
const _createItem = (item) => {
  return {
    type: CREATE_ITEM,
    item,
  };
};

const _deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    item,
  };
};

const _setItems = (items) => {
  return {
    type: SET_ITEMS,
    items,
  };
};

const _editItem =(item) => {
  return {
    type:UPDATE_ITEM,
    item,
  }
}
// THUNK CREATORS

export const editItem = (id, item) => {
  return async (dispatch) => {
    const {data:edit} = await axios.put(`/api/items/${id}`, item);
    dispatch(_editItem(edit));
  };
};

export const deleteItem = (id) => {
  return async (dispatch) => {
    const {data:deleted} = await axios.delete(`/api/items/${id}`);
    dispatch(_deleteItem(deleted));
  };
};

export const createItem = (item) => {
  return async (dispatch) => {
    const {data:created} = await axios.post('/api/items', item);
    dispatch(_createItem(created));
  // when finished, redirect to home page, but new version should be something like navigate?????
    // history.push('/');
  };
};

export const fetchItems = () => {
  return async (dispatch) => {
    const { data: items } = await axios.get('/api/items');
    dispatch(_setItems(items));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items;
    case UPDATE_ITEM:
      return state.map((item) =>
        item.id === action.item.id ? action.item : item
      );
    case DELETE_ITEM:
      // Does it need to be ????
      //[...state.filter((item) => item.id !== action.item.id)]
      return state.filter((item) => item.id !== action.item.id);
    case CREATE_ITEM:
      return [...state, action.item];
    default:
      return state;
  }
};
