import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Todos = () => {
 //whats state?????? Where state is set up from??????????
//  {todo:{}, todos:[{id: 1, taskName: 'Buy dog food', assignee: 'Cody', 
// createdAt: '2022-08-29T05:21:51.159Z', updatedAt: '2022-08-29T05:21:51.159Z'},{...}, {...}]}

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
