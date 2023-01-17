/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../public/header-img.svg";
import Image from "next/image";
import { BiRocket } from "react-icons/bi";
import TrackVisibility from "react-on-screen";
import { useEffect, useState } from "react";
import SpaceMan from "./SpaceMan";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className="text-area"
                >
                  <span className="tagline">A Journey through my Portfolio</span>
                  <h1>Hi! I'm Anup </h1>
                    <TypeAnimation
                      // Same String at the start will only be typed once, initially
                      className="data-rotate-text"
                      sequence={[
                        " FrontEnd Developer",
                        1000,
                        " React Js Developer",
                        1000,
                        " Web App Developer",
                        1000,
                      ]}
                      speed={50} // Custom Speed from 1-99 - Default Speed: 40
                      style={{ fontSize: "50px" }}
                      wrapper="h1" // Animation will be rendered as a <span>
                      repeat={Infinity} // Repeat this Animation Sequence infinitely
                    />
                  <p>
                    An Aspiring FrontEnd Web Developer, With a keen Aim for Creating Fluid & Engaging User Experience Website and Web Application.
                    I love Coding, AstroPhysics and Football
                  </p>
                  <a href="#projects">
                    <button className="rainbow-text-light">
                      View Projects <BiRocket className="rainbow-text" size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                // <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                //   <Image src={headerImg} alt="Header Img" />
                // </div>
                <SpaceMan />
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
