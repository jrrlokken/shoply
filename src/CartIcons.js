import { useDispatch } from 'react-redux';
import { addItem, removeItem } from './actions';
import './CartIcons.css';

const CartIcons = ({ id }) => {
  const dispatch = useDispatch();
  const add = () => dispatch(addItem(id));
  const remove = () => dispatch(removeItem(id));

  return (
    <div className="d-flex justify-content-between">
      <i
        onClick={add}
        className="CartIcon fas fa-cart-plus fa-2x text-success"
      />
      <i
        onClick={remove}
        className="CartIcon fas fa-cart-arrow-down fa-2x text-danger"
      />
    </div>
  );
}

export default CartIcons;