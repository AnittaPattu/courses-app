import CourseCard from "./components/course-card/course-content";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/button";
import React, { useState } from "react";

const Courses = (props) => {
  const PLACEHOLDER_TEXT = "Enter course name or id";
  const ADD_COURSE_BUTTON_TEXT = "Add new course";
  const [updatedSearch, startSearch] = useState("");

  function addCourseClick() {
    props.addCourse(false);
  }

  return (
    <div className="courses col-12">
      <div className="search-container">
        <SearchBar
          {...{ startSearch }}
          placeholder={PLACEHOLDER_TEXT}
          class="search-input-class"
        />
        <Button
          buttonText={ADD_COURSE_BUTTON_TEXT}
          class="button header-btn"
          handleClick={addCourseClick}
        />
      </div>
      <CourseCard
        {...{ updatedSearch }}
        coursesList={props.coursesList}
        authorsList={props.authorsList}
      />
    </div>
  );
};

export default Courses;
