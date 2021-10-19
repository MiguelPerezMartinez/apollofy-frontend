import { GET_STATE } from "./types";

import { authenticationObserver } from "../../services/firebase";

export const getState = () => {
  return async (dispatch) => {
    authenticationObserver((user) => {
      if (user) {
        dispatch({ type: GET_STATE, payload: true });
        
      } else {
        dispatch({ type: GET_STATE, payload: false });
      }
    });
  };
};
