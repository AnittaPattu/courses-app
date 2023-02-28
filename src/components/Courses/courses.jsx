import CourseCard from "./components/course-card/course-content";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/button";
import React, { useEffect, useState } from "react";
import { mockedCoursesList as cardList } from "../../constant";
import { mockedAuthorsList as authorsList } from "../../constant";
import { useLocation, useNavigate } from "react-router-dom";
import getAllCourses from "../../store/service";

const Courses = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const PLACEHOLDER_TEXT = "Enter course name or id";
  const ADD_COURSE_BUTTON_TEXT = "Add new course";
  const [updatedSearch, startSearch] = useState("");
  let authorList = authorsList;
  let courseList = cardList;
  if (state !== null && state.course !== null) {
    courseList.push(state.course);
  }
  if (state !== null && state.authorList) {
    authorList = state.authorList;
  }
  useEffect(() => {
    getCourses();
    // if (
    //   localStorage.getItem("token") === undefined ||
    //   localStorage.getItem("token") === null
    // ) {
    //   navigate("/login", { replace: true });
    // }
  }, []);

  function getCourses() {
    console.log(getAllCourses());
  }

  function addCourseClick() {
    navigate("add", {
      state: {
        authorsList: authorList,
        courseList: cardList,
      },
    });
  }

  return (
    <>
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
          coursesList={cardList}
          authorsList={authorsList}
        />
      </div>
    </>
  );
};

export default Courses;
