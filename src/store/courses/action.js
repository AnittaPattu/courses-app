import * as Data from "./types.js";

export const addCourseAction = (payload) => ({
  type: Data.ADD_COURSE,
  payload,
});
export const deleteCourseAction = (payload) => ({
  type: Data.DELETE_COURSE,
  payload,
});
export const updateCoursesAction = (payload) => ({
  type: Data.UPDATE_COURSES,
  payload,
});
