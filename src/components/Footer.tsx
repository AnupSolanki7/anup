import { Container, Row, Col } from "react-bootstrap";
import logo from "../../public/AnupSolanki.svg";
import Link from 'next/link';
import navIcon1 from "../../public/nav-icon1.svg";
import navIcon2 from "../../public/nav-icon2.svg";
import navIcon3 from "../../public/nav-icon3.svg";
import MailChipForm from "./MailChipForm";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
              <MailChipForm/>
              <Col className="foot-logo" size={12} sm={6}>
               <span className="rainbow-text" >say Hello! </span> <br className="break" />
               <span className="rainbow-text" >anupsolanki7@gmail.com</span> 
              </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                  <Link href="https://www.linkedin.com/in/anup-solanki-4262b9162" target='_blank'><Image src={navIcon1} alt="Icon" /></Link>
                  <Link href="https://github.com/AnupSolanki7" target='_blank' rel="noreferrer"><Image className="git-icon" src={navIcon2} alt="Icon" /></Link>
                  <Link href="https://www.instagram.com/anupsolanki7/"  target='_blank' rel="noreferrer"><Image src={navIcon3} alt="Icon" /></Link>
                </div>
              </Col>
                <p style={{textAlign:'center'}}>Copyright Anup Solanki 2023. All Rights Reserved</p>
            </Row>
          </Container>
        </footer>
      )
}

export default Footer