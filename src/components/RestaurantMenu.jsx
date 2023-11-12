import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const resInfo = useRestaurantMenu(restaurantId);
  console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { cuisines, name, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const { carousel } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
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
