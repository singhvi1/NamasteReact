import ReastaurantCards from "./ReastaurantCards";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurents, setlistOfRestaurent] = useState(resList);

  return (
    <div className="body">
      <div className="filter">

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfRestaurent(filterList);
          }}
        >
          Top Rated Restaurent
        </button>
        
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <ReastaurantCards key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
