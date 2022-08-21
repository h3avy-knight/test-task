import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "addProducts",
  initialState: {
    value: [],
  },
  reducers: {
    addData: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData } = appSlice.actions;

export default appSlice.reducer;
