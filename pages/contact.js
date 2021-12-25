import React from "react";
// components
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import { default as ContactComponent } from "../components/_contact/Contact";
import Map from "../components/map/Map";
import { MotionInView, varZoomIn } from "../components/animate";

const Contact = () => {
  return (
    <Page>
      <Breadcrumb title="Contact" href="/contact" />
      <div className="contact__wrapper">
        <ContactComponent />
        <MotionInView variants={varZoomIn}>
          <Map />
        </MotionInView>
      </div>
    </Page>
  );
};

export default Contact;
