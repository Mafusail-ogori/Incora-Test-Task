import { AppDispatch } from ".";
import { userActions } from "./userSlice";
import axios from "axios";
import env from "react-dotenv";

export const postUserData = () => {
  return async (dispatch: AppDispatch) => {
    const postData = async () => {
      try {
        const response = await axios.post(env.POST_API_URL, {
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
    } catch (error) {
      throw new Error("Error posting user data " + error);
    }
  };
};
