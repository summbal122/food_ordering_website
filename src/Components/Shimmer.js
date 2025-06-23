const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 px-2 py-4 md:grid-cols-3 lg:grid-cols-4 w-10/12 2xl:grid-cols-7 gap-3 md:gap-8 2xl:gap-8 mt-8 md:mt-12 pb-10 lg:pb-20 mx-auto">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
          data-testid="Shimmer"
            key={index}
            className="bg-gray-200 h-56 rounded-lg animate-pulse shadow-md"
          >
            <div className="h-32 bg-gray-300 rounded-t-lg"></div>
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export {Shimmer} ;
