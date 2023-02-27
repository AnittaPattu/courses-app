import { composeWithDevTools } from "redux-devtools-extension"; // import DevTools
import { configureStore, createStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.js";
import { coursesInitialState } from "./courses/reducer.js";
import { authorsInitialState } from "./author/reducer.js";
import { userInitialState } from "./user/reducer.js";

const appInitialState = {
  courses: coursesInitialState,
  author: authorsInitialState,
  user: userInitialState,
};
const store = createStore(rootReducer, appInitialState, composeWithDevTools());

export default store;
