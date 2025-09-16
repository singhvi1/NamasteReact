// ShimmerSuggestion.jsx
const ShimmerSuggestion = () => {
  return (
    <div className="p-4 bg-black bg-opacity-70 text-white">
      <h2 className="text-lg font-bold mb-4 animate-pulse">Loading suggestions...</h2>
      <div className="flex flex-wrap gap-4">
        {Array(6).fill("").map((_, i) => (
          <div
            key={i}
            className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerSuggestion;
