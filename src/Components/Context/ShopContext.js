import React, { createContext,useState} from 'react'
import data from '../Data/Data';
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let i=1; i<data.length +1 ;i++){
    cart[i]=0;
}
return cart
}



export const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(getDefaultCart());
    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}));
    
    }
    const RemoveFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}));
    
    }

    const UpdateAmountCount=(newAmount,itemId)=>{
      setcartItems((prev)=>({...prev,[itemId]:newAmount}));

    }

    const getTotalAmount=()=>{
      let totalAmt=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
        let TotalInfo=data.find((product)=> product.id === Number(item))
        totalAmt+=cartItems[item]*TotalInfo.price

    }}
    return totalAmt
  }
    const ContextValue={cartItems,addToCart,RemoveFromCart,UpdateAmountCount,getTotalAmount}
   
  return (
    <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>
  )
}
