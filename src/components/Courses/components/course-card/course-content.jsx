import Author from "../author/author";
import { getCourseDuration } from "../../../../helper/getCourseDuration";
import Button from "../../../../common/Button/button";
import { getFormattedDate } from "../../../../helper/formatCreationDate";
import { useNavigate } from "react-router-dom";

const CourseCard = (props) => {
  const AUTHOR = "Author: ";
  const DURATION = "Duration: ";
  const CREATED = "Created: ";
  const BUTTON_TEXT = "Show Courses";
  const cardList = props.coursesList;
  const authorList = props.authorsList;
  const navigate = useNavigate();

  const showCourses = () => {
    if (event.target.tagName === "BUTTON") {
      navigate(event.target.id, {
        replace: true,
        state: { course: cardList, authorList: authorList },
      });
    }
  };

  return (
    <>
      <div>
        {cardList
          .filter((data) => {
            console.log(data);
            return (
              data.title
                .toLowerCase()
                .includes(props.updatedSearch.toLowerCase()) ||
              data.id.toLowerCase().includes(props.updatedSearch.toLowerCase())
            );
          })
          .map((cardDetail) => (
            <div id={cardDetail.id} className="card-details">
              <div className="card-body card-body-desc col-7 d-inline-block">
                <h3 className="card-title">{cardDetail.title}</h3>
                <p className="card-text">{cardDetail.description}</p>
              </div>
              <div className="card-body card-body-author col-3 d-inline-block  ">
                <p>
                  <span className="font-weight-bold">{AUTHOR} </span>
                  {cardDetail.authors.map((author) => (
                    <Author id={author} authorsList={props.authorsList} />
                  ))}
                </p>
                <p>
                  <span className="font-weight-bold">{DURATION} </span>
                  <span>{getCourseDuration(cardDetail.duration)} hours</span>
                </p>
                <p>
                  <span className="font-weight-bold">{CREATED} </span>
                  <span>{getFormattedDate(cardDetail.creationDate)}</span>
                </p>
                <Button
                  id={cardDetail.id}
                  buttonText={BUTTON_TEXT}
                  class="button show-course-btn"
                  handleClick={showCourses}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CourseCard;
