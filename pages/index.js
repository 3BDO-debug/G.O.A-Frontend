import React from "react";
// components
import Slider from "../components/_home/Slider";
import LearnAbout from "../components/_home/LearnAbout";
import Service from "../components/Service";
import WhyRegister from "../components/whyRegister/WhyRegister";
import Teachers from "../components/teachers/Teachers";
import JoinSession from "../components/_home/JoinSession";
import { MotionInView, varFadeInUp } from "../components/animate";

const Home = () => {
  return (
    <div className="home__wrapper">
      <Slider />
      <MotionInView variants={varFadeInUp}>
        <LearnAbout />
      </MotionInView>
      <MotionInView variants={varFadeInUp}>
        <Service />
      </MotionInView>
      <MotionInView variants={varFadeInUp}>
        <WhyRegister />
      </MotionInView>
      <MotionInView variants={varFadeInUp}>
        <Teachers />
      </MotionInView>
      <MotionInView variants={varFadeInUp}>
        <JoinSession />
      </MotionInView>
    </div>
  );
};

export default Home;
