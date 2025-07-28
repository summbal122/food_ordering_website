
import { Link as ScrollLink } from "react-scroll";
const Main = () => {
  return (
    <section className="bg-secondary p-5  py-12 md:py-16 lg:py-10 lg:px-15">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-xl md:text-3xl lg:text-5xl 2xl:text-7xl font-bold text-dark-background leading-tight">
            Fresh, Fast & Delicious Meals
          </h1>
          <p className="text-gray-700 text-sm lg:text-lg 2xl:text-2xl">
            Experience the joy of healthy, chef-made food delivered straight to your door. Taste the freshness in every bite!
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-dark-background text-light-background text-xs md:text-lg 2xl:text-2xl font-semibold p-3 2xl:p-8 lg:px-8 lg:py-3 rounded hover:opacity-90 transition">
              <ScrollLink to="menu" smooth={true} duration={600}>
                View Menu
              </ScrollLink>
            </button>
            <button className="border border-dark-background text-dark-background text-xs md:text-lg 2xl:text-2xl p-3 2xl:p-8 font-semibold lg:px-8 lg:py-3 rounded hover:bg-dark-background hover:text-white transition">
               <ScrollLink to="about" smooth={true} duration={600}>
                About
              </ScrollLink>
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4">
             <img src="https://assets.childrens.com/m/4a4a6a61f912a1e1/original/shutterstock_369960455_800x480.jpg" alt="Food 1" className="rounded-xl shadow-lg w-full h-40 object-cover" />
            <img src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-also-known-as-food-platter-is-complete-lunch-dinner-meal-closeup-selective-focus_466689-9144.jpg" alt="Food 2" className="rounded-xl shadow-lg w-full h-40 object-cover" />
            <img src="https://img.freepik.com/free-photo/vivid-dishes-ravioli-pasta-arranged-row-wooden-table_23-2148246874.jpg" alt="Food 3" className="rounded-xl shadow-lg col-span-2 w-full h-50 object-cover" /> 
          </div>
        </div>
      </div>

    
      <div className="mt-16 text-center">
        <p className="text-xs md:text-sm 2xl:text-xl text-dark-background mb-4 uppercase tracking-wider font-semibold">
          Trending Now
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <img className="w-12 h-12 md:w-24 md:h-24 rounded-full shadow-sm hover:scale-105 transition" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" />
          <img className=" w-12 h-12 md:w-24 md:h-24 rounded-full shadow-sm hover:scale-105 transition" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" />
          <img className="w-12 h-12 md:w-24 md:h-24 rounded-full shadow-sm hover:scale-105 transition" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" />
          <img className="w-12 h-12 md:w-24 md:h-24 rounded-full shadow-sm hover:scale-105 transition" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png" />
        </div>
      </div>
    </section>
  );
};

export default Main;
