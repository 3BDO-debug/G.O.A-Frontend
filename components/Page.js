import React from "react";
// components
import { MotionInView, varFadeInLeft } from "../components/animate";

const Page = ({ children }) => {
  return <MotionInView variants={varFadeInLeft}>{children}</MotionInView>;
};

export default Page;
