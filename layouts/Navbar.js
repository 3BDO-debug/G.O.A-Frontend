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
                    gateofangels20@gmail.com
                  </li>
                  <li>
                    <FontAwesomeIcon icon={["fas", "home"]} /> 28 Eleco
                    Buildings, El Shatr EL Sades, Zahraa Al Maadi, Cairo
                  </li>
                </ul>
              </MotionInView>
            </div>
            <div className="col-lg-4 col-md-2 col-xl-6">
              <MotionInView variants={varFadeInRight}>
                <ul className="top__social">
                  <li>
                    <a href="https://www.facebook.com/Gate-of-Angels-100176091870239">
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
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
                          Gate of Angels
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
                      <a href="https://wa.me/+201147709971" target="__blank">
                        <span className="whats__ap">
                          <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                        </span>
                        0114 770 9971
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
