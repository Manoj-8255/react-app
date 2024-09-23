const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(20)].map((x, i) => (
        <div className="shimmer-card" key={i}></div>
      ))}
    </div>
  );
};

export default Shimmer;
