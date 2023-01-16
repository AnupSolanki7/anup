/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/Ats.png";
import projImg2 from "../assets/wiseSkulls.png";
import projImg3 from "../assets/CRM.png";
import projImg4 from "../assets/Arch.png";
import projImg5 from "../assets/Client.png";
import projImg6 from "../assets/sg.png";
import projImg7 from "../assets/webWise.png";
import projImg8 from "../assets/anupportimg.png";
import colorSharp2 from "../../public/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Applicant Tracking System",
      description: "Design & Development",
      imgUrl: projImg1,
      URL: "https://www.wiseskulls.com/",
    },
    {
      title: "WiseSkulls ATS Client Module Application",
      description: "Design & Development",
      imgUrl: projImg2,
      URL: "https://client.wiseskulls.com",
    },
    {
      title: "Customer Relation Management Application",
      description: "Design & Development",
      imgUrl: projImg3,
      URL: "https://www.wiseskulls.com/",
    },
    {
      title: "Architectural Firm Website Template",
      description: "Mobile-first Responsive Design",
      imgUrl: projImg4,
      URL: "https://commerce-gamma-six-33.vercel.app/",
    },
    {
      title: "WiseSkulls ATS Client Module Application",
      description: "Design & Development",
      imgUrl: projImg5,
      URL: "https://client.wiseskulls.com/",
    },
    {
      title: "Solar Industry Website Template",
      description: "Mobile-first Responsive Design",
      imgUrl: projImg6,
      URL: "https://s-g-bhagwan-group.vercel.app/",
    },
    {
      title: "WiseSkulls Website",
      description: "Mobile-first Responsive Design & Development",
      imgUrl: projImg7,
      URL: "https://www.wiseskulls.com/",
    },
    {
      title: "Portfolio Website",
      description: "Mobile-first Responsive Design & Development",
      imgUrl: projImg8,
      URL: "https://anupsolanki.com",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <TypeAnimation
                    sequence={["Projects", 1500, ""]}
                    speed={40}
                    deletionSpeed={40}
                    wrapper="h2"
                    repeat={Infinity}
                  />
                  <p>
                    Throughout my learning journey, from developing basic
                    webPages to building complex apps. I've developed and
                    deployed few Web Application including Customer Relationship
                    Form and Applicant Tracking System, with captivating User
                    Interface and minimalistic yet elegant design. Also
                    developed enticing Responsive mobile-first website templates
                    and for firms. here are my projects I have developed
                    personally and with team.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Thing's I've Built</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((e, index) => {
                            return (
                              <Col size={12} sm={6} md={4}>
                                <Link
                                  style={{ color: "white" }}
                                  href={e.URL}
                                  target="_blank"
                                >
                                  <div className="proj-imgbx">
                                    {/* <img src={imgUrl} /> */}
                                    <Image src={e.imgUrl} alt="" />
                                    <div className="proj-txtx">
                                      <h4>{e.title}</h4>
                                      <span>{e.description}</span>
                                    </div>
                                  </div>
                                </Link>
                              </Col>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
      <Image className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;
