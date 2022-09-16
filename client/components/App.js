import React, { useEffect } from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import Items from './Items';
import CreateItem from './CreateItem';
import EditItem from './EditItem';
import CreateInvoice from './CreateInvoice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store/items';
import Chart from './Chart';
import Header from './Header';
import Welcome from './Welcome';
import FinalInvoice from './FinalInvoice';


const App = ()=> { 
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchItems());
  }, []);

  return (
      <div id='main'>
        <h1>AW Produce LLC</h1>
        <h2>Inventory Control System</h2>         
        <Routes>
          <Route path='/invoice' element={<FinalInvoice/>}/>
          <Route path='/' element={<Header items={items}/>}>
            {/* When nested, '/h/items' absolute, ':items' means relative next to parent path */}
            {/* Don't forget, Invoice component always take property */}
            <Route path='/' element={<Welcome/>}/>
            <Route path='items' element={<Items/>} />
            <Route path='items/create' element={<CreateItem/>} />
            <Route path ='items/invoice' element={<CreateInvoice/>}/>
            <Route path='items/:id' element={<EditItem/>}/>
            <Route path='items/chart' element={<Chart/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
