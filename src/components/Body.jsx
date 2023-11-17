import { useContext, useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Link, useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import "../../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLevel } from "./RestaurantCard";
import UserContext from "../utils/UserContext.jsx";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [dupResData, setDupResData] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const navigate = useNavigate();
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLevel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setDupResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return <h1>You are offline!</h1>;
  }

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Filter-container">
        <input
          className="search-box  border-2 border-black p-2"
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
        <input
          type="text"
          className="border-2 border-black ml-2  p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="restaurant-cards">
        {dupResData?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurantmenu/${restaurant?.info?.id}`}
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
