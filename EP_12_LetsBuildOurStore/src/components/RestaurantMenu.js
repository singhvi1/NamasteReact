import { useParams } from "react-router";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantMenuShimmer from "../utils/RestaurantMenuShimmer";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems]=useState(0)

  // console.log(resInfo);
  if (!resInfo) return <RestaurantMenuShimmer />;

  const categories =
    resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories, " working");
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      {/* categories accordians */}
      {categories.map((category, index) => (
        //controlled component
        <ResCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems= {index===showItems ?true : false}
          setShowItems={()=>setShowItems(prev => prev == index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
