import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import { addMenuItems } from "../utils/resItemsSlice";
import About from "./About";
import {Shimmer} from "../Components/Shimmer"
import { RES_LIST } from "../utils/constant";

const Body = () => {
  const dispatch = useDispatch();
  const allRestaurants = useSelector((store) => store.menu.menuItems);

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    const resList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    dispatch(addMenuItems(resList));

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
     <div className="bg-gray-100 ">
      <About/>


     <section id="menu" className="flex flex-col py-10 items-center sm:px-6 md:px-2 lg:px-2">
  <div className="flex justify-center text-center">
    <h2 className="text-md md:text-2xl lg:text-3xl 2xl:text-6xl font-semibold max-w-3xl">
      Explore Top Restaurants Near You
    </h2>
  </div>

  <div className="flex flex-col items-center gap-2 mt-5 md:mt-10">
    <i className="fa-solid fa-burger text-3xl sm:text-4xl text-primary"></i>
    <h1 className="text-sm lg:text-2xl 2xl:text-4xl text-black font-Edu-SA-hand font-semibold">
      Bite into Happiness
    </h1>
  </div>

  <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 mt-5 md:mt-8">
    <div className="flex gap-2 justify-center">
      <input
        data-testid="searchInput"
        className="border border-gray-400 text-[10px] md:text-xs p-2 rounded-sm w-60 sm:w-auto"
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button
        className="rounded-sm px-4 py-2 text-[10px]  md:text-xs bg-black text-white hover:opacity-80"
        onClick={handleSearch}
      >Search</button>
    </div>
    <div className="flex justify-center">
      <button
        data-testid="filterTopRestaurants"
        className="rounded-sm px-4 py-2 text-[10px]  md:text-xs bg-black text-white hover:opacity-80"
        onClick={filterTopRated}
      >
        Top Rated Restaurants
      </button>
    </div>
  </div>

  <div className="grid grid-cols-2 px-2  py-4 md:grid-cols-3 lg:grid-cols-4 w-10/12 2xl:grid-cols-7 gap-3 md:gap-8 2xl:gap-8 mt-8 md:mt-12 pb-10 lg:pb-20">
    {filteredRestaurants.map((res) => (
      <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
          <RestaurantCard resData={res} />
      </Link>
    ))}
  </div>
     </section>

      </div>
   
  );
};

export default Body;
