import React from "react";
// next
import Head from "next/head";
// components
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import { default as ContactComponent } from "../components/_contact/Contact";
import Map from "../components/map/Map";
import { MotionInView, varZoomIn } from "../components/animate";

const Contact = () => {
  return (
    <Page>
      <Head>
        <title>Gate of Angels : Contact us</title>
        <meta name="description" content="Gate of Angels contact us" />
        <meta
          name="keywords"
          content="Nursery, Gate of angels, Gate of angels nursery, nursery at maadi, nurserys, gate of angels phone number "
        />
        <meta name="author" content="Gate of Angels" />
        <meta name="copyright" content="Gate of Angels" />
      </Head>
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
