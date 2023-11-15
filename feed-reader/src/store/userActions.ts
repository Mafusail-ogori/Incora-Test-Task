import { User } from "../models/User";
import { AppDispatch } from ".";
import axios from "axios";
import env from "react-dotenv";
import { userActions } from "./userSlice";

export const getUsersData = () => {
  return async (dispatch: AppDispatch) => {
    const getData = async () => {
      try {
        const response = await axios.get(env.POST_USER_API_URL, {
          headers: {
            Accept: "application/json",
          },
        });
        return response.data;
      } catch (error) {
        throw new Error("Couldn't post user data " + error);
      }
    };

    try {
      const usersData = await getData();
      dispatch(
        userActions.getUsers({
          users: usersData || [],
        })
      );
    } catch (error) {
      throw new Error("Error posting user data " + error);
    }
  };
};
