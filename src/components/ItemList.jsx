import React from "react";
import { IMAGE_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = (ele) => {
    console.log("item is ", ele);
    dispatch(addItem(ele));
  };

  return (
    <div>
      {item.map((ele) => (
        <div
          key={ele.card.info.id}
          className="flex justify-between border-b-2 border-black-200 pb-10 mt-5"
        >
          <div className="w-9/12">
            <p className="font-semibold">{ele.card?.info?.name}</p>
            <p>
              {"Rs. "}
              {ele.card?.info?.price / 100 ||
                ele.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-gray-400 text-sm">
              {ele.card?.info?.description}
            </p>
          </div>
          <div className="w-2/12 ">
            <button
              className="bg-black text-white px-2 rounded absolute ml-5 flex "
              onClick={() => handleAdd(ele)}
            >
              Add
              <span>+</span>
            </button>
            <img
              className="rounded-lg"
              src={IMAGE_LINK + ele.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
