import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "../features/form state/appState";
export const store = configureStore({
  reducer: {
    appSliceReducer,
  },
});
