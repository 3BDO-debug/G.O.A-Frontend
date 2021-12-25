import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// next
import Image from "next/image";
import Link from "next/link";
// material
import { Avatar } from "@mui/material";
// contexts
import { ClassesContext } from "../contexts";
import { mainUrl } from "../__apis__/axios";
// components
import side0 from "../assets/images/side0.svg";

const Classes = ({ discoverMore }) => {
  const classes = React.useContext(ClassesContext).classesState[0];
  const [mappedClasses, setMappedClasses] = React.useState([]);

  React.useEffect(() => {
    if (discoverMore) {
      let classesArrayLength;
      if (classes.length > 1) {
        classesArrayLength = classes.length / 2;
      } else {
        classesArrayLength = classes.length;
      }
      for (let index = 0; index < classesArrayLength; index++) {
        setMappedClasses([...mappedClasses, classes[index]]);
      }
    } else {
      for (let index = 0; index < classes.length; index++) {
        setMappedClasses([...mappedClasses, classes[index]]);
      }
    }
  }, [classes]);

  return (
    <div className="service__wrapper padding__top__botton">
      <div className="side__img__wal">
        <Image width={30} height={30} src={side0} alt="side" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-4 mx-auto ">
            <div className="section__title__container text-center">
              <h5 className="section__subtitle">Education For Everyone</h5>
              <h2 className="section__title">
                Learn About Our Work Culture At Devschool
              </h2>
              <p className="section__contnet section__margin__bottom">
                As a word from our heart, we love to dedicate for Kids the
                valuable things in Life. A great education is a must for a solid
                developments in both soul and mind for kids. We go with kids to
                play, learn, and grow better.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {mappedClasses.map((activityClass) => (
            <div className="col-lg-4" key={activityClass.id}>
              <div className="single__service">
                <div className="overly__shape"></div>
                <div className="service__innerimg">
                  {console.log(`${mainUrl}${activityClass.class_cover}`)}
                  <Avatar
                    src={`${mainUrl}${activityClass.class_cover}`}
                    className="img-fluid"
                    sx={{ width: "100%", height: "auto" }}
                    variant="square"
                    alt={activityClass.class_name}
                  />
                </div>
                <div className="service__inner__content">
                  <h4 className="service__title">{activityClass.class_name}</h4>
                  <div className="service__blist__wr">
                    <ul className="service__blist">
                      <li>
                        <FontAwesomeIcon icon="book" />
                        {activityClass.class_lessons} Lessons
                      </li>
                      <li>
                        <FontAwesomeIcon icon="user" />
                        {activityClass.class_students} Students
                      </li>
                    </ul>
                  </div>
                  <div className="service__enroll">
                    <Link href={`/class/${activityClass.id}`}>
                      <a href="/enroll">
                        View more
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="angle-right"
                          className="svg-inline--fa fa-angle-right fa-w-8 "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512"
                        >
                          <path
                            fill="currentColor"
                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {discoverMore && (
          <div className="row">
            <div className="col-lg-12">
              <div className="more__service text-center">
                <Link href="/classes">
                  <a>
                    <p>discover more</p> <FontAwesomeIcon icon="caret-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Classes;
