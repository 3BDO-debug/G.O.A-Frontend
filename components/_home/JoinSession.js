import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const JoinSession = () => {
  return (
    <div className="joinsession__wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 offset-sm-0 col-lg-6 text-center offset-lg-5 mx-auto">
            <h5 className="session__sub">Join Our New Session</h5>
            <h2 className="session__title">
              Call To Enroll Your Child +256 6425 789
            </h2>
            <Link href="/contact">
              <a className="session__join">
                Call Us Now
                <FontAwesomeIcon icon="caret-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinSession;
