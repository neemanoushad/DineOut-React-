import React, { useContext, useEffect, useState } from 'react';
import './FoodDetals.css';
import { Link, useParams } from 'react-router-dom';
import data from '../Data/Data'; 
import { ShopContext } from '../Context/ShopContext';

function FoodDetails() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const {addToCart,cartItems}=useContext(ShopContext);
  const CartAmount=cartItems[id];
 

  useEffect(() => {
    const fetchDetails = () => {
      const detail = data.find(item => item.id === parseInt(id));
      setDetails(detail || {});
    };
    fetchDetails();
  }, [id]);

  if (!details.id) {
    return <div>Loading...</div>;
  }

  return (
    <div className='food-details'>
      {details.url && <img src={details.url} alt={details.title} />}
      <div className="food-list">
        <h1 className='title'>{details.title}</h1>
        <p className='desp'>{details.  Description}</p>
        <p className='price'>Rs. {details.price}</p>
        <button className='btn-order' onClick={()=>addToCart(id)} 
        >Add To Cart {CartAmount > 0 && <>({CartAmount})</>}</button>
        <Link to='/items'>
          <button className='btn-go'>Go back</button>
        </Link>
      </div>
    </div>
  );
}

export default FoodDetails;
