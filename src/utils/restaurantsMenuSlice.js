
import { createSlice } from "@reduxjs/toolkit";

const restaurantsMenuSlice = createSlice({
  name: "restaurantMenu",
  initialState: {
    menu: {},
  },
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setMenu } = restaurantsMenuSlice.actions;
export default restaurantsMenuSlice.reducer;
