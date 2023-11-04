import React, { useEffect, useState } from "react";
import { Restaurant_Menu_API } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_Menu_API);
    const json = await data.json();

    setResInfo(json.data);
    console.log(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { cuisines, name } = resInfo?.cards[0]?.card?.card?.info;

  // const {itemCards} = resInfo?.cards[3].groupedCard

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines && cuisines.join(", ")}</p>
      <h2>Menu</h2>
    </div>
  );
};

export default RestaurantMenu;
