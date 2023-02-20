import "./App.css";
import Header from "./components/Header/header";
import Courses from "./components/Courses/courses";
import CreateCourse from "./components/CreateCourse/createCourse";
import { mockedCoursesList as cardList } from "./constant";
import { mockedAuthorsList as authorsList } from "./constant";
import { useState } from "react";
import React from "react";

function App() {
  const name = "Anitta";
  const [authorList, setAuthorList] = useState(authorsList);
  const [courseList, setCourseList] = useState(cardList);
  const [switchPage, setSwitchPage] = useState(true);
  let course = [];

  function getCourseList(courses, courseAuthor) {
    course.push(...courseList);
    course.push(courses);
    setCourseList(course);
    setAuthorList(...authorList, courseAuthor);
    setSwitchPage(true);
  }

  function getAuthorsList(authorData, type) {
    if (type === "delete") {
      setAuthorList(...authorData);
    } else {
      setAuthorList(authorData);
    }
  }

  function addCourse(toggle) {
    setSwitchPage(toggle);
  }

  return (
    <div className="container">
      <Header name={name} />
      {switchPage && (
        <Courses
          coursesList={courseList}
          authorsList={authorList}
          addCourse={addCourse}
        />
      )}
      {!switchPage && (
        <CreateCourse
          coursesList={courseList}
          authorsList={authorsList}
          getCourseList={getCourseList}
          getAuthorsList={getAuthorsList}
        />
      )}
    </div>
  );
}

export default App;
