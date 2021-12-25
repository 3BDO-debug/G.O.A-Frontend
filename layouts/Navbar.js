import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// next
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// components
import logo from "../assets/images/logo.png";
import {
  MotionInView,
  varFadeIn,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
  varFadeOutDown,
  varZoomIn,
} from "../components/animate";
import { render } from "react-dom";
import { motion } from "framer-motion";

// ------------------------------------------------------------------------------

const navbarConfig = [
  { name: "Home", href: "/" },
  { name: "Teachers", href: "/teachers" },
  { name: "Classes", href: "/classes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

// ------------------------------------------------------------------------------

const AnimatedNavbar = ({ stickyClass, children }) => {
  let context;
  if (stickyClass) {
    context = (
      <motion.div
        initial={varFadeInDown.initial}
        animate={varFadeInDown.animate}
        exit={varFadeInDown.exit}
        className="navbar__wrapper"
        style={{ position: "fixed", top: 0, zIndex: 11, width: "100%" }}
      >
        {children}
      </motion.div>
    );
  } else {
    context = <div className="navbar__wrapper">{children}</div>;
  }

  return context;
};

// ------------------------------------------------------------------------------

const Navbar = () => {
  const router = useRouter();

  const [addClass, updateClass] = useState(false);
  const [stkyClass, setStkyClass] = useState(false);

  const handleClick = () => {
    updateClass(true);
  };
  const handleClickCross = () => {
    updateClass(false);
    window.scrollTo(0, 0);
  };
  const scrollHandleScroll = () => {
    if (window.scrollY > 20) {
      setStkyClass(true);
    } else {
      setStkyClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandleScroll);
  }, []);

  console.log("hello", router);

  return (
    <>
      <div className="navbar__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-xl-6">
              <MotionInView variants={varFadeInLeft}>
                <ul className="nav__top__left">
                  <li>
                    <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
                    0devdesign.studio@gmail.coom
                  </li>
                  <li>
                    <FontAwesomeIcon icon={["fas", "home"]} /> 4297 Libby
                    Street, Beverly Hills, California
                  </li>
                </ul>
              </MotionInView>
            </div>
            <div className="col-lg-4 col-md-2 col-xl-6">
              <MotionInView variants={varFadeInRight}>
                <ul className="top__social">
                  <li>
                    <a href="www.factbook.com">
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                    </a>
                  </li>
                  <li>
                    <a href="www.factbook.com">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                  </li>
                  <li>
                    <a href="www.factbook.com">
                      <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                    </a>
                  </li>
                  <li>
                    <a href="www.factbook.com">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                  </li>
                </ul>
              </MotionInView>
            </div>
          </div>
        </div>
      </div>
      <AnimatedNavbar stickyClass={stkyClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar__inner_container">
                <div className="logo">
                  <MotionInView variants={varFadeIn}>
                    <h4>
                      {/* <NavLink to="/">Logo</NavLink> */}
                      <Link href="/">
                        <h3 style={{ color: "#f44d19", fontWeight: 700 }}>
                          G.O.A
                        </h3>
                      </Link>
                    </h4>
                  </MotionInView>
                </div>
                <div className="manu">
                  <ul className={addClass ? "vissible" : "hidden"}>
                    {navbarConfig.map((navbarItem) => (
                      <li onClick={handleClickCross}>
                        <Link href={navbarItem.href}>
                          <a
                            className={
                              router.pathname === navbarItem.href && "active"
                            }
                          >
                            {navbarItem.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={addClass ? "vissible__cross" : "hidden__corss"}
                    onClick={handleClickCross}
                  >
                    <FontAwesomeIcon icon="times" />
                  </div>
                  <MotionInView variants={varZoomIn}>
                    <div className="contact__btn">
                      <a href="facebook.com">
                        <span className="whats__ap">
                          <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                        </span>
                        +1 516 231 1313
                      </a>
                    </div>
                  </MotionInView>
                </div>
                <div className="mobile__menu" onClick={handleClick}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedNavbar>
    </>
  );
};
export default Navbar;
