import React from "react";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice.jsx";

const Cart = () => {
  const itemList = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItem());
  };
  return (
    <div className="w-1/2 mx-auto  text-center">
      {itemList.length === 0 ? (
        <h2 className="text-xl font-bold ">Cart is empty</h2>
      ) : (
        <>
          <button
            className="text-white p-2 rounded-lg mt-2 border-2 bg-black"
            onClick={handleClear}
          >
            Clear Card
          </button>
          <ItemList item={itemList} />
        </>
      )}
    </div>
  );
};

export default Cart;
