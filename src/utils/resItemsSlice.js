import { createSlice } from "@reduxjs/toolkit";

const resMenu = createSlice({
  name: "menu",
  initialState: {
    menuItems: []
  },
  reducers: {
    addMenuItems: (state, action) => {
      // Optional: ensure payload is an array before assigning
      if (Array.isArray(action.payload)) {
        state.menuItems = action.payload;
      } else {
        console.warn("addMenuItems expected an array but got:", action.payload);
        state.menuItems = []; 
      }
    }
  }
});
export const { addMenuItems } = resMenu.actions;
export default resMenu.reducer;