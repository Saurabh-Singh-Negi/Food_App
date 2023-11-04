import React, { useEffect, useState } from "react";
import { Restaurant_Menu_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const { restauradId } = useParams();
  const fetchData = async () => {
    const data = await fetch(Restaurant_Menu_API + restauradId);
    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { cuisines, name, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const { carousel } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines && cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {itemCards
        ? itemCards.map((ele) => (
            <p key={ele?.card?.info?.id}>
              {ele?.card?.info?.name} -{" Rs."}
              {ele?.card?.info?.price / 100}
            </p>
          ))
        : carousel.map((ele) => (
            <p key={ele?.dish?.info?.id}>
              {ele?.dish?.info?.name} - {" Rs."} {ele?.dish?.info?.price / 100}
            </p>
          ))}
    </div>
  );
};

export default RestaurantMenu;
