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
  getPlaylistById,
  getMostLikedPlaylists,
  getLastUploadedPlaylists,
  addTrackToPlaylist,
  createNewPlaylistApi,
  deleteTrackFromPlaylistApi,
} from "./apiPlaylist";

import { postGlobalPlay, postRelatedPlay } from "./laravelApi";
import {
  getAllMyPlaylists,
  getAllMyFavPlaylists,
  getTotalPlays,
  getTotalTracks,
} from "./apiUser";

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
  getAllMyPlaylists,
  getPlaylistById,
  getMostLikedPlaylists,
  getLastUploadedPlaylists,
  addTrackToPlaylist,
  createNewPlaylistApi,
  deleteTrackFromPlaylistApi,
  getAllMyFavPlaylists,
  getTotalPlays,
  getTotalTracks,
  postGlobalPlay,
  postRelatedPlay,
};
