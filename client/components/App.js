import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link, Routes} from 'react-router-dom';
import Todos from './Todos';
import CreateTodo from './CreateTodo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/todos';
import EditTodo from './EditTodo';

const App = ()=> { 
// this useSelector is for line 27, todos.length, update the total todos number
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
 //So for the global state, todos data is loaded once page first time opened.
  useEffect(()=> {
    dispatch(fetchTodos());
  }, []);



  return (
    // <Router>
      <div id='main'>
{/*1,  here <h1/>inside <Link/> or <Link/>inside <h1/> should be the same thing 
2, <Link/> will direct you to that component, its not showing the component right here!
So <Link/> and <Route/>, 2 different things, dont confused with them into one thing*/}
        <h1>
          <Link to='/'>Todos ({ todos.length })</Link>
        </h1>
        <Link to='/todos/create'>Create A New Todo</Link>
        <div>dddd</div>
        <Switch>
          <Route exact path='/' component={Todos} />
          <Route path='/todos/create' component={CreateTodo} />
          <Route path='/todos/:id' component={EditTodo}/>
          {/* <Route path={'/:id'} component={EditTodo}/> */}
        </Switch>
      </div>
    // </Router>
  );
}

export default App;
