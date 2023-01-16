/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import projImg1 from "../../public/Ats.png";
// import projImg2 from "../../public/wiseSkulls.png";
// import projImg3 from "../../public/CRM.png";
// import projImg4 from "../../public/Arch.png";
// import projImg5 from "../../public/Client.png";
// import projImg6 from "../../public/sg.png";
// import projImg7 from "../../public/webWise.png";
// import projImg8 from "../../public/anupportimg.png";
import colorSharp2 from "../../public/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
import { TypeAnimation } from "react-type-animation";

const Projects = () => {
  const projects = [
    {
      title: "Applicant Tracking System",
      description: "Design & Development",
      // imgUrl: projImg1,
      URL:"/"
    },
    {
      title: "WiseSkulls ATS Client Module Application",
      description: "Design & Development",
      // imgUrl: projImg2,
      URL:"https://client.wiseskulls.com"
    },
    {
      title: "Customer Relation Management Application",
      description: "Design & Development",
      // imgUrl: projImg3,
      URL:"/"
    },
    {
      title: "Architectural Firm Website Template",
      description: "Mobile-first Responsive Design",
      // imgUrl: projImg4,
      URL:"https://commerce-gamma-six-33.vercel.app/"
    },
    {
      title: "WiseSkulls ATS Client Module Application",
      description: "Design & Development",
      // imgUrl: projImg5,
      URL:"https://client.wiseskulls.com/"
    },
    {
      title: "Solar Industry Website Template",
      description: "Mobile-first Responsive Design",
      // imgUrl: projImg6,
      URL:"https://s-g-bhagwan-group.vercel.app/"
    },
    {
      title: "WiseSkulls Website",
      description: "Mobile-first Responsive Design & Development",
      // imgUrl: projImg7,
      URL:"https://www.wiseskulls.com/"
    },
    {
      title: "Portfolio Website",
      description: "Mobile-first Responsive Design & Development",
      // imgUrl: projImg8,
      URL:"https://anupsolanki.com"
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
                     Throughout my learning journey, from developing basic webPages to building complex apps.
                     I've developed and deployed few Web Application including Customer Relationship Form and Applicant Tracking System,
                     with captivating User Interface and minimalistic yet elegant design. Also developed enticing Responsive mobile-first website templates and for firms.
                     here are my projects I have developed personally and with team.
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
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
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
