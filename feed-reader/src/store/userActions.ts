import { AppDispatch } from ".";
import axios from "axios";
import { userActions } from "./userSlice";
import { User } from "../models/User";
import { filterObject } from "../utils/filterUserData";

export const getUsersData = () => {
  return async (dispatch: AppDispatch) => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        return response.data.map((user: any) => {
          return filterObject<User>(user, ["id", "name", "username"]);
        });
      } catch (error) {
        throw new Error("Couldn't get user data " + error);
      }
    };

    try {
      const usersData: User[] = await getData();
      dispatch(
        userActions.getUsers({
          users: usersData || [],
        })
      );
    } catch (error) {
      throw new Error("Error getting user data " + error);
    }
  };
};
