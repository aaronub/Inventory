import React from 'react'
import Invoice from './Invoice'
import {useSelector} from 'react-redux'
import moment from 'moment'
import {Link} from 'react-router-dom'

const FinalInvoice = ()=>{
    const order = useSelector(state=>state.order)
    return(
        <div>
            <div className='basic'>
                <h1 className='company-name'>AW Produce LLC</h1>
                <div className='date-invoice'>{moment().format("MMM Do YYYY")}</div>
            </div>
            <div className='basic'>
                <div className='address'>
                    <div>AW Produce LLC</div>
                    <div>123 Post Ave</div>
                    <div>Westbury NY 11590</div>
                </div>
                <div className='conatct'>
                    <div>Email: wo-08@hotmail.com</div>
                    <div>Cell: 917-660-2479</div>
                </div>
            </div>
            <Invoice order={order}/>
            <Link to={'/items/invoice'}><button>Back</button></Link>
        </div>
    )
}

export default FinalInvoice