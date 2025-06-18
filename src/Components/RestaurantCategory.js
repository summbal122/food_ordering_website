import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div>
      <div className="text-xl bg-gray-50 flex-col justify-between drop-shadow-md">
        <div
          className="flex justify-between items-center p-4 gap-8 cursor-pointer"
          onClick={setShowIndex}
        >
          <span className="font-semibold text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <i
            className={`fa-solid fa-arrow-${showItems ? "up" : "down"} text-xs`}
          ></i>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;