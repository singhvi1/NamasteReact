import RestaurantCards , {withOfferCard} from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "../utils/Shimmer";
import { NavLink } from "react-router";
import useRestaurantList from "../Hooks/useRestaurentList";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const Body = () => {
  // const [listOfRestaurents, setListOfRestaurent] = useState([]);
  const listOfRestaurents = useRestaurantList();
  const [filterResList, setFilterResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus=useOnlineStatus()
  const OfferRestaurantCard=withOfferCard(RestaurantCards);

  console.log("body called")

  //fetching data from Swiggy Api
  useEffect(() => {
    setFilterResList(listOfRestaurents);
  }, [listOfRestaurents]);

  // console.log(listOfRestaurents)
  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500 text-2xl font-semibold py-19">
        Opps you are ofline 🚫
      </h1>
    );
  }

  //returning Shimmer (if..) or cards
  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">

    {/* search + filter */}
      <div className="search flex flex-wrap items-center justify-center gap-4 my-6 p-4 rounded-lg">
        <input
          type="text"
          className="search-box border border-solid-black rounded px-4 py-2  w-full sm:w-64"
          placeholder=" Enter Restaurent"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value.trimStart()); //why we use onchage ?
          }}
        />
        <button
          className="px-4 py-2 m-4 bg-orange-400 rounded-md"
          onClick={() => {
            // console.log(searchText);
            const filterData = listOfRestaurents.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterResList(filterData);
          }}
        >
          Search
        </button>

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


      {/*cards of restaurents */}
      <div className="res-container flex flex-wrap mx-2 px-2 justify-center">
        {filterResList.map((restaurent) => (
          <NavLink
            key={restaurent.info.id}
            to={`/restaurants/${restaurent.info.id}`}
          >
            {restaurent?.info?.aggregatedDiscountInfoV3?.header || restaurent?.info?.aggregatedDiscountInfoV3?.subHeader ? <OfferRestaurantCard resData={restaurent}/> :  <RestaurantCards resData={restaurent} />}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
