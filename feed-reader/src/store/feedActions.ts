import Parser from "rss-parser";
import { AppDispatch } from ".";
import { Feed } from "../models/Feed";
import { feedActions } from "./feedSlice";
import axios from "axios";

export const parseFeedData = (url: string) => {
  return async (dispatch: AppDispatch) => {
    const parseData = async () => {
      try {
        const parser = new Parser();
        const feed = await parser.parseURL(url);

        return {
          articles: feed.items.map((item) => ({
            title: item.title || "",
            body: item.content || "",
          })),
        } as Feed;
      } catch (error) {
        throw new Error("Could not parse feed data " + error);
      }
    };

    try {
      const feedData: Feed = await parseData();
      dispatch(
        feedActions.fetchFeedData({
          feed: feedData,
        })
      );
    } catch (error) {
      throw new Error("Error passing data " + error);
    }
  };
};

export const fetchUserFeedData = (userId: number) => {
  return async (dispatch: AppDispatch) => {
    const fetchFeeds = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        throw new Error("Could not fetch user feeds " + error);
      }
    };
    try {
      const userFeed: Feed = await fetchFeeds();
      dispatch(
        feedActions.fetchFeedData({
          feed: userFeed,
        })
      );
    } catch (error) {
      throw new Error("Error fetching user feeds " + error);
    }
  };
};
