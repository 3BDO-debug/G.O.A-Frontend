import React from "react";
// next
import Head from "next/head";
// components
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import { default as ClassesComponent } from "../components/Classes";

const Classes = () => {
  return (
    <Page>
      <Head>
        <meta
          name="description"
          content="Gate of Angels classes"
        />
        <meta
          name="keywords"
          content="Nursery, Gate of angels, Gate of angels nursery, nursery at maadi, nurserys "
        />
        <meta name="author" content="Gate of Angels" />
        <meta name="copyright" content="Gate of Angels" />
      </Head>
      <Breadcrumb title="Classes" href="/classes" />
      <div className="classes__wrapper">
        <ClassesComponent />
      </div>
    </Page>
  );
};

export default Classes;
