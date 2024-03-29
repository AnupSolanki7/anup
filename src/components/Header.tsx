/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useRouter } from 'next/router'
import Image from "next/image";
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
    if(value === "skills"){
      document.documentElement.scrollTop = 700;
    }else if(value === "projects"){
      document.documentElement.scrollTop = 1400;
    }else if(value ==="contact"){
      document.documentElement.scrollTop = 2600;
    }else{
      document.documentElement.scrollTop = 0;
    }
  };

  return (
    <>
       
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <Image alt="" src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/anup-solanki-4262b9162"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image alt="" src={navIcon1} />
                </a>
                <a
                  href="https://github.com/AnupSolanki7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="git-icon" alt="" src={navIcon2} />
                </a>
                <a
                  href="https://www.instagram.com/anupsolanki7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image alt="" src={navIcon3} />
                </a>
              </div>
              <a onClick={() => onUpdateActiveLink("contact")}>
                <button className="vvd">
                  <span className="rainbow-text-light">Let’s Connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
