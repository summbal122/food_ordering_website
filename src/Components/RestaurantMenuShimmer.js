const RestaurantMenuShimmer = () => {
  return (
    <div className="w-full bg-secondary py-10 flex justify-center md:px-4 min-h-screen animate-pulse">
      <div className="grid w-11/12 bg-white rounded-2xl shadow-lg p-2 md:p-6 space-y-4">
        {/* Header */}
        <div className="text-center border-b pb-6">
          <div className="h-6 md:h-8 bg-gray-200 rounded w-1/2 mx-auto mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto" />
        </div>

        {/* Category placeholders */}
        <div className="space-y-3">
          {[1, 2, 3].map((_, catIndex) => (
            <div
              key={catIndex}
              className="bg-gray-50 p-3 md:p-4 rounded-md shadow space-y-4"
            >
              {/* Category title */}
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 w-1/3 rounded" />
                <div className="h-4 bg-gray-200 w-5 rounded" />
              </div>

              {/* Items inside the category */}
              <div className="space-y-4">
                {[1, 2].map((_, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="grid gap-4 p-2 md:p-4 rounded-xl bg-white shadow"
                  >
                    <div className="relative min-w-[96px] h-24 rounded overflow-hidden">
                      <div className="bg-gray-200 w-24 h-24 rounded" />
                      <div className="absolute bottom-1 right-1 bg-gray-300 w-6 h-6 rounded"></div>
                    </div>

                    <div className="flex flex-col flex-grow space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="h-4 bg-gray-200 w-2/3 rounded" />
                        <div className="h-4 bg-gray-200 w-1/6 rounded" />
                      </div>
                      <div className="h-3 bg-gray-200 w-full rounded" />
                      <div className="h-3 bg-gray-200 w-5/6 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
