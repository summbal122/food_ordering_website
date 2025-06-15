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

  return  <div>
      <h1>Cart Items</h1>
      <ItemList items = {cartItems} />
      <button onClick={()=> handleClearItems()} >Clear</button>
      <div> 
         <button onClick={()=> handleRemoveItems()}>Remove</button>

      </div>
     

    </div> 
  
}
export default Cart;