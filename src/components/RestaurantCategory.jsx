import React, { useState } from "react";
import ItemList from "./ItemList";
import { AiOutlineDown } from "react-icons/ai";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="px-4 shadow-md py-2 mb-5">
      <div
        className=" my-4 flex justify-between items-center"
        onClick={handleClick}
      >
        <p className="text-lg text-[#3E4152] font-bold">
          {data.title}({data.itemCards?.length})
        </p>
        <div className="cursor-pointer">
          <AiOutlineDown />
        </div>
      </div>

      {showItem && <ItemList item={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
