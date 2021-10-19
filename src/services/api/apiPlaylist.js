import axios from "axios";

import {
  getCurrentUserToken,
  //   getCurrentUserId,
  //   firebaseEmailUpdate,
} from "../firebase";

//POST
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

//PATCH
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

export async function likeHandleRequest(userId, playlistId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_URL}playlists/handle-playlist-like/`,
    data: {
      userId: userId,
      playlistId: playlistId,
    },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getMostLikedPlaylists() {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}playlists/get-most-liked`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getLastUploadedPlaylists() {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}playlists/`,
    data: {
      limit: 14,
    },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getPlaylistById(playlistId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}playlists/get-playlist/${playlistId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getIsPlaylistLiked(playlistId, userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}playlists/get-playlist/${playlistId}/liked/${userId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function updatePlaylistById(playlistId, playlistData) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_URL}playlists/update-playlist/${playlistId}`,
    data: playlistData,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function deletePlaylistById(playlistId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "DELETE",
    url: `${process.env.REACT_APP_URL}playlists/delete-playlist/${playlistId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
