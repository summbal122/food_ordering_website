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
        className="flex flex-col w-[240px] h-[320px] bg-white rounded-md shadow-md hover:shadow-2xl cursor-pointer"
      >
       
        <div className="border-b border-b-gray-200">
          <div className="flex justify-center p-5 border-light-background">
            <img
              className="rounded-md w-[180px] h-48 object-cover"
              src={URL + cloudinaryImageId}
              alt={name}
            />
          </div>

          <div className="px-3 pb-2 flex items-center justify-between">
            <h1 className="font-bold text-xs">{name}</h1>
            <div className="flex items-center gap-1">
              <span className="text-red-500 text-[10px] font-bold">{avgRating}</span>
              <span className="text-gray-500 text-xs">★</span>
            </div>
          </div>
        </div>

       
        <div className="px-3 py-4">
          <h4 className="text-gray-600 text-[8px]">{cuisines?.join(", ")}</h4>
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
