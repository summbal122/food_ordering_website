import { useDispatch } from "react-redux";
import { URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
  const dispatch = useDispatch();

const handleAddItems = (item) =>{
  //dispatch an action
  dispatch(addItem(item));

}
  return (
    <div> 
      {items.map( (item) => 
      <div data-testid="foodItems"
      key={item.card.info.id} className="px-3 py-2 mb-6  border-gray-200 border-b-1 flex gap-8 ">
        <img className="w-30" src={URL + item.card.info.imageId}/> 
        <button 
        className="bg-blue-500 text-white p-1 rounded absolute" 
        onClick={() => handleAddItems(item)} // i am passing a callback function
        >Add +</button>
        
        <div>
        <div className="flex gap-3 text-2xl py-4"> 
          <span className="text-xl"> {item.card.info.name}</span>
          <span className="font-bold text-lg"> {item.card.info.price ?
          item.card.info.price/100 : item.card.info.defaultPrice/100} RS </span>
        </div>
        <p className="text-sm"> {item.card.info.description}</p>
        
</div>

      </div>
     ) }
         </div>

      );
};
export default ItemList;
