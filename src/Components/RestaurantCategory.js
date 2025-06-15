import ItemList from "./ItemList";
const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {
  const handleClick = () =>{
  setShowIndex();
  }
  return( 
    <div>
      <div className="text-xl bg-gray-50 flex-col justify-between drop-shadow-md ">
        <div className=" flex justify-between p-4  " onClick={handleClick}>
        <span className="font-bold cursor-pointer text-xl">{data.title} ({data.itemCards.length})</span>
        <span> ↓ </span>
        </div>
      {showItems && <ItemList items={data.itemCards} 
       /> }
      
      </div>
      <h2>he</h2>
      
    </div>
  )
}
export default RestaurantCategory;