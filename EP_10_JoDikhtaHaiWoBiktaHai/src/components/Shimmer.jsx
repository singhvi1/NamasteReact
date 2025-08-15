const Shimmer = () => {
    return (
        <div className="Shimmer-Container">
            {Array(10).fill("").map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-image"></div>
                    <div className="shimmer-text shimmer-line"></div>
                    <div className="shimmer-text shimmer-line"></div>
                    <div className="shimmer-text shimmer-short"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
