import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider1 from "react-slick";
// next
import dynamic from "next/dynamic";
import Image from "next/image";
// components
import banner from "../../assets/images/banner.svg";
import kid1 from "../../assets/images/kid1.svg";
import kid2 from "../../assets/images/kid2.svg";
import { MotionInView, varFadeIn, varFadeInLeft } from "../animate";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Slider = () => {
  // const [addClass, updateClass] = useState(false)
  const [isOpen, setOpen] = useState(false);
  const [clickVideo, setClickVideo] = useState("KFVdHDMcepw");
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick__arrow__next" onClick={onClick}>
        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick__arrow__prev" onClick={onClick}>
        <FontAwesomeIcon icon={["fas", "arrow-left"]} />
      </div>
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const SliderContents = [
    {
      h1a: "We Are Child Care",
      h1: "Professional",
      p: "We are an English-based nursery. Our mission is delivery of academics as well caring for children's wellbeing. We believe in children's capabilities and we thrive to develop them. By doing that we prepare them for their first step in their academic life.",
      vid: "KFVdHDMcepw",
    },
  ];
  const videoHandle = (vid) => {
    setOpen(true);
    setClickVideo(vid);
  };
  return (
    <MotionInView variants={varFadeInLeft}>
      <div className="slider__wrapper">
        <div className="container">
          <div className="row row__reverce">
            <div className="col-lg-6">
              <div className="slider__inner">
                <ModalVideo
                  channel="youtube"
                  youtube={{
                    autoplay: 0,
                  }}
                  isOpen={isOpen}
                  videoId={clickVideo}
                  onClose={() => setOpen(false)}
                />
                <Slider1 {...settings}>
                  {SliderContents.map((SliderContent, i) => (
                    <div className="single__slider" key={i}>
                      <div className="video__modal">
                        {SliderContent.vid !== "" && (
                          <button
                            className="btn video__btn"
                            onClick={() => videoHandle(SliderContent.vid)}
                          >
                            <FontAwesomeIcon icon={["fas", "play"]} />
                          </button>
                        )}
                      </div>
                      <h1>
                        <span className="above__title">
                          {SliderContent.h1a}{" "}
                        </span>
                        {SliderContent.h1}
                      </h1>
                      <p className="slider__para">{SliderContent.p}</p>
                    </div>
                  ))}
                </Slider1>
              </div>
            </div>
            <div className="col-lg-6">
              <MotionInView variants={varFadeIn}>
                <div className="slider__image">
                  <Image src={banner} alt="" className="img-fluid" />
                </div>
              </MotionInView>
            </div>
          </div>
        </div>
        <div className="slider__side__color">
          <Image src={kid2} alt="kid2" />
        </div>
        <div className="slider__side__color1">
          <Image src={kid1} alt="kid1" />
        </div>
      </div>
    </MotionInView>
  );
};
export default Slider;
