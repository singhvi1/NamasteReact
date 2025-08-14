import { CDN_URL } from "../utils/contants";

const RestaurantCards = (props) => {
  const {resData}=props;
  const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,locality,areaName}=resData?.info
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating} star</h4>
      <h4 className="cuisines">{cuisines.join(",")}</h4>
      <h4>{costForTwo} For two</h4>
      <h4>loacion :{areaName + ", "+locality}</h4>
    </div>
  );
};

export default RestaurantCards;