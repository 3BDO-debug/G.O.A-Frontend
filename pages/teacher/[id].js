import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "loadsh";
// next
import { useRouter } from "next/router";
import Image from "next/image";
// contexts
import { TeachersContext } from "../../contexts";
// components
import Breadcrumb from "../../components/Breadcrumb";
import teacher from "../../assets/images/teacherd.jpg";
import { mainUrl } from "../../__apis__/axios";

const TeacherDetails = () => {
  const router = useRouter();
  const teachers = useContext(TeachersContext).teachersState[0];
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    if (router.query.id) {
      const teacherData = teachers.find(
        (teacher) => teacher.id === parseInt(router.query.id)
      );
      setTeacher(teacherData);
    }
  }, [router.query.id]);

  return (
    <>
      <Breadcrumb title="Teacher profile" href={`teachers`} />
      <div className="teacherdetails__wrapper padding__top__botton">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="events__detils__left">
                <h3>{teacher?.teacher_name}</h3>
                <p className="event_sub1">{teacher?.teacher_degree}</p>

                <div className="teachers__profile">
                  <div className="teachers__profile__img">
                    <Image
                      src={`${mainUrl}/${teacher?.teacher_photo}`}
                      width={300}
                      height={300}
                      alt="teacher"
                    />
                  </div>
                  <div className="teachers__profile__content">
                    <h4>About me</h4>
                    <div className="activitics__list">
                      <div className="th__list__single">
                        <span className="th__list__icon">
                          <FontAwesomeIcon icon={["fas", "book-open"]} />
                        </span>
                        <span className="th__list__name">Degree:</span>
                        <span className="th__list__con">
                          {teacher?.teacher_degree}
                        </span>
                      </div>
                      <div className="th__list__single">
                        <span className="th__list__icon">
                          <FontAwesomeIcon icon={["fas", "star"]} />
                        </span>
                        <span className="th__list__name">Experience : </span>
                        <span className="th__list__con">
                          {teacher?.teacher_experience}
                        </span>
                      </div>
                      <div className="th__list__single">
                        <span className="th__list__icon">
                          <FontAwesomeIcon icon={["fas", "heart"]} />
                        </span>
                        <span className="th__list__name">Hobbies : </span>
                        <span className="th__list__con">
                          {teacher?.teacher_hobbies}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="teacher__text__content">
                  <p>{teacher?.teacher_bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDetails;
