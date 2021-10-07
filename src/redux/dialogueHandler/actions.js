import { SHOW_DIALOGUE, HIDE_DIALOGUE } from "./types";

export const showDialogue = (data, position) => ({
  type: SHOW_DIALOGUE,
  payload: { data, position },
});
export const hideDialogue = () => ({ type: HIDE_DIALOGUE });
