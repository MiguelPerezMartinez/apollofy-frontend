import initialState from "./state";
import { SET_TRACK } from "./types";

const stringTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACK:
      return action.payload;
    default:
      return state;
  }
};

export default stringTestReducer;
