import React from "react";
// next
import Head from "next/head";
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
    <>
      <Head>
        <meta
          name="description"
          content="We are an English-based nursery. Our mission is delivery of academics as well caring for children's wellbeing. We believe in children's capabilities and we thrive to develop them. By doing that we prepare them for their first step in their academic life."
        />
        <meta
          name="keywords"
          content="Nursery, Gate of angels, Gate of angels nursery, nursery at maadi, nurserys "
        />
        <meta name="author" content="Gate of Angels" />
        <meta name="copyright" content="Gate of Angels" />
      </Head>
      <div className="home__wrapper">
        <div className="container">
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
        </div>
        <MotionInView variants={varFadeInUp}>
          <JoinSession />
        </MotionInView>
      </div>
    </>
  );
};

export default Home;
