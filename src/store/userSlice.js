import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    removeUser(state) {
      state.id = null;
      state.token = null;
      state.email = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
