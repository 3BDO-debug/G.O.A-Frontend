import React from "react";
// next
import Head from "next/head";
// components
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import { default as TeachersComponent } from "../components/teachers/Teachers";

const Teachers = () => {
  return (
    <Page>
      <Head>
        <title>Gate of Angels : Teachers</title>
        <meta name="description" content="Gate of Angels teachers" />
        <meta
          name="keywords"
          content="Nursery, Gate of angels, Gate of angels nursery, nursery at maadi, nurserys "
        />
        <meta name="author" content="Gate of Angels" />
        <meta name="copyright" content="Gate of Angels" />
      </Head>
      <Breadcrumb title="Teacher" href="/teachers" />
      <div className="page__teacher__wrapper margin__top">
        <TeachersComponent />
      </div>
    </Page>
  );
};

export default Teachers;
