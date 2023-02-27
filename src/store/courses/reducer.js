import * as Data from "./types.js";

export const coursesInitialState = [];

// Use the initialState as a default value
export const coursesReducer = (state = coursesInitialState, action) => {
  switch (action.type) {
    case Data.ADD_COURSE:
      return [...state, action, payload];

    case Data.DELETE_COURSE:
      return [...state, action, payload];

    case Data.UPDATE_COURSES:
      return [...state, action, payload];

    case Data.SAVE_COURSE:
      return action.payload;

    default:
      return state;
  }
};
