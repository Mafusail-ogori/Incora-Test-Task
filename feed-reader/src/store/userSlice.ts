import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";

const userInitialState: User[] = [];

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: userInitialState,
  },
  reducers: {
    getUsers(state, action: PayloadAction<{ users: User[] }>) {
      state.users = action.payload.users;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
