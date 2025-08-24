import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";
import { jsx } from "react/jsx-runtime";
import { HiH1 } from "react-icons/hi2";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //dispatch a function;
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col m-auto">
      <h2 className="text-center font-bold text-2xl">Cart</h2>

      <div className="w-6/12 m-auto">
        <button
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition inline-flex"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1> cart is empty add item to cart go for shopping </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
