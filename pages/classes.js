import React from "react";
// components
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import Service from "../components/Service";

const Classes = () => {
  return (
    <Page>
      <Breadcrumb title="Classes" href="/classes" />
      <div className="classes__wrapper">
        <Service />
      </div>
    </Page>
  );
};

export default Classes;
