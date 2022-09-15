import React, { useEffect } from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import Items from './Items';
import CreateItem from './CreateItem';
import EditItem from './EditItem';
import CreateInvoice from './CreateInvoice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store/items';

const App = ()=> { 
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchItems());
  }, []);

  return (
      <div id='main'>
        <h1>Produce Inventory Control System</h1>
        <h1>
          <Link to='/'>Items ({ items.length })</Link>
        </h1>
        <div className='products-in-out'>
          <div className='in-out-bar'>
            <Link className='in-out-bar-link' to='/items/create'>Receive Products</Link>
          </div>
          <div className='in-out-bar'>
            <Link className='in-out-bar-link' to='/items/invoice'>Create an invoice</Link>
          </div>
        </div>
        <Routes>
          <Route exact path='/' element={<Items/>} />
          <Route path='/items/create' element={<CreateItem/>} />
          <Route path ='/items/invoice' element={<CreateInvoice/>}/>
          <Route path='/items/:id' element={<EditItem/>}/>
        </Routes>
      </div>
  );
}

export default App;
