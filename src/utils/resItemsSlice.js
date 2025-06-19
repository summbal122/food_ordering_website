import { createSlice } from "@reduxjs/toolkit";

const resMenu = createSlice({
  name: "menu",
  initialState: {
    menuItems: []
  },
  reducers: {
    addMenuItems: (state, action) => {
    state.menuItems = action.payload;
}
  }
});

export const { addMenuItems } = resMenu.actions;
export default resMenu.reducer;
