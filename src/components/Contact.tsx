import React, { useRef } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../public/contact-img.svg";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  const form: any = useRef();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails]: any = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus]: any = useState({});

  const onFormUpdate = (category: any, value: any) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    if (formDetails !== formInitialDetails && formDetails.email !== "") {
      setButtonText("Sending...");
      emailjs
        .sendForm(
          "service_u0qm1l4",
          "template_a1lxt3q",
          form.current,
          "BGtkriYE2BHIV8DJk"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      emailjs
        .sendForm(
          "service_u0qm1l4",
          "template_3fjxwfz",
          form.current,
          "BGtkriYE2BHIV8DJk"
        )
        .then(
          (result: any) => {
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            console.log(result);

            if (result.status == 200) {
              setStatus({ success: true, message: "Message sent successfully" });
            } else {
              setStatus({
                success: false,
                message: "Something went wrong, please try again later.",
              });
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="contact" id="contactUs">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                // <img
                //   className={
                //     isVisible ? "animate__animated animate__zoomIn" : ""
                //   }
                //   src={contactImg}
                //   alt="Contact Us"
                // />
                <Image
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          name="firstName"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          name="lastName"
                          onChange={(e: any) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          name="email"
                          required
                          onChange={(e: any) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          name="phone"
                          onChange={(e: any) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1 contact-send">
                        <textarea
                          rows={6}
                          value={formDetails.message}
                          placeholder="Message"
                          name="message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status?.message && (
                        <Col
                          style={{
                            flex: "none",
                            display: "flex",
                            justifyContent: "center",
                          }}
                          size={12}
                        >
                          <p
                            style={{
                              marginTop: "10px",
                              textAlign: "center",
                              background: status?.success === true ? "transparent linear-gradient(180deg, #4CD964 0%, #26AD5F 100%) 0% 0% no-repeat padding-box" : "transparent linear-gradient(180deg, #e72c2c 0%, #7e0000 100%) 0% 0% no-repeat padding-box" ,
                              padding: "5px",
                              width: "45%",
                              textShadow: "0px 4px 3px #00000029",
                              borderRadius: "5px",
                              color: "white",
                            }}
                          >
                            {status?.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
