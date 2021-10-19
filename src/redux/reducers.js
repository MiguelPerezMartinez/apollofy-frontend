import { combineReducers } from "redux";
import isAuthorizedReducer from "./isAuthorized/reducer";
import trackReducer from "./trackData/reducer";
import userReducer from "./userData/reducer";
import dialogueHandlerReducer from "./dialogueHandler/reducer";
import searchHandlerReducer from "./searchHandler/reducer";
import modalsHandlerReducer from "./modalsHandler/reducer";

const reducers = combineReducers({
  isAuthorized: isAuthorizedReducer,
  dialogueHandler: dialogueHandlerReducer,
  trackReducer: trackReducer,
  userReducer: userReducer,
  searchHandler: searchHandlerReducer,
  modalsHandler: modalsHandlerReducer,
});

export default reducers;
