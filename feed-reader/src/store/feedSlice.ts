import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed } from "../models/Feed";

const feedInitialState: Feed = {
  articles: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: feedInitialState,
  },
  reducers: {
    fetchFeedData(state, action: PayloadAction<{ feed: Feed }>) {
      state.feed = action.payload.feed;
    },
  },
});

export const feedActions = feedSlice.actions;
export default feedSlice;
