const initialTrackState = {
  isPlayBarDisplayed: false,
  isPlaying: false,
  trackObject: {
    title: "",
    author: "",
    album: "",
    releaseYear: "",
    genre: "",
    urlImage: "",
    urlTrack: "",
    owner: "object id",
    totalPlays: 0,
    totalLikes: 0,
    duration: "time",
  },
  waveSurfer: null,
  emptyHistoryQueue: true,
};
export default initialTrackState;
