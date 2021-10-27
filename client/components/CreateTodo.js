import React, { useState } from 'react';
import { createTodo } from '../store/todos';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CreateTodo = ({ history })=> {
  const [ taskName, setTaskName ] = useState('');
  const [ assignee, setAssignee ] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createTodo({ taskName, assignee }, history));
  }

  return (
    <form id='todo-form' onSubmit={handleSubmit}>
      <label htmlFor='taskName'>Task Name:</label>
      <input name='taskName' value={taskName} />

      <label htmlFor='assignee'>Assign To:</label>
      <input name='assignee' value={assignee} />

      <button type='submit'>Submit</button>
      <Link to='/'>Cancel</Link>
    </form>
  );
}

export default CreateTodo;
