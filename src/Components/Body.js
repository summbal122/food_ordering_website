import { useState , useEffect , useContext} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import RestaurantCard , {promotedRestaurant} from "./RestaurantCard";
import IMG_ONE from "../../images/food-order.jpg";
import IMG_TWO from "../../images/food-preparing.jpg";
import IMG_THREE from "../../images/food-delivered.jpg";


const Body = ()=>{
  const [listOfTheRestaurants, setListOfRestaurants]= useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText]=useState("");
  const RestaurantCardPromoted = promotedRestaurant(RestaurantCard);
  // returns a new component that has label inside it. 
  useEffect(()=>{
    fetchData();
  },[]);

//fetch returns a promise
  const fetchData = async () => {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6109026&lng=77.1149472&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6109026&lng=77.1149472&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
   
   setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfTheRestaurants.length === 0 ? (
      <Shimmer/> ) : (
        <div>
    <div className="bg-gray-100 flex flex-col  gap-10">

     <div className=" flex justify-center flex-col gap-14 items-center p-20">
      <div className="flex gap-36 mx-auto items-center">  
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-semibold tracking-wide text-center leading-12">Fast, Fresh, and <br/>Right on Time</h2>
            <ul className="leading-14">
              <li className="flex items-center gap-5 text-gray-600"><i className="fa-solid fa-check text-green-800 text-xl "></i>Hot and fresh, every time</li>
              <li className="flex items-center gap-5  text-gray-600"><i className="fa-solid fa-check  text-green-800 text-xl"></i>Delivered in 30 minutes or less</li>
              <li className="flex items-center gap-5  text-gray-600"><i className="fa-solid fa-check  text-green-800 text-xl"></i>Top Restaurants Near You</li>
            </ul>
          </div>

         <div className="">
          <img className="w-lg rounded-md" src="https://chaophraya.co.uk/fileadmin/_processed_/9/5/csm_THAIKHUN_KIM_-_FOOD___DRINK_FINISHED_WEB_72-21_4161440349.jpg"/>
         </div>
         </div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg max-w-xl mx-auto text-center">
          <p className="text-lg font-medium">
            Our restaurant’s chefs are dedicated to delivering not just meals, but moments. They always strive to be on time and ensure every dish is served hot, fresh, and full of flavor — just the way you love it.
          </p>
        </div>
  
      </div>
 

   <section id="about" className="bg-primary text-center">
  <div className="p-20 space-y-14">
      <h2 className="text-3xl font-bold text-dark-background ">How It Works</h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 max-w-6xl mx-auto">
    <div className="flex flex-col items-center gap-8">
      <div className="w-xs flex items-center justify-center   shadow-md hover:shadow-2xl cursor-pointer"><img className="rounded-md " src={IMG_ONE} /></div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-dark-background ">You Select</h3>
        <p className="text-black text-md">Browse the menu and pick your favorite meals from nearby restaurants.</p>
      </div>
      
    </div>

    <div className="flex flex-col items-center gap-8">
      <div className="w-xs flex items-center justify-center shadow-md  hover:shadow-2xl cursor-pointer"><img className="rounded-md" src={IMG_TWO} /></div>
      <div className="space-y-2">
      <h3 className="text-xl font-semibold text-dark-background">We Prepare</h3>
      <p className="text-black">Our chefs quickly prepare your order with fresh and hot ingredients.</p>
      </div>
    </div>

    <div className="flex flex-col items-center gap-8">
      <div className="w-xs flex items-center justify-center shadow-md hover:shadow-2xl cursor-pointer"><img className="rounded-md" src={IMG_THREE} /></div>
      <div className="space-y-2">
      <h3 className="text-xl font-semibold text-dark-background">Rider Delivers</h3>
      <p className="text-black">A rider picks it up and delivers it straight to your doorstep — fast & safe.</p>
    </div>
  </div>
  </div>

  </div>

   </section>
 
   <section id="menu" className="flex flex-col py-14">
     <div className="flex mx-auto " >
      <h2 className="text-4xl font-semibold" >Explore Top Restaurants Near You</h2>
     </div>

      <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center justify-center mt-12">
              <i class="fa-solid fa-burger text-4xl text-amber-600"></i>
              <h1 className="text-2xl text-black font-Edu-SA-hand font-semi-bold"> Bite into Happiness</h1>
            </div>
            <div className="flex justify-center gap-4">
              <div className="flex gap-2">
                  <input 
                  data-testid = "searchInput"
                  className="border-1 border-dark-background text-sm p-2 rounded-sm" type="text" value={searchText} onChange={(event)=>{
                    setSearchText(event.target.value);
                  }} 
                  />

                  <button 
                  className="rounded-sm px-4 py-3 text-[10px] bg-black text-white  cursor-pointer hover:opacity-80"
                  onClick={()=> {
                  const searchList =  listOfTheRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRes(searchList);
                  }}>
                  Search </button>
              
                </div>
                <div>
                  <button data-testid= "filterTopRestaurants"
                  className="rounded-sm px-4 py-3 text-[10px] bg-black text-white cursor-pointer hover:opacity-80 "
                  onClick={()=>{
                    const filteredList = listOfTheRestaurants.filter(
                    (res) => res.info.avgRating > 4.3
                      );
                    setFilteredRes(filteredList);
                  }}
                  >Top Rated Restaurants</button>
                </div>
              
          </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-12 px-20 pb-28 ">

        {filteredRes.map((res) => (

          <Link key={res.info.id}  to={"/restaurants/" + res.info.id}>
            { res.info.type === "F" ? (<RestaurantCardPromoted resData={res} /> ) 
            :
            (<RestaurantCard  resData={res}/> ) }
           </Link>
          
        ))}
      </div>

      </section>

</div>



    </div>
    )}
export default Body;
