import axios from "axios";

import {
  getCurrentUserToken,
  //   getCurrentUserId,
  //   firebaseEmailUpdate,
} from "../firebase";

export async function getAllMyPlaylist(userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}users/get-user/${userId}/my-playlists`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
export async function addTrackToPlaylist(playlisTitle, trackId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_URL}playlists/add-playlist-track`,
    data: { trackId: trackId, title: playlisTitle },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
export async function createNewPlaylistApi(playListData) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL}playlists/create-playlist`,
    data: playListData,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
export async function deleteTrackFromPlaylistApi(playlistId, trackId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_URL}playlists/delete-playlist-track/${playlistId}`,
    data: { trackId: trackId },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
