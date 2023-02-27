import Button from "../../common/Button/button";
import InputTextbox from "../../common/Input-textbox/input-textbox";
import Input from "../../common/Input/input";
import AddAuthorDetails from "./AddAuthorDetails/addAuthorDetails";
import CourseAuthorList from "./CourseAuthor/courseAuthor";
import Duration from "./Duration/duration";
import AuthorList from "./AuthorList/authorList";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CreateCourse() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const TITLE_PLACEHOLDER = "Enter title...";
  const CREATE_COURSE = "Create course";
  const DESCRIPTION = "Enter description";
  const [author, setAuthor] = useState("");
  const [courseAuthor, setCourseAuthor] = useState("");
  const [authorList, setAuthorList] = useState(state.authorsList);
  const courseAuthorData = [];
  const authorData = [];
  let title = "";
  let desc = "";
  let duration = 0;

  useEffect(() => {
    if (
      localStorage.getItem("token") === undefined ||
      localStorage.getItem("token") === null
    ) {
      navigate("/login", { replace: true });
    }
  }, []);

  const getAuthor = (authorData) => {
    setAuthor(authorData);
    if (authorData.name) {
      state.authorsList.push(authorData);
    }
    updateAuthorArray(authorData, "");
  };

  const removeAuthor = (authorData) => {
    if (courseAuthor.length > 0) {
      courseAuthorData.push(...courseAuthor);
    }
    courseAuthorData.push(authorData);
    setCourseAuthor(courseAuthorData);
    const courseAuth = authorList.filter(
      (authData) => authData.id !== authorData.id
    );
    setAuthorList(courseAuth);
    updateAuthorArray(courseAuth, "delete");
  };

  const removeCourseAuthor = (authorDat) => {
    if (authorDat.name) {
      authorData.push(...authorList);
    }
    authorData.push(authorDat);
    setAuthorList(authorData);
    const courseAuth = courseAuthor.filter(
      (authData) => authData.id !== authorDat.id
    );
    setCourseAuthor(courseAuth);
  };

  function updateCourseArray(data) {
    navigate("/courses", {
      state: {
        course: data,
        authorList: [...courseAuthor, ...author],
      },
    });
  }

  function getTitle(data) {
    title = data;
  }

  function getDesc(data) {
    desc = data;
  }

  function getDuration(data) {
    duration = data;
  }

  function updateCourseList() {
    const currentDate = new Date();
    if (
      title.length >= 2 &&
      desc.length >= 2 &&
      courseAuthor.length > 0 &&
      duration > 0
    ) {
      const data = {
        id: Math.random().toString().substring(2, 8),
        title: title,
        description: desc,
        author: courseAuthor.map((data) => data.id),
        duration: duration,
        creationDate: (
          currentDate.getDate() +
          "/" +
          currentDate.getMonth() +
          "/" +
          currentDate.getFullYear()
        ).toString(),
      };
      updateCourseArray(data);
    } else {
      alert("Invalid values");
    }
  }

  return (
    <div className="create-course-container">
      <div>
        <div className="course-header">
          <Input
            placeholder={TITLE_PLACEHOLDER}
            class="title"
            inputType="text"
            change={getTitle}
          />
          <Button
            buttonText={CREATE_COURSE}
            class="button header-btn"
            handleClick={updateCourseList}
          />
        </div>
        <InputTextbox
          placeholder={DESCRIPTION}
          textAreaclass="description"
          textChange={getDesc}
        />
      </div>
      <div className="author-container-full">
        <div className="author-card">
          <AddAuthorDetails getAuthor={getAuthor} />
          <AuthorList authorList={authorList} removeAuthor={removeAuthor} />
        </div>
        <div className="author-card">
          <Duration getDurationTime={getDuration} />
          <CourseAuthorList
            courseAuthorList={courseAuthor}
            removeCourseAuthor={removeCourseAuthor}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
