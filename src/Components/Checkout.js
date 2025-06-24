import { useSelector } from "react-redux";
import { URL } from "../utils/constant"; 
import { Link } from "react-router";
import { calculateTotalAmount } from "../utils/totalAmount";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = calculateTotalAmount(cartItems);

  const handlebuttonClick = (e) => {
  e.preventDefault(); // Prevent page reload
  dispatch(clearCart());
  setOrderPlaced(true); // Set flag to true
};
 if (orderPlaced) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-dark-background p-6">
      <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">🎉 Order Placed!</h1>
      <p className="text-md lg:text-xl text-white mb-6">
        Thank you for your order. Your delicious meal is being prepared and will arrive soon!
      </p>
      <Link
        to="/"
        className="bg-light-background hover:opacity-80 text-black px-6 py-3 rounded-md text-sm lg:text-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
  return (
    <div className="min-h-screen w-full text-center space-y-6 p-2 lg:p-4">
      <div className="p-4 bg-primary flex items-center rounded-md justify-between">
        <h1 className="font-bold text-xl lg:text-4xl">Checkout</h1>
        <h2 className="text-end hover:underline text-xs lg:text-sm">
          <Link to="/">Home</Link>
        </h2>
      </div>

      <div className="lg:mt-24">
        <div className="flex justify-center"> 
          <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-11/12 items-center gap-10">
     {/* Details Form */}
            <div>
              <form className="bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto py-4 px-3 lg:p-6 space-y-3 lg:space-y-6">
                <h2 className="text-md lg:text-2xl 2xl:text-4xl font-bold text-gray-800 text-center">Your Details</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <input type="text" placeholder="First Name" required className="text-xs lg:text-sm 2xl:text-2xl w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" required className="text-xs lg:text-sm 2xl:text-2xl w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" required className="text-xs lg:text-sm 2xl:text-2xl w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" required className="text-xs lg:text-sm 2xl:text-2xl w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <input type="text" placeholder="City" required className="text-xs lg:text-sm 2xl:text-2xl w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <input type="text" placeholder="State / Province" required className="text-xs lg:text-sm 2xl:text-2xl w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <input type="text" placeholder="Postal Code (Optional)" className="text-xs lg:text-sm 2xl:text-2xl w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea rows="3" placeholder="Street, City, ZIP Code" required className="text-xs lg:text-sm 2xl:text-2xl w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                    <p className="text-[10px] lg:text-sm text-gray-500 italic mt-1">
                      💬 Please ensure your address is accurate to avoid delivery delays.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handlebuttonClick}
                  type="submit"
                  className="text-xs lg:text-sm 2xl:text-2xl w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold shadow-md"
                >
                   Place Order Now
                </button>
              </form>
            </div>

        {/* Order Details */}
            <div className="bg-white shadow-lg py-4 lg:py-8 px-3 lg:px-10 space-y-9 rounded-lg"> 
              <h1 className="text-md lg:text-2xl 2xl:text-4xl font-bold text-gray-800 text-center flex items-center justify-center gap-2">
                Your Order
                {cartItems.length > 0 && (
                  <span className="bg-green-100 text-green-800 text-xs lg:text-sm px-2 py-1 rounded-full animate-pulse">
                  🛵 ETA 25–35 mins
                  </span>
                  )}
                </h1>
              
              <div className="max-h-96 overflow-y-auto">
                {cartItems.map((item) => {
                  return (
                    <div key={item.id} className="flex justify-between items-center border-b border-gray-300 pb-2 gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-12 h-12 rounded-md object-cover"
                          src={URL + item.imageId}
                          alt={item.name}
                        />
                        <div className="text-left">
                          <p className="text-[12px] lg:text-sm font-medium text-gray-800">{item.name}</p>
                          <p className="text-[10px] lg:text-xs text-gray-500">
                            {typeof item.price === "number"
                              ? `$${(item.price / 100).toFixed(2)} × ${item.quantity} = $${(
                                  (item.price * item.quantity) / 100
                                ).toFixed(2)}`
                              : "Item not available"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs lg:text-sm font-semibold">{item.quantity}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-md lg:text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-md lg:text-lg font-bold text-black">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-16 px-4">
  <h2 className="text-center text-lg lg:text-3xl font-bold text-gray-800 mb-8">
    Why Choose Us? 🍔
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-md lg:text-xl font-semibold text-primary mb-2">🚀 Fast Delivery</h3>
      <p className="text-sm text-gray-600">
        Get your food delivered in 30 minutes or less, guaranteed.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-md lg:text-xl font-semibold text-primary mb-2">👨‍🍳 Top Quality</h3>
      <p className="text-sm text-gray-600">
        Our chefs craft meals using the freshest ingredients every time.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-md lg:text-xl font-semibold text-primary mb-2">📍 Local Favorites</h3>
      <p className="text-sm text-gray-600">
        We partner with the best-rated restaurants near you.
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Checkout;
