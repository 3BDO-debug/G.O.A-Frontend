import React from "react";
// next
import Link from "next/link";
import Image from "next/image";
// components
import kid1 from "../assets/images/kid1.svg";
import kid2 from "../assets/images/kid2.svg";
import sidecolor from "../assets/images/sidecolor.svg";

const Breadcrumb = ({ title, href }) => {
  return (
    <div className="breadcrumb__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__section">
              <h2 className="breadcrumb__title">{title}</h2>
              <ul
                className={`breadcrumb__ul ${
                  title ? "" : "breadcrumb__ul__lastchild"
                }`}
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  {href ? (
                    <Link href={`/${href}`}>{title}</Link>
                  ) : (
                    <a>{title}</a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="side__color__1">
        <Image src={sidecolor} alt="sidecolor1" />
      </div>
      <div className="side__color__2">
        <Image src={kid1} alt="sidecolor2" />
      </div>
      <div className="side__color__3">
        <Image src={kid2} alt="sidecolor3" />
      </div>
    </div>
  );
};

export default Breadcrumb;
