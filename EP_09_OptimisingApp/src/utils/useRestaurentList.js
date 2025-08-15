    import { useState,useEffect } from "react";
    import { SWIGGY_API } from "./contants";

    const useRestaurantList=()=>{
        const [listOfRestaurents,setListOfRestaurent]=useState([]);
        useEffect(() => {
            fetchData();
        },[]);
        
        const fetchData = async () => {
            const data = await fetch(SWIGGY_API);
        
            const json = await data.json();
            const restaurants=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;  //optional chaining;
        
            // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setListOfRestaurent(restaurants); //optional chaining to stop crashing on null or undefined;
            // setFilterResList(restaurants);
        }
        return listOfRestaurents;
    }

    export default useRestaurantList;