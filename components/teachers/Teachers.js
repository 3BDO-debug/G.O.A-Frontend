import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// next
import Image from "next/image";
import Link from "next/link";
// contexts
import { TeachersContext } from "../../contexts";
import { mainUrl } from "../../__apis__/axios";

const Teachers = () => {
  const teachers = React.useContext(TeachersContext).teachersState[0];

  return (
    <div className="teacher__wrapper padding__bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-4 mx-auto ">
            <div className="section__title__container text-center">
              <h5 className="section__subtitle">Together We Can Create</h5>
              <h2 className="section__title">Who Stand By Your Kids Always</h2>
              <p className="section__contnet section__margin__bottom">
                While the unit economics were a driving factor, the company says
                its acquisition of lidar company Blackmore and the integration
                of that tech in its self-driving stack has made the shift to
                trucks possible. Aurora has said its FirstLight.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teachers.map((teacher, i) => (
            <div className="col-lg-4 col-xl-3" key={i}>
              <Link href={`/teacher/${teacher.id}`}>
                <div className="teacher__single" style={{ cursor: "pointer" }}>
                  <div className="teacher__img">
                    <Image
                      src={`${mainUrl}${teacher.teacher_photo}`}
                      className="img-fluid"
                      width={400}
                      height={400}
                      alt={teacher.teacher_name}
                    />
                  </div>
                  <div className="teacher__content">
                    <div className="teacher__content__in">
                      <h5>{teacher.teacher_name}</h5>
                      <h6>{teacher.title}</h6>
                      <div className="teacher__social__wrapper">
                        <ul className="teacher__social">
                          <li>
                            <a href="www.factbook.com">
                              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                            </a>
                          </li>
                          <li>
                            <a href="www.factbook.com">
                              <FontAwesomeIcon icon={["fab", "twitter"]} />
                            </a>
                          </li>
                          <li>
                            <a href="www.factbook.com">
                              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                            </a>
                          </li>
                          <li>
                            <a href="www.factbook.com">
                              <FontAwesomeIcon icon={["fab", "instagram"]} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="more__teacher text-center">
              <Link href="/contact">
                <a className="teacher__quali">With 20+ Qualified Teacher?​</a>
              </Link>

              <Link href="/contact">
                <a style={{ marginLeft: "10px" }} className="teacher__car">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
