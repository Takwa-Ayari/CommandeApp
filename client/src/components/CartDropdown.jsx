import CartComponent from "./CartComponent";

/* eslint-disable react/prop-types */
const CartDropdown = ({ cart }) => {
    console.log(cart);
    return (
      <div className="absolute top-10 w-auto right-40 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
        <CartComponent></CartComponent>
      </div>
    );
  };
  
  export default CartDropdown;