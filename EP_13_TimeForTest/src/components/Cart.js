import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //dispatch a function;
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-center font-bold text-2xl">Cart</h2>
      <button
          className="px-4 m-4  py-2 bg-black text-white rounded-lg w-fit"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

      <div className="w-6/12 m-auto">
        
        {cartItems.length === 0 && (
          <h1 className="font-bold text-3xl text-center"> cart is empty add item  for shopping </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
