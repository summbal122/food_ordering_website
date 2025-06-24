import { Link } from "react-router";
import { URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { id, name, avgRating, cuisines, cloudinaryImageId } = resData?.info;

  return (
    <Link to={`/restaurant/${id}`} className="no-underline text-inherit">
      <div
        data-testid="resCard"
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col"
      >
        <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={URL + cloudinaryImageId}
            alt={name}
          />
        </div>

      <div className="p-2">
        <div className="px-3 py-2 flex items-center justify-between border-b border-gray-200">
          <h1 className="font-semibold text-[10px] sm:text-xs md:text-sm truncate">{name}</h1>
          <div className="flex items-center gap-1">
            <span className="text-orange-500 font-bold text-[8px] sm:text-xs md:text-sm">
              {avgRating}
            </span>
            <span className="text-yellow-500 text-[8px] sm:text-xs md:text-sm">★</span>
          </div>
        </div>

    
        <div className="px-3 py-2">
          <p className="text-gray-500 text-[8px] sm:text-[10px] md:text-xs truncate">
            {cuisines?.join(", ")}
          </p>
        </div>
        </div>
      </div>
    </Link>
  );
};


export default RestaurantCard;
