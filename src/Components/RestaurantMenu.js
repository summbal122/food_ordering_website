import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;

  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex bg-secondary flex-col items-center py-10 px-4 min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 space-y-4">
       
        <div className="text-center border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-500">{cuisines?.join(", ")}</p>
          <div className="flex justify-center items-center gap-4 mt-2">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-600 text-sm">{costForTwoMessage}</span>
          </div>
        </div>


        <div className="space-y-3">
          {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title || index}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
  }
/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
