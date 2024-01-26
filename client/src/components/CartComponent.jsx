import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="container w-96 mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
      </div>
      <div className="mt-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row border-b border-gray-400 py-4"
          >
            <div className="mt-4 md:mt-0 md:ml-6">
              <h2 className="text-lg font-bold">{item.nom}</h2>
              <div className="mt-4 flex flex-col items-start">
                <div className="flex justify-around">
                  <span className="mx-2 text-gray-600">
                    {`${item.prix}`} Dt
                  </span>
                  <span className="mr-2 text-gray-600">
                    Quantity: {item.quantity}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-600">
                    {`Total: ${item.totalprix}`} Dt
                  </span>
                  <button
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around">
      <div className="flex justify-end items-center mt-8">
          <span className="text-gray-600 mr-4">Subtotal:</span>
          <span className="text-xl font-bold">{`$${subtotal}`} Dt</span>
        </div>
        <div className="flex justify-start items-center mt-8">
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
