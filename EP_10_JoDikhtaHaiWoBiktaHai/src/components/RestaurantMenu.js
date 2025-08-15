import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId}=useParams();
  const resInfo=useRestaurantMenu(resId);
  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =resInfo?.cards[2]?.card.card.info;
  const recommendedItems =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
  console.log(recommendedItems);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {recommendedItems.map((item) => (
          <li key={item?.card?.info.id}>
          {item?.card?.info.name} -{" Rs "} {item?.card?.info?.defaultPrice ||item?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
