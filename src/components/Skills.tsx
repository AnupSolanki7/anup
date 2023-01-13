/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import meter1 from "../../public/react-js-icon.svg";
import meter2 from "../../public/next.svg";
import meter3 from "../../public/javascript.svg";
import html from "../../public/html.svg";
import css from "../../public/css.svg";
import bootstrap from "../../public/bootstrap.svg";
import gitHub from "../../public/githubLogo.svg";
import antd from "../../public/antd.svg";
import mui from "../../public/mui.svg";
import redux from "../../public/redux.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../../public/color-sharp.png";
import { TypeAnimation } from "react-type-animation";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              
                <TypeAnimation
                  sequence={[
                    "Skills",
                    1500,
                    "",
                  ]}
                  speed={40}
                  deletionSpeed={40}
                  wrapper="h2"
                  repeat={Infinity}
                />
              
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <Image alt="Image" src={meter1} />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <Image src={meter2} alt="Image" />
                  <h5>Next Js</h5>
                </div>
                <div className="item">
                  <Image src={meter3} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <Image src={html} alt="Image" />
                  <h5>html</h5>
                </div>
                <div className="item">
                  <Image src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <Image src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <Image src={mui} alt="Image" />
                  <h5>MUI</h5>
                </div>
                <div className="item">
                  <Image src={antd} alt="Image" />
                  <h5>Antd</h5>
                </div>
                <div className="item">
                  <Image src={redux} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <Image src={gitHub} alt="Image" />
                  <h5>GitHub</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
      <Image className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
