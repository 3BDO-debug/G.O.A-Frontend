import React from "react";
// components
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import { default as TeachersComponent } from "../components/teachers/Teachers";

const Teachers = () => {
  return (
    <Page>
      <Breadcrumb title="Teacher" href="/teachers" />
      <div className="page__teacher__wrapper margin__top">
        <TeachersComponent />
      </div>
    </Page>
  );
};

export default Teachers;
