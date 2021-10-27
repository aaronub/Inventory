import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <h2>
              <Link to={`/todos/${todo.id}`}>Task: {todo.taskName}</Link>
            </h2>
            <p>assigned by {todo.assignee}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
