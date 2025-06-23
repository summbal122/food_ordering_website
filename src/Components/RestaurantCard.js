import { Link } from "react-router";
import { URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { id, name, avgRating, cuisines, cloudinaryImageId } = resData?.info;

  return (
    <Link
      to={`/restaurant/${id}`}
      className="no-underline text-inherit"
    >
      <div
        data-testid="resCard"
        className="h-[210px] md:h-[320px] 2xl:h-[365px] bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl cursor-pointer"
      >
       
        <div className="border-b space-y-2 border-b-gray-200">
        <div className="flex h-36 md:h-56 p-2 w-full justify-center border border-light-background overflow-hidden">
          <img
            className="w-full object-fill md:rounded-md"
            src={URL + cloudinaryImageId}
            alt={name}
          />
        </div>

          <div className="px-3 pb-2 flex items-center justify-between">
            <h1 className="font-bold text-[6px] md:text-xs 2xl:text-sm">{name}</h1>
            <div className="flex items-center gap-1.5">
              <span className="text-red-500 text-[4px] md:text-[10px] 2xl:text-sm font-bold">{avgRating}</span>
              <span className="text-primary-darker text-[4px] md:text-xs 2xl:text-sm">★</span>
            </div>
          </div>
        </div>

       
        <div className="p-1 px-3 md:py-4">
          <h4 className="text-gray-600 text-[5px] md:text-[8px] 2xl:text-sm">{cuisines?.join(", ")}</h4>
        </div>
      </div>
    </Link>
  );
};

export const promotedRestaurant = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const avgRating = resData?.info?.avgRating;
    return (
      <div>
        {avgRating > 4.9 && <h5 className="text-sm text-orange-500 font-semibold mb-1">Promoted</h5>}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
