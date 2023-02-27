import * as Data from "./types.js";

export const addAuthorAction = (payload) => ({
  type: Data.ADD_AUTHOR,
  payload,
});

export const saveAuthorAction = (payload) => ({
  type: Data.SAVE_EXISTING_AUTHOR,
  payload,
});
