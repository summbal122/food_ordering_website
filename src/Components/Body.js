import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { Shimmer } from "./Shimmer";
import RestaurantCard, { promotedRestaurant } from "./RestaurantCard";
import Cart from "./Cart";
import { addMenuItems } from "../utils/resItemsSlice";
import IMG_ONE from "../../images/food-order.jpg";
import IMG_TWO from "../../images/food-preparing.jpg";
import IMG_THREE from "../../images/food-delivered.jpg";

const Body = () => {
  const dispatch = useDispatch();
  const allRestaurants = useSelector((store) => store.menu.menuItems);

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = promotedRestaurant(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6109026&lng=77.1149472&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    dispatch(addMenuItems(resList));
    console.log(resList);
  };

  const handleSearch = () => {
    const searchList = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchList);
  };

  const filterTopRated = () => {
    const topRated = allRestaurants.filter((res) => res.info.avgRating > 4.3);
    setFilteredRestaurants(topRated);
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="bg-gray-100 flex flex-col gap-10">
        {/* Hero Section */}
        <div className="w-full grid gap-15 place-items-center py-10 px-4">
         
          <div className="grid grid-cols-1 lg:grid-cols-2 w-9/12  gap-6">
            <div className="grid gap-5 place-content-center place-items-center lg:place-items-start ">
              <h2 className="text-xl md:text-4xl font-semibold tracking-wide text-center leading-9 lg:leading-12">
                Fast, Fresh, and <br /> Right on Time
              </h2>
              <ul className="leading-10 text-xs md:text-lg">
                <li className="flex items-center gap-5 text-gray-600">
                  <i className="fa-solid fa-check text-green-800 text-xl "></i>
                  Hot and fresh, every time
                </li>
                <li className="flex items-center gap-5 text-gray-600">
                  <i className="fa-solid fa-check text-green-800 text-xl"></i>
                  Delivered in 30 minutes or less
                </li>
                <li className="flex items-center gap-5 text-gray-600">
                  <i className="fa-solid fa-check text-green-800 text-xl"></i>
                  Top Restaurants Near You
                </li>
              </ul>
            </div>

            <div>
              <img
                className=" rounded-md"
                src="https://chaophraya.co.uk/fileadmin/_processed_/9/5/csm_THAIKHUN_KIM_-_FOOD___DRINK_FINISHED_WEB_72-21_4161440349.jpg"
              />
            </div>
          </div>
          <div className="bg-white text-gray-800 p-4 rounded-2xl shadow-lg lg:max-w-5/12">
            <p className="lg:text-lg">
              Our restaurant’s chefs are dedicated to delivering not just meals, but moments. They always strive to be on time and ensure every dish is served hot, fresh, and full of flavor — just the way you love it.
            </p>
          </div>

        </div>



        <section id="about" className="bg-primary text-center">
          <div className=" p-5 lg:p-20 space-y-14">
            <h2 className="text-3xl font-bold text-dark-background">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          
              <div className="flex flex-col items-center gap-5">
                <div className=" flex items-center justify-center shadow-md hover:shadow-2xl cursor-pointer">
                  <img className="rounded-md" src={IMG_ONE} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-dark-background">You Select</h3>
                  <p className="text-black text-md">Browse the menu and pick your favorite meals from nearby restaurants.</p>
                </div>
              </div>

          
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center justify-center shadow-md hover:shadow-2xl cursor-pointer">
                  <img className="rounded-md" src={IMG_TWO} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-dark-background">We Prepare</h3>
                  <p className="text-black">Our chefs quickly prepare your order with fresh and hot ingredients.</p>
                </div>
              </div>

            
              <div className="flex flex-col items-center gap-8 ">
                <div className="flex items-center justify-center shadow-md hover:shadow-2xl cursor-pointer">
                  <img className="rounded-md" src={IMG_THREE} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-dark-background">Rider Delivers</h3>
                  <p className="text-black">A rider picks it up and delivers it straight to your doorstep — fast & safe.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

<section id="menu" className="flex flex-col py-10 px-4 sm:px-6 md:px-10 lg:px-20">
  {/* Heading */}
  <div className="flex justify-center text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-2xl">
      Explore Top Restaurants Near You
    </h2>
  </div>

  {/* Subheading + Icon */}
  <div className="flex flex-col items-center gap-2 mt-10">
    <i className="fa-solid fa-burger text-3xl sm:text-4xl text-amber-600"></i>
    <h1 className="text-xl sm:text-2xl text-black font-Edu-SA-hand font-semibold">
      Bite into Happiness
    </h1>
  </div>

  {/* Search & Filter */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
    <div className="flex gap-2 justify-center">
      <input
        data-testid="searchInput"
        className="border border-gray-400 text-sm p-2 rounded-sm w-60 sm:w-auto"
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button
        className="rounded-sm px-4 py-2 text-xs bg-black text-white hover:opacity-80"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
    <div className="flex justify-center">
      <button
        data-testid="filterTopRestaurants"
        className="rounded-sm px-4 py-2 text-xs bg-black text-white hover:opacity-80"
        onClick={filterTopRated}
      >
        Top Rated Restaurants
      </button>
    </div>
  </div>

  {/* Restaurant Cards */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 pb-20">
    {filteredRestaurants.map((res) => (
      <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
        {res.info.type === "F" ? (
          <RestaurantCardPromoted resData={res} />
        ) : (
          <RestaurantCard resData={res} />
        )}
      </Link>
    ))}
  </div>
</section>

      </div>
    </div>
  );
};

export default Body;
