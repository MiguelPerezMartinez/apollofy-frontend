import { combineReducers } from "redux";
import isAuthorizedReducer from "./isAuthorized/reducer";
import trackReducer from "./trackData/reducer";
import userReducer from "./userData/reducer";
import dialogueHandlerReducer from "./dialogueHandler/reducer";

const reducers = combineReducers({
  isAuthorized: isAuthorizedReducer,
  dialogueHandler: dialogueHandlerReducer,
  trackReducer: trackReducer,
  userReducer: userReducer,
});

export default reducers;
