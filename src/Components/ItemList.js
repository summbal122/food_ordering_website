import { useDispatch } from "react-redux";
import { URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {

        const info = item.card?.info || item;

        if (!info) return null;

        const price = info.price ? info.price / 100 : info.defaultPrice / 100;

        return (
          <div
            data-testid="foodItems"
            key={info.id || index}
            className="grid gap-4 p-4 rounded-xl shadow hover:shadow-lg transition duration-200 bg-white"
          >
            <div className="relative min-w-[96px] h-24 rounded overflow-hidden">
              <img
                src={URL + info.imageId}
                alt={info.name}
                className="object-cover w-24 h-24 rounded"
              />
              <button
                className="absolute bottom-1 right-1 bg-green-500 hover:bg-green-600 text-white text-sm px-2 py-1 rounded shadow-md"
                onClick={() => handleAddItems(info)}
              >
                +
              </button>
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm text-gray-800">{info.name}</h3>
                <span className="text-xs text-red-400 font-semibold">{price} RS</span>
              </div>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {info.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default ItemList;
