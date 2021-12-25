import React from "react";
// components
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import { default as ClassesComponent } from "../components/Classes";

const Classes = () => {
  return (
    <Page>
      <Breadcrumb title="Classes" href="/classes" />
      <div className="classes__wrapper">
        <ClassesComponent />
      </div>
    </Page>
  );
};

export default Classes;
