import { FETCH_USER_DATA, RESET_USER_DATA } from "./types";

import { getCurrentUser } from "../../services/api/apiAuth";

export const fetchUserData = () => {
  return async (dispatch) => {
    getCurrentUser().then((response) => {
      dispatch({
        type: FETCH_USER_DATA,
        payload: {
          userId: response._id,
          username: response.username,
          firstname: response.firstname,
          lastname: response.lastname,
          email: response.email,
          birthday: response.birthday,
          country: response.country,
          profileImg: response.profileImg,
        },
      });
    });
  };
};

export const resetUserData = () => ({ type: RESET_USER_DATA });
