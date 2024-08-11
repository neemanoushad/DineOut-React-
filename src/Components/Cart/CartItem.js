import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'

function CartItem(props) {
    const{id,title,price,url}=props.data
    const {addToCart,RemoveFromCart,cartItems,UpdateAmountCount}=useContext(ShopContext)
   
  return (
    <div className='cart-details'>
        <img src={url} alt="" />
        <div className='cart-info'>
            <p><b>{title}</b></p>
            <h3>Rs.{price}</h3>
            <div className='counthandler'>
                <button onClick={()=>{RemoveFromCart(id)}}>-</button>
                <input value={cartItems[id]}  onChange={(e)=>{UpdateAmountCount(Number(e.target.value),id)}}/>
                <button onClick={()=>{addToCart(id)}}>+</button>
            </div>

        </div>
    </div>

  )
}

export default CartItem