import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/contants";

const useRestaurantList = () => {
  const [listOfRestaurents, setListOfRestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);

      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants; //optional chaining;

      // console.log(json.data.cards);
      setListOfRestaurent(restaurants || []); //optional chaining to stop crashing on null or undefined;
      // setFilterResList(restaurants);
    } catch (error) {
      console.log("something wrong while fetching data", error);
    }
  };
  return listOfRestaurents;
};

export default useRestaurantList;
