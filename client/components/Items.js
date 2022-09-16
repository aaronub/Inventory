import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Items = () => {

  const items = useSelector(state => state.items);
  
  return (
    <ul>
      {items.sort((a,b)=> a.id-b.id).map((item) => {
        return (
          <li key={item.id}>
            <h2>
              <img style={{display:'block'}} src={item.imageUrl}/>
              <Link to={`/items/${item.id}`}>Item: {item.itemName}</Link>              
              <span className='quantity'>Quantity(cs): {item.quantity}</span>
            </h2>
          </li>
        );
      })}
    </ul>
  );
};

export default Items;
