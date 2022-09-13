import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addList: false,
  addCard: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleAddList(state, action) {
      state.addList = action.payload.set;
    },
    toggleAddCard(state, action) {
      state.addCard = action.payload.set;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
