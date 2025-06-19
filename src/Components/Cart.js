import { removeItem, clearCart } from "../utils/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { URL } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="shadow-md absolute w-sm min-h-[450px] top-0 right-0 bg-gray-100 flex justify-center rounded-md">
      <div className="w-full p-5 text-center flex flex-col items-center border border-gray-200">
        <h1 className="text-xl font-semibold mb-4">Cart</h1> 
         <p
              className=" text-red-400 text-sm "
              onClick={handleClearItems}
            >
              Clear Cart
            </p>
            

        {cartItems.length === 0 ? (
          <p className="absolute top-6/12">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm w-full space-y-2 items-center">
                <div className="flex items-center gap-2">
                <img 
                className="w-10 rounded-full"
                src={URL + item.imageId} />
                <p>{item.name}</p>
                </div>
               
                <button
                  className="text-red-500 text-sm"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              

              </div>
            ))}
            <button className=" absolute bottom-6 bg-black text-sm text-white py-3 px-5 rounded-md ">
              Checkout
            </button>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
