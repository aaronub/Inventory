import React, {useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';   
import { deleteItem,editItem } from '../store/items';
import {useDispatch, useSelector} from 'react-redux';
import { fetchItem } from '../store/item';

const EditItem =()=> {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const item = useSelector(state => state.item);
    const items = useSelector(state => state.items)
    React.useEffect(()=> {
        dispatch(fetchItem(params.id));
      }, [items]);

    const [ itemName, setItemName ] = React.useState('');
    const [ quantity, setQuantity ] = React.useState(0);

    const handleChangeItemName = (event)=>{
        setItemName(event.target.value)
    }
    const handleChangeQuantity = (event)=>{
        setQuantity(event.target.value)
    }
    const handleDelete = (event)=>{
        // event.preventDefault();
        dispatch(deleteItem(params.id))
        navigate('/')
    }
    const handleSubmit =(event)=> {
        event.preventDefault()
        dispatch(editItem(params.id, {itemName, quantity}))
        navigate('/')
    }

    return(   
        <div>
            <form id='item-form' onSubmit={handleSubmit}>
                <label htmlFor='itemName'>EDIT Item Name:</label>
                <input name='itemName' onChange={handleChangeItemName} value={itemName} />

                <label htmlFor='quantity'>EDIT Quantity:</label>
                <input name='quantity' onChange={handleChangeQuantity} value={quantity} />

                <button type='submit'>Submit</button>
                <Link to='/'>Cancel</Link>
            </form>
            <button onClick={handleDelete}>Delete</button>
            <br/>
            <br/>
            <hr/>
            <p style={{fontSize: '30px'}}>{item.itemName + ': ' + item.quantity}</p>
        </div>
    )
}


export default EditItem