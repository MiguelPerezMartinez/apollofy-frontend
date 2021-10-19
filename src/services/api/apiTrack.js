import axios from "axios";

import { getCurrentUserToken } from "../firebase";

//PATCH
export async function likeHandleRequest(userId, trackId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_URL}tracks/handle-track-like/`,
    data: {
      userId: userId,
      trackId: trackId,
    },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

//GET
export async function getTrackByName(query) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL}tracks/get-track-by-title`,
    params: { title: query },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
