import axios from "axios";

import { getCurrentUserId } from "../firebase";

export async function postGlobalPlay(trackData) {
  const trackPlayerId = await getCurrentUserId();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_LARAVEL_API_URL}global-plays`,
    data: {
      trackId: trackData._id,
      trackOwnerId: trackData.owner,
      trackPlayerId: trackPlayerId,
    },
    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
  });
}

export async function postRelatedPlay(currentTrackId) {
  const trackPlayerId = await getCurrentUserId();

  const historyTracks = JSON.parse(localStorage.getItem("trackHistory"));
  if (historyTracks && historyTracks.length > 1) {
    const prevTrackId = historyTracks[historyTracks.length - 2]._id;
    if (currentTrackId != prevTrackId) {
      //   console.log("current ", currentTrackId);
      console.log("proces env ", process.env);
      return axios({
        method: "POST",
        url: `${process.env.REACT_APP_LARAVEL_API_URL}related-plays`,
        data: {
          prevTrackId: prevTrackId,
          nextTrackId: currentTrackId,
          userPlayerId: trackPlayerId,
        },
        // headers: {
        //   Authorization: `Bearer ${userToken}`,
        // },
      });
    }
  }
}

export async function playNextRandomRelated(currentTrackId) {
  // console.log("proces env ", process.env);

  const response = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_LARAVEL_API_URL}most-related-tracks/${currentTrackId}`,
    // data: {
    //   prevTrackId: prevTrackId,
    //   nextTrackId: currentTrackId,
    //   userPlayerId: trackPlayerId,
    // },
    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
  });

  //console.log("next random: ", response);

  return response;
}

export async function lastSevenHoursPlaysByUser(userId) {
  const trackPlayerId = await getCurrentUserId();
  return axios({
    method: "GET",
    url: `https://ancient-atoll-88751.herokuapp.com/api/global-plays`,
  }).then((response) => {
    console.log(trackPlayerId);
    console.log(response.data.data);
    const filtered = response.data.data.filter(esSuficientementeGrande);
    console.log(filtered);
    return filtered;
  });

  function esSuficientementeGrande(element) {
    if (element.track_owner_id === trackPlayerId) {
      return true;
    }
  }
}
