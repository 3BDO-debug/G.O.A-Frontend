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
                  Phone: +1 516 231 1313
                </li>
                <li>
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  Mail: 0devdesign.studio@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={["fas", "home"]} />
                  Address: 3366 Jefferson Street, NEW HAMPTON, IA
                </li>
                <li>
                  <FontAwesomeIcon icon={["fas", "clock"]} />
                  Working day: 9am - 5pm EST, Monday - Friday
                </li>
              </ul>
              <ul className="footer__social">
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
