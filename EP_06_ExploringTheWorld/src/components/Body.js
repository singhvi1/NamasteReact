import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/contants";
import {NavLink } from "react-router";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurent] = useState([]);
  const [filterResList,setFilterResList]=useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("body called")

  //fetching data from Swiggy Api
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();
    const restaurants=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;  //optional chaining;

    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurent(restaurants); //optional chaining to stop crashing on null or undefined;
    setFilterResList(restaurants);
  };
  // console.log(listOfRestaurents)

  //returning Shimmer (if..) or cards
  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          placeholder="enter Restaurent"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); //why we use it ? 
          }}
        />

        <button onClick={()=>{    
          // console.log(searchText);
          const filterData=listOfRestaurents.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

          setFilterResList(filterData)
        }}>Search</button>

        <button
          className="filter-btn"
          onClick={() => {
            // console.log("topRated clicked")
            const topRated = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterResList(topRated);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {filterResList.map((restaurent) => (
          <NavLink key={restaurent.info.id} to={`/restaurants/${restaurent.info.id}`}><RestaurantCards  resData={restaurent} /></NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
