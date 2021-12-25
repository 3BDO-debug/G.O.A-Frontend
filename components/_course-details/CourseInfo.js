import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseInfo = ({ classData }) => {
  return (
    <div className="event__info_wr">
      <h4>Course Information</h4>
      <div className="info__list">
        <div className="info__list__single">
          <span className="info__list__icon">
            <FontAwesomeIcon icon={["fas", "sitemap"]} />
          </span>
          <span className="info__list__name">Years Old : </span>
          <span className="info__list__con">{classData?.years_range}</span>
        </div>
        <div className="info__list__single">
          <span className="info__list__icon">
            <FontAwesomeIcon icon={["fas", "glass-cheers"]} />
          </span>
          <span className="info__list__name">Class Size: </span>
          <span className="info__list__con">{classData?.class_students}</span>
        </div>

        <div className="info__list__single">
          <span className="info__list__icon">
            <FontAwesomeIcon icon={["fas", "calendar-day"]} />
          </span>
          <span className="info__list__name">Difficulty : </span>
          <span className="info__list__con">{classData?.difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
