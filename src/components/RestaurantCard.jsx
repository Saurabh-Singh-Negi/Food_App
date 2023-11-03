import { IMAGE_LINK } from "../utils/constants";
import "../../index.css";

const RestaurantCard = ({ resId, resData, handleRestroClick }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  return (
    <div className="card" onClick={() => handleRestroClick(resId)}>
      <img
        className="card-img"
        src={IMAGE_LINK + cloudinaryImageId}
        alt="cards images"
      />
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
