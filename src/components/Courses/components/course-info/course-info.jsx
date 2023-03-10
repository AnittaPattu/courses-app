import Author from "../author/author";
import { getCourseDuration } from "../../../../helper/getCourseDuration";
import { getFormattedDate } from "../../../../helper/formatCreationDate";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

const CourseInfo = () => {
  const AUTHOR = "Authors: ";
  const DURATION = "Duration: ";
  const CREATED = "Created: ";
  let { courseId } = useParams();
  const { state } = useLocation();
  const courseData = state.course;
  const cardDetail = courseData.filter((card) => card.id === courseId)?.[0];
  const authorsList = state.authorList;
  useEffect(() => {
    if (
      localStorage.getItem("token") === undefined ||
      localStorage.getItem("token") === null
    ) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <div>
      <Link to={`courses`}>Back to Courses</Link>
      <div id={cardDetail.id} className="card-details">
        <div className="card-body card-body-desc col-7 d-inline-block">
          <h3 className="card-title">{cardDetail.title}</h3>
          <p className="card-text">{cardDetail.description}</p>
        </div>
        <div className="card-body card-body-author col-3 d-inline-block  ">
          <p>
            <span className="font-weight-bold">Id </span>
            <span>{cardDetail.id}</span>
          </p>
          <p>
            <span className="font-weight-bold">{DURATION} </span>
            <span>{getCourseDuration(cardDetail.duration)} hours</span>
          </p>
          <p>
            <span className="font-weight-bold">{CREATED} </span>
            <span>{getFormattedDate(cardDetail.creationDate)}</span>
          </p>
          <p>
            <span className="font-weight-bold">{AUTHOR} </span>
            {cardDetail.authors.map((author) => (
              <Author id={author} authorsList={authorsList} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
