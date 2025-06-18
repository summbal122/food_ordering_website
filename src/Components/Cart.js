import { removeItem , clearCart} from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  handleClearItems = () =>{
  dispatch(clearCart());
  }
   handleRemoveItems = () =>{
   dispatch(removeItem());
    }

  return  <div className="border-3 flex p-12 gap-12">
    <div> 
      <h1>Cart Items</h1>
      <ItemList items = {cartItems} />
      <button onClick={()=> handleClearItems()} >Clear</button>
      <div> 
         <button onClick={()=> handleRemoveItems()}>Remove</button>

      </div>
      </div>
      <div className="w-3xl h-40 border-1 text-center">
        <h2 className="font-bold">Checkout</h2>
        <div>
          {/* checkout items */}
          <ItemList items = {cartItems} />
        </div>
      </div>
     

    </div> 
  
}
export default Cart;