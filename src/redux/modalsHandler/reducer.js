import {
  SET_UPLOAD_TRACK_MODAL,
  SET_UPDATE_TRACK_MODAL,
  SET_DELETE_TRACK_MODAL,
  SET_MY_PLAYLIST_MODAL,
} from "./types";
import initialState from "./state";

const modalsHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPLOAD_TRACK_MODAL:
      return {
        ...state,
        uploadModal: action.payload,
      };
    case SET_UPDATE_TRACK_MODAL:
      return {
        ...state,
        updateModal: action.payload.value,
        data: action.payload.data,
      };
    case SET_DELETE_TRACK_MODAL:
      return {
        ...state,
        deleteModal: action.payload.value,
        data: action.payload.data,
      };
    case SET_MY_PLAYLIST_MODAL:
      return {
        ...state,
        myPlaylistModal: action.payload.value,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default modalsHandlerReducer;
