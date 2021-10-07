import axios from "axios";

import {
  getCurrentUserToken,
  getCurrentUserId,
  firebaseEmailUpdate,
} from "../firebase";

export async function registerInApi(userData, uid) {
  return axios({
    method: "POST",
    url: `http://localhost:4000/users/register`,
    data: {
      firebase_id: uid,
      ...userData,
    },
    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
  });
}

export async function getById(uid, userToken) {
  return axios({
    method: "GET",
    url: `http://localhost:4000/users/get-user/${uid}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getAllTracks() {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `http://localhost:4000/tracks/`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getCurrentUser() {
  const userToken = await getCurrentUserToken();
  const userId = await getCurrentUserId();
  const { data } = await getById(userId, userToken);
  const { currentUser } = data;
  return currentUser;
}

export async function getMyTracksByUserId(userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `http://localhost:4000/users/get-user/${userId}/my-tracks`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getFavouriteTracksByUserId(userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `http://localhost:4000/users/get-user/${userId}/favourite-tracks`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function updateById(id, userToken, bodyReq) {
  return axios({
    method: "PATCH",
    url: `http://localhost:4000/users/update-user/${id}`,
    data: bodyReq,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function updateCurrentUser(state) {
  const { userId, ...bodyReq } = state;
  const { email } = bodyReq;
  const userToken = await getCurrentUserToken();
  // const userId = await getCurrentUserId();
  if (email !== "") {
    await firebaseEmailUpdate(email);
    await updateById(userId, userToken, bodyReq);
  }
}

export async function setIsActive(isActive) {
  const userToken = await getCurrentUserToken();
  const { user_id } = decodeToken(userToken);
  const { data } = await getById(user_id, userToken);
  const { _id } = data.currentUser;
  if (isActive) {
    updateById(_id, userToken, { active: true });
  } else {
    updateById(_id, userToken, { active: false });
  }
}

function decodeToken(token) {
  return JSON.parse(atob(token.split(".")[1]));
}
