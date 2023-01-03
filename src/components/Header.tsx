/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from 'next/image';
import Logo from "../../public/AnupSolanki.svg";
import navIcon1 from "../../public/nav-icon1.svg";
import navIcon2 from "../../public/nav-icon2.svg";
import navIcon3 from "../../public/nav-icon3.svg";
// import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: any) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <Image alt="" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anup-solanki-4262b9162" target='_blank' rel="noreferrer">
              <Image alt="" src={navIcon1} />
              </a>
              <a href="https://github.com/AnupSolanki7" target='_blank' rel="noreferrer">
              <Image className="git-icon" alt="" src={navIcon2} />
              </a>
              <a href="https://www.instagram.com/anupsolanki7/"  target='_blank' rel="noreferrer">
              <Image alt="" src={navIcon3} />
              </a>
            </div>
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
