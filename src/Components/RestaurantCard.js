
import { URL } from "../utils/constant";


 const RestaurantCard = (props)=>{
    const { resData } = props;
    const {name,avgRating,cuisines} = resData?.info;
    return(
      <div 
       data-testid= "resCard"
       className="flex flex-col w-[240px] h-[320px] bg-white rounded-md shadow-md hover:shadow-2xl">
        <div className="border-b border-b-gray-200"> 
           <div className="flex justify-center p-5 border-light-background"> 
             <img className="rounded-md w-[180px] h-48  " src={URL + resData?.info.cloudinaryImageId} />
           </div>
      
        <div className="px-3 pb-2 flex items-center justify-between">
          <h1 className="font-bold text-xs"> {name}
        </h1>
          <div className="flex items-center gap-1">
           <span className="text-red-500 text-[10px] font-bold">{avgRating}</span>
           <span className="text-black text-[8px]">stars</span></div>
        </div>

        </div>
      
          <div className="px-3 py-4">
            <h4 className="text-gray-600 text-[8px]">{cuisines.join(', ')}</h4>
          </div>
          
        </div>
    )}

export const promotedRestaurant = (RestaurantCard) => {
      return (props) => {
        const { resData } = props;
        const avgRating = resData?.info?.avgRating;
        return (
          <div>
            {avgRating > 4.9 && <h5 >Promoted</h5> }
            <RestaurantCard {...props} /> 
          </div>
        );
      }
    }
export default RestaurantCard;

