/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" style={{ margin: "0px" }}>
          <img src="/AnupSolanki.svg" width="100%" height="50%" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mb-4">
            <li className="nav-item">
              <div className="tabs col">
                <ul>
                  <li>
                    {" "}
                    <Link href="/"> Home </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/skills"> Skills </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/projects"> Projects </Link>
                  </li>
                </ul>
              </div>
            </li>
          </Nav>
          <Nav className="mb-4">
            <li className="nav-item">
              <div className="socials navbar-nav mr-auto">
                <ul>
                  <li className="linked">
                    <FaLinkedinIn />
                  </li>
                  <li className="insta">
                    <FaInstagram />
                  </li>
                  <li className="facebook">
                    <FaFacebookF />
                  </li>
                </ul>
              </div>
            </li>
          </Nav>
          <Nav className="mb-4">
            <li className="nav-item">
              <div className="action-btn navbar-nav mr-auto">
                <button> Let's Connect</button>
              </div>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
