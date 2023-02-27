import * as Data from "./types.js";

export const userInitialState = {
  isAuth: true,
  name: "",
  email: "",
  token: "",
};

// Use the initialState as a default value
export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case Data.ADD_USER:
      return [...state, action, payload];

    case Data.DELETE_USER:
      return [...state, action, payload];

    default:
      return state;
  }
};
