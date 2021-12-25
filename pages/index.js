import React from "react";
// components
import Slider from "../components/_home/Slider";
import LearnAbout from "../components/_home/LearnAbout";
import Classes from "../components/Classes";
import WhyRegister from "../components/_home/WhyRegister";
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
        <Classes discoverMore />
      </MotionInView>

      <WhyRegister />
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
