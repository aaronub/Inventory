import React from "react";
import items from "../store/items";

const Invoice = ({order})=>{
    return(
        <div className="invoices">
            <h1 style={{textAlign:'center'}}>Invoice</h1>
            <div className='invoice title'>
                <span>Item</span>
                <span>Sold Quantity</span>
                <span>Sold Price</span>
            </div>
            <div>
                {order.map((itm, idx) =>
                    <div key={idx} className='invoice'>
                        <div>{itm.itemName}</div>
                        <div>{itm.soldQuantity}</div>
                        <div>{itm.soldPrice}</div>
                </div>
            )}
            </div>
            <div className="invoice title">
                    <span>Total Amount</span>
                    <span></span>
                    <span>${order.reduce((accu, itm)=> itm.soldQuantity*itm.soldPrice + accu, 0)}</span>
            </div>
        </div>
    )
}

export default Invoice