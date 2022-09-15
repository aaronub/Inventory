import React from "react";

const Invoice = ({order})=>{
    return(
        <div>
            {order.map((itm, idx) =>
                <div key={idx}>
                    <div>{itm.itemName}</div>
                    <div>{itm.soldQuantity}</div>
                    <div>{itm.soldPrice}</div>
                </div>
            )}
        </div>
    )
}

export default Invoice