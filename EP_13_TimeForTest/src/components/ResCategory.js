  import ItemList from "./ItemList";
  import { ChevronDown } from "lucide-react"; // ✅ Import icon

  const ResCategory = ({ data , showItems, setShowItems}) => {

    const handleClick = () => {
      setShowItems();
    };
    return (
      <div className="px-2 sm:px-4">
        {/* header */}
        <div
          className="
            w-full sm:w-10/12 md:w-8/12 lg:w-6/12 
            bg-white shadow-lg p-4 m-auto my-4 
            rounded-xl transition-all
          "
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold text-base sm:text-lg">
              {data.title} ({data.itemCards.length})
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                showItems ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* body */}
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    );
  };

  export default ResCategory;
