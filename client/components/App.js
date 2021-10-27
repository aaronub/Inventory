import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Todos from './Todos';
import CreateTodo from './CreateTodo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/todos';

const App = ()=> { 
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchTodos());

  }, []);

  return (
    <Router>
      <div id='main'>
        <h1>
          <Link to='/'>Todos ({ todos.length })</Link>
        </h1>
        <Link to='/todos/create'>Create A New Todo</Link>
        <Switch>
          <Route exact path='/' component={Todos} />
          <Route path='/todos/create' component={CreateTodo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
