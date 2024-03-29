import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider1 from "react-slick";
// next
import dynamic from "next/dynamic";
import Image from "next/image";
// components
import learnabout from "../../assets/images/learnabout.jpg";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const LearnAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="learn__about__wrapper padding__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="learn__about__img">
              <Image src={learnabout} alt="Learn about" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="learn__right">
              <div className="up__art">
                <Image width={30} height={30} src="/images/up.svg" alt="" />
              </div>
              <div className="section__title__container">
                <h5 className="section__subtitle">Education For Everyone</h5>
                <h2 className="section__title">
                  Learn About Our Work Culture At Gate of Angels
                </h2>
                <p className="section__contnet">
                  As a word from our heart, we love to dedicate for Kids the
                  valuable things in Life. A great education is a must for a
                  solid developments in both soul and mind for kids. We go with
                  kids to play, learn, and grow better.
                </p>
              </div>
              <ul className="list__content">
                <li>
                  <FontAwesomeIcon icon="check-circle" />
                  Learning to share
                </li>
                <li>
                  <FontAwesomeIcon icon="check-circle" />
                  Listening to others
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon="check-circle" />
                  Taking turns
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon="check-circle" />
                  Best Care
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearnAbout;
