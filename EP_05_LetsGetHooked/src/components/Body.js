import ReastaurantCards from "./ReastaurantCards";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="Search">
        <input type="search"></input>
        Search
      </div>
      <div className="res-container">
        {
          resList.map(restaurent => <ReastaurantCards key={restaurent.info.id} resData={restaurent}/>)
        }
      </div>
    </div>
  );
};

export default Body;