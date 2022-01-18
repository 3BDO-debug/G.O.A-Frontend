import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SRLWrapper } from "simple-react-lightbox";
// next
import Image from "next/image";
// contexts
import { GalleryContext } from "../contexts";
import { mainUrl } from "../__apis__/axios";

const Footer = () => {
  const gallery = useContext(GalleryContext).galleryState[0];

  const [bootomClass, setBootomClass] = useState(false);

  const scrollHandleScroll = () => {
    if (window.scrollY > 500) {
      setBootomClass(true);
    } else {
      setBootomClass(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandleScroll);
  }, []);

  return (
    <div className="footer__wrapper padding__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="footer__one">
              <h3 className="footer__title">Contact Us</h3>
              <ul className="footer__list1">
                <li>
                  <FontAwesomeIcon icon={["fas", "phone-volume"]} />
                  Phone: 0114 770 9971
                </li>
                <li>
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  Mail: gateofangels20@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={["fas", "home"]} />
                  Address: 28 Eleco Buildings, El Shatr EL Sades, Zahraa Al
                  Maadi, Cairo
                </li>
                <li>
                  <FontAwesomeIcon icon={["fas", "clock"]} />
                  Working day: 7am - 4pm, Saturday - Thursday
                </li>
              </ul>
              <ul className="footer__social">
                <li>
                  <a
                    href="https://www.facebook.com/Gate-of-Angels-100176091870239"
                    target="__blank"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer__one">
              <h3 className="footer__title">Our Gallery</h3>
              <ul className="footer__blog__img">
                <SRLWrapper>
                  {gallery.map((footerImage, i) => (
                    <li key={i}>
                      <a href={footerImage.thumbnail}>
                        <Image
                          width={70}
                          height={40}
                          src={`${mainUrl}/${footerImage.image}`}
                          alt={footerImage.image_name}
                        />
                      </a>
                    </li>
                  ))}
                </SRLWrapper>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="copy__right">
              ©2021 Gate of Angels powered by
              <a
                style={{ color: "#f44d19", marginLeft: "5px" }}
                href="https://codehustle.live"
                target="__blank"
              >
                Code Hustle
              </a>
            </p>
          </div>
        </div>
      </div>

      <div
        className={"bottom__top" + (bootomClass ? " bottom__fade" : "")}
        onClick={() => scrollTop()}
      >
        <FontAwesomeIcon icon={["fas", "angle-up"]} />
      </div>
    </div>
  );
};
export default Footer;
