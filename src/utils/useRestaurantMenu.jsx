import React, { useEffect, useState } from "react";
import { Restaurant_Menu_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_Menu_API + restaurantId);
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
