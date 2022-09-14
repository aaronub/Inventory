import React, { useState } from 'react';
import { createTodo } from '../store/todos';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CreateTodo = ({ history })=> {
  const [ taskName, setTaskName ] = useState('');
  const [ assignee, setAssignee ] = useState('');

  const handleChangeTaskName = (event)=>{
    setTaskName(event.target.value)
  }
  const handleChangeAssignee = (event)=>{
    setAssignee(event.target.value)
  }
  
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
// createTodo is thunk function, put these 2 input into thunk function, then thunk function will 
// add them to database, then create action, then dispatch, then get to reducer, change the global state  
    dispatch(createTodo({ taskName, assignee }, history));
  }

  return (
    <form id='todo-form' onSubmit={handleSubmit}>
      <label htmlFor='taskName'>Task Name:</label>
      <input name='taskName' onChange={handleChangeTaskName} value={taskName} />

      <label htmlFor='assignee'>Assign To:</label>
      <input name='assignee' onChange={handleChangeAssignee} value={assignee} />

      <button type='submit'>Submit</button>
      <Link to='/'>Cancel</Link>
    </form>
  );
}

export default CreateTodo;
