import React, { useEffect, useState } from "react";
import { RES_DATA } from "../utils/contants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams();
  useEffect(() => {
    fetchMenu();
    console.log(resInfo);
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(RES_DATA+resId);
    const json = await data.json();
    const menuData = json?.data?.cards[2]?.card?.card.info;
    // console.log(json)
    console.log(menuData);
    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    setResInfo(json.data);
    console.log(json.data);
  };
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
