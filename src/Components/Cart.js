import { removeItem, clearCart, addItem } from "../utils/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { URL } from "../utils/constant";
import { Link } from "react-router";
import { calculateTotalAmount } from "../utils/totalAmount";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };
const totalAmount = calculateTotalAmount(cartItems);

  return (
    <div className="shadow-lg absolute w-5/6 md:w-2/6 h-[550px] top-0 right-0 bg-white rounded-xl z-50 border border-gray-200">
      <div className="w-full h-full flex flex-col justify-between p-6">

        <div className="flex items-center justify-between mb-4">
          <h1 className="text-sm md:text-2xl font-bold text-gray-800">Your Cart</h1>
          <button
            className=" md:text-sm text-red-500 text-xs underline hover:text-red-700"
            onClick={handleClearItems}
          >
            Clear All
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Your cart is empty.
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-300 pb-2 gap-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 md:w-12 h-12 rounded-md object-cover"
                      src={URL + item.imageId}
                      alt={item.name}
                    />
                    <div className="text-left">
                      <p className="text-[8px] md:text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="text-[6px] md:text-xs text-gray-500">
                        {typeof item.price === "number"
                          ? `$${(item.price / 100).toFixed(2)} × ${item.quantity} = $${((item.price * item.quantity) / 100).toFixed(2)}`
                          : "Item not available"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="px-2 py-1 text-xs md:text-sm bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span className="text-[8px] md:text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="px-2 py-1 text-xs md:text-sm bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs md:text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-xs md:text-lg font-bold text-green-600">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
              <Link to="/checkout">
                <button className="w-full bg-black text-white text-[8px] md:text-sm py-3 rounded-md hover:bg-gray-800 transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
