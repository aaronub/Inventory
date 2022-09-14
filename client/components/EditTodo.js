import React, {useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';   
import { deleteTodo,editTodo } from '../store/todos';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTodo } from '../store/todo';


//old version use history to redirect to main page,
//new version use useNavigate redirect to main page 
const EditTodo =({history})=> {
    const params = useParams()
    const dispatch = useDispatch()
    // const navigate = useNavigate()

//didnt write another reducer for todo change, instead use React.useEffect to connect it to todos change, 
//once todos change, fetchTodo will dispatch again, then line 17 will responde, this page re-renders
    const todo = useSelector(state => state.todo);
    const todos = useSelector(state => state.todos)
    React.useEffect(()=> {
        dispatch(fetchTodo(params.id));
      }, [todos]);

    const [ taskName, setTaskName ] = React.useState('');
    const [ assignee, setAssignee ] = React.useState('');
    // How to pre-populate to show todo in the input????
    // const [ taskName, setTaskName ] = React.useState(todo.taskName);
    // const [ assignee, setAssignee ] = React.useState(todo.assignee);
    // console.log('todo.taskName', todo.taskName)
    // console.log('taskName', taskName)

    const handleChangeTaskName = (event)=>{
        setTaskName(event.target.value)
    }
    const handleChangeAssignee = (event)=>{
        setAssignee(event.target.value)
    }
    const handleDelete = (event)=>{
        // event.preventDefault();
        dispatch(deleteTodo(params.id, history))
        // navigate('/')
    }
    const handleSubmit =(event)=> {
        event.preventDefault()
        dispatch(editTodo(params.id, {taskName, assignee}, history))
    }

    return(   
        <div>
            <form id='todo-form' onSubmit={handleSubmit}>
                <label htmlFor='taskName'>EDIT Task Name:</label>
                <input name='taskName' onChange={handleChangeTaskName} value={taskName} />

                <label htmlFor='assignee'>EDIT Assign To:</label>
                <input name='assignee' onChange={handleChangeAssignee} value={assignee} />

                <button type='submit'>Submit</button>
                <Link to='/'>Cancel</Link>
            </form>
            <button onClick={handleDelete}>Delete</button>
            <br/>
            <br/>
            <hr/>
            <p style={{fontSize: '30px'}}>{todo.taskName + ' BY ' + todo.assignee}</p>
        </div>
    )
}


export default EditTodo