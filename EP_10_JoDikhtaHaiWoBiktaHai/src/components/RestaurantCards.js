import { CDN_URL } from "../utils/contants";

const RestaurantCards = (props) => {
  const { resData, children } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality,
    areaName,
    sla
  } = resData?.info;

  const { header, subHeader } =
    props.resData?.info?.aggregatedDiscountInfoV3 || {};
  // console.log(header, subHeader);
  // console.log(resData?.info.aggregatedDiscountInfoV3);
  return (
    <div className="res-card bg-white-100 rounded-lg w-72 m-4 p-4  transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <img
          className="res-logo w-full h-40 object-cover  rounded-lg"
          alt="res-logo"
          loading="lazy"
          src={CDN_URL + cloudinaryImageId}
        />
        {/* <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg"></div>
        {header && 
        <p className="absolute bottom-2 left-2 text-white font-bold text-lg drop-shadow-md">
          {header +" "+ subHeader}
        </p>} */}
        {children}
      </div>
      <h3 className="font-bold text-lg mt-2 truncate">{name}</h3>
      <div className="flex items-center gap-2 text-sm mt-1">
        <span className="flex items-center gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            {/* Circle (green background) */}
            <circle cx="10" cy="10" r="10" fill="#16a34a"></circle>
            {/* Star (white) */}
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
          </svg>
          <span className="text-green-800 font-medium">{avgRating}</span>
        </span>

        <span className="font-bold truncate">{sla.slaString}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1  truncate">
        {cuisines.join(", ")}
      </p>
      <p className="text-sm text-gray-500 truncate">
        📍 {areaName === locality ? areaName : `${locality}, ${areaName}`}
      </p>
    </div>
  );
};

export const withOfferCard = (RestaurantCards) => {
  return (props) => {
    const { header, subHeader } =
      props.resData?.info?.aggregatedDiscountInfoV3 || {};
    // console.log(header, subHeader);
    return (
      <RestaurantCards {...props}>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent rounded-b-lg" />
        {header && (
          <div className="absolute bottom-2 left-2 text-white font-bold text-lg">
            {header} {subHeader}
          </div>
        )}
      </RestaurantCards>
    );
  };
};

export default RestaurantCards;
