import React from "react";
// components
import { MotionInView, varFadeInLeft } from "../components/animate";

const Page = ({ children }) => {
  return (
    <MotionInView variants={varFadeInLeft}>
      <div className="container">{children}</div>
    </MotionInView>
  );
};

export default Page;
