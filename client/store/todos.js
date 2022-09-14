
import axios from 'axios';

// action type constants
const CREATE_TODO = 'CREATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const SET_TODOS = 'SET_TODOS';

// action creators
const _createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    todo,
  };
};
//1, action creator paramaeter hard to determine...
//2,  thunk function: deleteTodo(id), use this id to delete in the database, and get the deleted {}
//action creator function: _deleteTodo(todo), can it be '_deleteTodo(id)'??? Hell no!!! cause now we 
// have thunk function, this action creator function will be used inside thunk function, it get returned
// data from thunk function. Thunk function return the deleted {}, so it needs to take the deleted {} as
// parameter, then in reducer, update the global state, with this deleted {}
//3, delete thunk take id as parameter, get id from component req.params();
//create thunk take added {} as parameter, get it from component input value
//update thunk take id and updated{} as parameters
const _deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    todo,
  };
};

const _setTodos = (todos) => {
  return {
    type: SET_TODOS,
    todos,
  };
};

const _editTodo =(todo) => {
  return {
    type:UPDATE_TODO,
    todo,
  }
}
// THUNK CREATORS

export const editTodo = (id, todo, history) => {
  return async (dispatch) => {
    const {data:edit} = await axios.put(`/api/todos/${id}`, todo);
    dispatch(_editTodo(edit));
    // history.push('/');
  };
};

export const deleteTodo = (id, history) => {
  return async (dispatch) => {
    const {data:deleted} = await axios.delete(`/api/todos/${id}`);
    dispatch(_deleteTodo(deleted));
    history.push('/');
  };
};

export const createTodo = (todo, history) => {
  return async (dispatch) => {
    const {data:created} = await axios.post('/api/todos', todo);
    dispatch(_createTodo(created));
  // when finished, redirect to home page, but new version should be something like navigate?????
    history.push('/');
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    const { data: todos } = await axios.get('/api/todos');
    dispatch(_setTodos(todos));
  };
};
// ?????????????
// export const fetchTodo = (id) => {
//   return async (dispatch) => {
//     const { data: todo } = await axios.get(`/api/todos/${id}`);
//     dispatch(_setTodos(todo));
//   };
// };

export default (state = [], action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    case DELETE_TODO:
      // Does it need to be ????
      //[...state.filter((todo) => todo.id !== action.todo.id)]
      return state.filter((todo) => todo.id !== action.todo.id);
    case CREATE_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
};
