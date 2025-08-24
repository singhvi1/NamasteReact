const RestaurantMenuShimmer = () => {
  return (
    <div className="menu-page max-w-6xl mx-auto p-6 animate-pulse">
      {/* Restaurant Header Shimmer */}
      <header className="mb-8 text-center md:text-left">
        <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      </header>

      {/* Menu Section Shimmer */}
      <section>
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>

        <ul className="flex flex-col items-start w-full">
          {[...Array(5)].map((_, index) => (
            <li key={index} className="flex justify-between items-center my-4 p-2 border-b border-gray-200 w-full">
              {/* Left side: info shimmer */}
              <div className="flex-1 pr-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>

              {/* Right side: image shimmer */}
              <div className="relative w-32 h-32 flex-shrink-0 bg-gray-200 rounded"></div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RestaurantMenuShimmer;