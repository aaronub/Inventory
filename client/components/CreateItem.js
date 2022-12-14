import React, { useState } from 'react';
import { createItem } from '../store/items';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const CreateItem = ()=> {
  const [ itemName, setItemName ] = useState('');
  const [ quantity, setQuantity ] = useState('');

  const handleChangeItemName = (event)=>{
    setItemName(event.target.value)
  }
  const handleChangeQuantity = (event)=>{
    setQuantity(event.target.value)
  }
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (evt) => {
    evt.preventDefault(); 
    dispatch(createItem({ itemName, quantity }));
    navigate('/items')
  }

  return (
    <form id='Item-form' onSubmit={handleSubmit}>
      <label htmlFor='itemName'>New Item Name:</label>
      <input name='itemName' onChange={handleChangeItemName} value={itemName} />

      <label htmlFor='quantity'>Quantity(cs):</label>
      <input name='quantity' onChange={handleChangeQuantity} value={quantity} />

      <button type='submit'>Submit</button>
      <Link to='/'>Cancel</Link>
    </form>
  );
}

export default CreateItem;
