import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js';
import menuReducer from "./resItemsSlice.js";
import restaurantMenuReducer from "./restaurantsMenuSlice.js"


const appStore = configureStore ({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
    restaurantMenu: restaurantMenuReducer,

  }
})
export default appStore;
