import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';


const CartComponent = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
