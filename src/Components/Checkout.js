import { useSelector } from "react-redux";
import { URL } from "../utils/constant"; 
import { Link } from "react-router";
import { calculateTotalAmount } from "../utils/totalAmount";





const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = calculateTotalAmount(cartItems);
  console.log(cartItems);

  return (
    <div className="min-h-screen w-full text-center space-y-6 p-4">
    <div className="p-4 bg-primary flex items-center rounded-md justify-between  ">
      <h1 className="font-bold text-4xl">Checkout</h1>
      <h2 className="text-end hover:underline text-sm"> <Link to="/">Home</Link></h2></div>
      
    <div>
      <div className="flex justify-center"> 
      <div className="grid grid-cols-1 lg:grid-cols-2 w-8/12 lg:w-11/12 items-center gap-10">
      <div>

<form class="bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto p-6 md:p-10 space-y-6">
  <h2 class="text-2xl font-bold text-gray-800 text-center">Your Details</h2>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div>
      <input
        type="text"
        placeholder="First Name"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div>
      <input
        type="text"
        placeholder="Last Name"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div>
      <input
        type="email"
        placeholder="Email"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div>
      <input
        type="tel"
        placeholder="Phone Number"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div>
      <input
        type="text"
        placeholder="City"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div>
      <input
        type="text"
        placeholder="State / Province"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div>
      <input
        type="text"
        placeholder="Postal Code (Optional)"
        class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div class="lg:col-span-2">
      <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
      <textarea
        rows="3"
        placeholder="Street, City, ZIP Code"
        required
        class="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
      ></textarea>
    </div>
  </div>

  <button
    type="submit"
    class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold"
  >
    Place Order
  </button>
</form>
      </div>
     <div className="bg-white shadow-lg py-8 px-10 space-y-9 rounded-lg"> 
      <h1 className="text-2xl font-bold text-gray-800 text-center">Your Order</h1>
      <div className="max-h-96 overflow-y-auto ">
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-300 pb-2 gap-4"
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-md object-cover"
                  src={URL + item.imageId}
                  alt={item.name}
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {typeof item.price === "number"
                      ? `$${(item.price / 100).toFixed(2)} × ${
                          item.quantity
                        } = $${(
                          (item.price * item.quantity) /
                          100
                        ).toFixed(2)}`
                      : "Item not available"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{item.quantity}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-lg font-bold text-black">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Checkout;
