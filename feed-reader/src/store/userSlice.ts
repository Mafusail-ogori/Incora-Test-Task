import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../models/user";

const userInitialState: user = {
  login: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: userInitialState,
  },
  reducers: {
    verifyUser(state, action: PayloadAction<{ user: user }>) {
      state.user = action.payload.user;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
