import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
const Cart = () => {
  const itemList = useSelector((store) => store.cart.items);
  return (
    <div className="w-1/2 mx-auto  ">
      <ItemList item={itemList} />
    </div>
  );
};

export default Cart;
