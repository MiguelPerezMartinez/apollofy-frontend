import axios from "axios";

import { getCurrentUserId } from "../firebase";

export async function postGlobalPlay(trackData) {
  const trackPlayerId = await getCurrentUserId();
  return axios({
    method: "POST",
    url: `https://ancient-atoll-88751.herokuapp.com/api/global-plays`,
    // url: `${process.env.LARAVEL_API_URL}global-plays`,
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
      //   console.log("prev ", prevTrackId);
      return axios({
        method: "POST",
        url: `https://ancient-atoll-88751.herokuapp.com/api/related-plays`,
        // url: `${process.env.LARAVEL_API_URL}related-plays`,
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
