import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import "../../index.css";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [dupResData, setDupResData] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    setResData(
      json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setDupResData(
      json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleButtonClick = () => {
    setDupResData(
      resData.filter((restaurants) => restaurants?.info?.avgRating > 4.2)
    );
  };

  const handleSearch = () => {
    setDupResData(
      resData.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchRes.toLowerCase())
      )
    );
  };

  const handleRestroClick = (id) => {
    navigate(`/restaurantmenu/${id}`);
  };

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Filter-container">
        <input
          className="search-box"
          type="text"
          value={searchRes}
          onChange={(e) => setSearchRes(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <button className="filter-btn" onClick={handleButtonClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-cards">
        {dupResData.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resId={restaurant?.info?.id}
            resData={restaurant}
            handleRestroClick={handleRestroClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
