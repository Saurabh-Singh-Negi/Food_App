import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(restaurantId);
  console.log("menu", resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { cuisines, name, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) =>
        ele.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("asdf", categories);
  return (
    <div className="w-1/2 mx-auto mt-5 ">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-sm text-gray-400">
        {cuisines && cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="flex flex-col">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category.card?.card}
            showItem={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
