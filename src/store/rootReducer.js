import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthorReducer } from "./author/reducer.js";

import { coursesReducer } from "./courses/reducer.js"; // reducer that we already have
import { userReducer } from "./user/reducer.js";

// const reducerData = combineReducers({
//   courses: coursesReducer,
//   user: userReducer,
//   author: AuthorReducer,
// });

// export const rootReducer = configureStore({ reducer: reducerData });

const rootReducer = combineReducers({
  courses: coursesReducer,
  user: userReducer,
  author: AuthorReducer,
});

export default rootReducer;
