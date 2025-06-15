import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{
  // const[resInfo, setResInfo] = useState(null);

  const dummy = "data";
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);


  // useEffect(()=>{
  //   fetchMenu();

  // }, [])
  // const fetchMenu = async()=>{
  //   const data = await fetch(MENU_URL + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  if(resInfo=== null) return <Shimmer/>

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info ;
  const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter ( c => c.card?.card?.["@type"] === 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 

  return(
    <div className="text-center flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-4 w-6/12">
      <span className="font-bold text-2xl">{name}</span>
      <span className="text-sm">{costForTwoMessage}</span>
      {categories.map((category, index) => (
        < RestaurantCategory 
        data = {category?.card?.card}  
        key={category?.card?.card?.title || index}
        showItems={index === showIndex ? true: false}
        setShowIndex={() => setShowIndex(index)}
        dummy={dummy}
        />
      ))
      }  
    </div>
    </div>
  )
}
export default RestaurantMenu;