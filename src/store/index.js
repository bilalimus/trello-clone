import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import uiSlice from "./uiSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
