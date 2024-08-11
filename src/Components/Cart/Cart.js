import React, { useContext } from 'react'
import data from '../Data/Data'
import {ShopContext} from '../../Components/Context/ShopContext'
import CartItem from './CartItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate=useNavigate()
    const {cartItems,getTotalAmount}=useContext(ShopContext)
    const totalAmount=getTotalAmount();
  return (
    <div className='Cart'>
<div className='cart-title'>
    <h1>Your Cart Items</h1>
</div>
<div className='cartItems'>
    {
        data.map((item)=>{
            if(cartItems[item.id] !== 0 ){
                return <CartItem data={item}  key={item.id}/>
            }
            
        })
    }
    </div>
    {totalAmount >0 ?
    <div className='checkout'>
        <p>Subtotal:Rs.{totalAmount}</p>
        <button onClick={()=>navigate('/items')}>Continue shopping</button>

    </div>


:
<h2>Your cart is empty!!!</h2>
    }
    </div>
  )
}

export default Cart 