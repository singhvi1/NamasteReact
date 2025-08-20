import { MENU_IMG } from "../utils/contants";
import { FaLeaf } from "react-icons/fa"; // for veg icon
import { GiMeat } from "react-icons/gi"; // for non-veg icon
const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div className="menu-page max-w-6xl mx-auto p-6 text-left">
      <section>
        {/* This is the key change. The alignment classes are on the parent <ul>. */}
        <ul className="flex flex-col items-start w-full">
          {items.map((item) => (
            <li
              key={item?.card?.info?.id}
              className=" flex justify-between items-center my-4 p-2 border-b border-gray-200 w-full h-auto"
            >
              {/* Left side: info */}
              <div className="flex-1 pr-4">
                <div className="flex items-center">
                  {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                    <FaLeaf className="text-green-600 mr-2" />
                  ) : (
                    <GiMeat className="text-red-600 mr-2" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item?.card?.info?.name}
                  </h3>
                </div>
                <p className="text-green-700 font-semibold mt-1">
                  ₹
                  {item?.card?.info?.defaultPrice
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.price / 100}
                </p>
                {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                  <p className="text-sm text-green-600 mt-1">
                    ⭐ {item?.card?.info?.ratings.aggregatedRating.rating} (
                    {item?.card?.info?.ratings.aggregatedRating.ratingCount ||
                      0}
                    )
                  </p>
                )}
                {item?.card?.info?.description && (
                  <p className="text-gray-600 text-sm mt-1">
                    {item?.card?.info?.description}
                  </p>
                )}
              </div>
              {/* Right side: image + add button */}
              {item?.card?.info?.imageId && (
                <div className="relative w-32 h-32 flex-shrink-0">
                  <img
                    src={
                      item?.card?.info?.imageId
                        ? MENU_IMG + item?.card?.info?.imageId
                        : "https://dummyimage.com/15/cccccc/000000&text=No+Image"
                    }
                    alt={item?.card?.info?.name}
                    className="w-full h-full object-cover rounded flex-shrink-0"
                  />
                  <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-green-700 font-semibold px-4 py-1 rounded shadow hover:bg-green-50">
                    ADD
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ItemList;
