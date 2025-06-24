import IMG_ONE from "../../images/food-order.jpg";
import IMG_TWO from "../../images/food-preparing.jpg";
import IMG_THREE from "../../images/food-delivered.jpg";
const About = ()=>{
  return(
    <div id="about"> 
  <div className="w-full grid place-items-center gap-6 py-16 px-6 bg-">
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-5xl gap-12 items-center">
    {/* Text Content */}
   
    <div className="flex flex-col text-center items-center lg:items-start lg:text-left gap-5  md:gap-10">
      <h2 className="text-xl md:text-5xl font-bold text-gray-900 leading-snug">
        Fast, Fresh, and <br /> <span className="text-primary">Right on Time</span>
      </h2>
      <ul className="space-y-2 md:space-y-4 text-gray-700 text-xs md:text-lg">
        <li className="flex items-center gap-4">
          <i className="fa-solid fa-check text-green-700 text-sm md:text-xl"></i>
          Hot and fresh, every time
        </li>
        <li className="flex items-center gap-4">
          <i className="fa-solid fa-check text-green-700 text-sm md:text-xl"></i>
          Delivered in 30 minutes or less
        </li>
        <li className="flex items-center gap-4">
          <i className="fa-solid fa-check text-green-700 text-sm md:text-xl"></i>
          Top Restaurants Near You
        </li>
      </ul>
    </div>

   
    <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
      <img
        src="https://chaophraya.co.uk/fileadmin/_processed_/9/5/csm_THAIKHUN_KIM_-_FOOD___DRINK_FINISHED_WEB_72-21_4161440349.jpg"
        alt="Delicious food"
        className="w-full object-cover h-full"
      />
    </div>
  </div>


  <div className="bg-white text-gray-800 p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-4xl text-center md:text-left">
    <p className="text-[12px] md:text-lg leading-relaxed">
      Our restaurant’s chefs are dedicated to delivering not just meals, but moments. They always strive to be on time and ensure every dish is served hot, fresh, and full of flavor — just the way you love it.
    </p>
  </div>
</div>


        <section className="bg-primary text-center">
          <div className="p-6 lg:p-20 space-y-7 md:space-y-14">
            <h2 className="text-xl md:text-3xl font-bold text-dark-background">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          
              <div className="flex flex-col items-center gap-5">
                <div className=" flex items-center justify-center shadow-md hover:shadow-2xl cursor-pointer">
                  <img className="rounded-md" src={IMG_ONE} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-md md:text-xl font-semibold text-dark-background">You Select</h3>
                  <p className="text-black text-xs md:text-md">Browse the menu and pick your favorite meals from nearby restaurants.</p>
                </div>
              </div>

          
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center justify-center shadow-md hover:shadow-2xl cursor-pointer">
                  <img className="rounded-md" src={IMG_TWO} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-md md:text-xl font-semibold text-dark-background">We Prepare</h3>
                  <p className="text-black text-xs md:text-md">Our chefs quickly prepare your order with fresh and hot ingredients.</p>
                </div>
              </div>

            
              <div className="flex flex-col items-center gap-8 ">
                <div className="flex items-center justify-center shadow-md hover:shadow-2xl cursor-pointer">
                  <img className="rounded-md" src={IMG_THREE} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-md md:text-xl font-semibold text-dark-background">Rider Delivers</h3>
                  <p className="text-black text-xs md:text-md">A rider picks it up and delivers it straight to your doorstep — fast & safe.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
    
  )
}
export default About;