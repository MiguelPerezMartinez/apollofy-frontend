import {
  IS_PLAY_BAR_DISPLAYED,
  IS_PLAYING,
  TRACK_OBJECT,
  WAVESURFER_PROPERTIES,
  BACK_TRACK,
} from "./type";

//Reproductor (Solo cambia a true)
export const isPlayBarDisplayedAction = (value) => ({
  type: IS_PLAY_BAR_DISPLAYED,
  payload: value,
});

// Se esta reproduciendo la song ?
export const isPlay = (value) => ({ type: IS_PLAYING, payload: value });
export const trackObjectAction = (value) => ({
  type: TRACK_OBJECT,
  payload: value,
});

export const setWaveSurfer = (value) => ({
  type: WAVESURFER_PROPERTIES,
  payload: value,
});

export const setemptyHistoryQueue = (value) => ({
  type: BACK_TRACK,
  payload: value,
});
