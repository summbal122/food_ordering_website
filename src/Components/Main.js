import IMG_ONE from "../../images/food.jpg";
import IMG_TWO from "../../images/food1.jpg";
import IMG_THREE from "../../images/food2.jpg";
const Main = () => {
  return (

    <div className="flex gap-7 bg-secondary items-center justify-center p-20">
      
      <div className=" w-2/4 flex flex-col items-center justify-center gap-2">
        <div className="flex gap-2">
        <img className=" w-[170px] lg:w-[220px] lg:h-44 rounded-md" src={IMG_ONE}/> 
        <img className="w-[170px] lg:w-[220px] lg:h-44 rounded-md" src={IMG_TWO}/>
        </div>
        <div>
        <img className="w-[170px] lg:w-[220px] lg:h-44 rounded-md" src={IMG_THREE}/>
      </div>
         
     </div>
      
      <div className="flex flex-col items-center w-2/4 gap-14 ">
        <div className="flex flex-col items-center gap-8  text-center">
         <h1 className="text-2xl lg:text-4xl w-2/3 leading-10  xl:leading-12 font-thick ">Fresh and healthy food for your table
        </h1>
        <div className="flex gap-3">
          <button className="bg-dark-background py-3 px-12 rounded-sm text-sm text-light-background font-bold hover:opacity-90">
           MENU
         </button>
         <button className="bg-dark-background py-3 px-12 rounded-sm text-sm text-light-background font-bold hover:opacity-90">
           BLOG
         </button>
         

        </div>

        </div>
        <div>
        <p className="text-dark-background text-[12px]">Popular these days!</p>
        <div className="flex justify-between">
          <img className="w-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" />
          <img className="w-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png"/>
          <img className="w-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png"/>
          <img className="w-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png"/>
        </div>
          
       </div>
      
       
      </div> 
    </div>
  );
};

export default Main;

