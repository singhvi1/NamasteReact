const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  mx-10">
      {Array(10).fill("").map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-white/5 rounded-lg overflow-hidden shadow-md"
        >
          {/* Image placeholder */}
          <div className="bg-gray-300 h-40 w-full"></div>

          {/* Text placeholders */}
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
