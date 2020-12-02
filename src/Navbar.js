import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateTotalQuantity } from './helpers';

const Navbar = () => {
  const itemCount = useSelector(st => calculateTotalQuantity(st.cartItems));
  const cartTotal = useSelector(st => st.cartTotal);
  const itemUnit = itemCount === 1 ? "item" : "items";

  return (
    
  )
}