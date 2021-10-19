import {
  registerInApi,
  getById,
  getCurrentUser,
  updateCurrentUser,
  updateById,
  setIsActive,
  getAllTracks,
  getMostLikedTracks,
  getMostPlayedTracks,
} from "./apiAuth";

import {
  apiTrackUpload,
  addTotalPlay,
  deleteTrack,
  updateTrack,
  getTrackByName,
  getTrackById,
} from "./trackManager";
import { changeMyProfilePicture } from "./fileUploader";
import {
  getAllMyPlaylist,
  addTrackToPlaylist,
  createNewPlaylistApi,
  deleteTrackFromPlaylistApi,
} from "./apiPlaylist";

import { getTotalPlays, getTotalTracks } from "./apiUser";

export {
  getTrackById,
  registerInApi,
  getById,
  getCurrentUser,
  updateCurrentUser,
  updateById,
  setIsActive,
  apiTrackUpload,
  changeMyProfilePicture,
  getAllTracks,
  getMostLikedTracks,
  getMostPlayedTracks,
  addTotalPlay,
  deleteTrack,
  updateTrack,
  getTrackByName,
  getAllMyPlaylist,
  addTrackToPlaylist,
  createNewPlaylistApi,
  deleteTrackFromPlaylistApi,
  getTotalPlays,
  getTotalTracks,
};
