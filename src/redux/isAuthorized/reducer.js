import initialState from "./state";
import { GET_STATE } from "./types";

const isAuthorizedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE:
      return { ...state, value: action.payload, loaded: true };
    default:
      return state;
  }
};

export default isAuthorizedReducer;
