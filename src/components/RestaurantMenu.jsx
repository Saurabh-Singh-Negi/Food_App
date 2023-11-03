import React, { useEffect } from "react";
import { Restaurant_Menu_API } from "../utils/constants";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_Menu_API);
    const json = await data.json();

    console.log(json.data);
  };

  return (
    <div>
      RestaurantMenu
      <p>Menu</p>
    </div>
  );
};

export default RestaurantMenu;
