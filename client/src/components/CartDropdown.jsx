/* eslint-disable react/prop-types */
const CartDropdown = ({ cart }) => {
    console.log(cart);
    return (
      <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
        <ul className="p-4">
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CartDropdown;