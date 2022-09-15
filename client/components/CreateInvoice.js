import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { editItem } from '../store/items'
import { _addOrder } from '../store/order'
import Invoice from './Invoice'

const CreateInvoice = ()=>{
    const dispatch = useDispatch()

    const items = useSelector(state => state.items)
    const order = useSelector(state => state.order)

    const [itemName, setItemName] = React.useState('Brocolli')
    const [soldQuantity, setSoldQuantity] = React.useState('')
    const [soldPrice, setSoldPrice] = React.useState('')

    const handePickItemName = (event)=>{
        setItemName(event.target.value)
    }
    const handleSoldQuantity = (event)=>{
        setSoldQuantity(event.target.value)
    }
    const handleSoldPrice = (event)=>{
        setSoldPrice(event.target.value)
    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        const soldItem = {itemName, soldQuantity, soldPrice}
        dispatch(_addOrder(soldItem))
      
        const item = items.find(item=>item.itemName === itemName)
        const id = item.id
        const updatedQuantity = item.quantity - soldQuantity
        dispatch(editItem(id, {itemName:itemName, quantity:updatedQuantity}))
        setSoldQuantity('')
        setSoldPrice('')
    }
    console.log('CreatInvoice coponent, order:', order)

    return(
        <div>
            <h2>Sales Order Page</h2>
            <div className='sold'>
                <span>Item Name: </span>
                <select onClick={handePickItemName}>
                    {items.sort((a,b)=> a.id-b.id).map(item=>
                        <option key={item.id} idvalue={item.itemName}>
                            {item.itemName}
                        </option>
                    )}
                </select>
            </div>
            <div className='sold'>
                <span>Quantity:</span>
                <input onChange={handleSoldQuantity} value={soldQuantity} placeholder='Quantity'/>
            </div>
            <div className='sold'>
                <span>Sold Price:</span>
                <input onChange={handleSoldPrice} value={soldPrice} placeholder='Sold Price'/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <Invoice order={order}/>
        </div>
    )
}

export default CreateInvoice