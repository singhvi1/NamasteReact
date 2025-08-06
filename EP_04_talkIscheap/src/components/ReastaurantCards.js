import { CDN_URL } from "../utils/contants";

const ReastaurantCards = (props) => {
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
      <h5>{avgRating} star</h5>
      <h5>{cuisines.join(",")}</h5>
      <h5>{costForTwo} For two</h5>
      <h5>loacion :{areaName + ", "+locality}</h5>
    </div>
  );
};

export default ReastaurantCards;