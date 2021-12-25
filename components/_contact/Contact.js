import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// apis
import { mailSender } from "../../__apis__/contact";
// components
import { MotionInView, varFadeIn, varFadeInLeft } from "../animate";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [body, setBody] = React.useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("phoneNumber", phoneNumber);
    data.append("body", body);

    await mailSender(data)
      .then(() => {
        setName("");
        setPhoneNumber("");
        setBody("");
        alert("Mail sent successfully");
      })
      .catch((error) => console.log("contact", error));
  };

  return (
    <div className="contact__container padding__top__botton">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-2 mx-auto">
            <div className="row">
              <div className="col-lg-6">
                <MotionInView variants={varFadeInLeft}>
                  <div className="contact__left">
                    <div className="section__title__container mb-3">
                      <h5 className="section__subtitle">Contact Us</h5>
                      <h2 className="section__title">Keep in Touch</h2>
                    </div>
                    <form onSubmit={submitHandler}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mb-4"
                          id="name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          aria-describedby="emailHelp"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mb-4"
                          value={phoneNumber}
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                          id="phonenumber"
                          placeholder="Your Phone number"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control mb-4"
                          name="textarea"
                          id="textarea"
                          placeholder="Message"
                          cols="30"
                          value={body}
                          rows="5"
                          onChange={(event) => setBody(event.target.value)}
                        >
                          {body}
                        </textarea>
                      </div>
                      <button
                        onClick={submitHandler}
                        type="submit"
                        className="btn page__contact__btn"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </MotionInView>
              </div>
              <div className="col-lg-6">
                <MotionInView variants={varFadeIn}>
                  <div className="contact__right">
                    <div className="section__title__container mb-3">
                      <h2 className="section__title">Address</h2>
                      <p className="section__contnet">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque.
                      </p>
                    </div>
                    <div className="address__contact">
                      <div className="single__address">
                        <FontAwesomeIcon icon={["fas", "home"]} />
                        <div className="address__content ml-3">
                          <p>Address</p>
                          <p>4297 Libby Street, Beverly Hills, California</p>
                        </div>
                      </div>
                      <div className="single__address">
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                        <div className="address__content ml-3">
                          <p>Email:</p>
                          <p>0devdesign.studio@gamil.com</p>
                        </div>
                      </div>
                      <div className="single__address">
                        <FontAwesomeIcon icon={["fas", "phone-volume"]} />
                        <div className="address__content ml-3">
                          <p>Phone Number:</p>
                          <p>+1 516 231 1313</p>
                        </div>
                      </div>
                      <div className="single__address">
                        <FontAwesomeIcon icon={["fas", "clock"]} />
                        <div className="address__content ml-3">
                          <p>Working Time:</p>
                          <p>Mon - Sat: 8am - 17.30pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionInView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
