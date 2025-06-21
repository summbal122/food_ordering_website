import IMG_ONE from "../../images/food.jpg";
import IMG_TWO from "../../images/food1.jpg";
import IMG_THREE from "../../images/food2.jpg";

const Main = () => {
  return (
    <section className="bg-secondary p-5 py-16 lg:py-10 lg:px-15">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-dark-background leading-tight">
            Fresh, Fast & Delicious Meals
          </h1>
          <p className="text-gray-700 text-sm lg:text-lg">
            Experience the joy of healthy, chef-made food delivered straight to your door. Taste the freshness in every bite!
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-dark-background text-light-background font-semibold p-3 lg:px-8 lg:py-3 rounded hover:opacity-90 transition">
              View Menu
            </button>
            <button className="border border-dark-background text-dark-background p-3 font-semibold lg:px-8 lg:py-3 rounded hover:bg-dark-background hover:text-white transition">
              Visit Blog
            </button>
          </div>
        </div>
        <div className="relative h-[320px] lg:h-[400px] w-full flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG_ONE} alt="Food 1" className="rounded-xl shadow-lg w-full h-40 object-cover" />
            <img src={IMG_TWO} alt="Food 2" className="rounded-xl shadow-lg w-full h-40 object-cover" />
            <img src={IMG_THREE} alt="Food 3" className="rounded-xl shadow-lg col-span-2 w-full h-40 object-cover" />
          </div>
        </div>
      </div>

    
      <div className="mt-16 text-center">
        <p className="text-sm text-dark-background mb-4 uppercase tracking-wider font-semibold">
          Trending Now
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <img className="w-24 h-24 rounded-full shadow-sm hover:scale-105 transition" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" />
          <img className="w-24 h-24 rounded-full shadow-sm hover:scale-105 transition" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" />
          <img className="w-24 h-24 rounded-full shadow-sm hover:scale-105 transition" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" />
          <img className="w-24 h-24 rounded-full shadow-sm hover:scale-105 transition" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png" />
        </div>
      </div>
    </section>
  );
};

export default Main;
