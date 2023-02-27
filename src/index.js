import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Registration from "./components/Authorization/components/Registration/registration";
import CreateCourse from "./components/CreateCourse/createCourse";
import { Login } from "./components/Authorization/components/Login/login";
import CourseInfo from "./components/Courses/components/course-info/course-info";
import Courses from "./components/Courses/courses";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="courses" element={<Courses />}></Route>
            <Route path="courses/:courseId" element={<CourseInfo />} />
            <Route path="courses/add" element={<CreateCourse />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);
