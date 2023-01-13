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
               <span >Say Hello! </span> <hr className="break" />
               <span className="rainbow-text-white" >anupsolanki7@gmail.com</span> 
              </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                  <Link href="https://www.linkedin.com/in/anup-solanki-4262b9162" target='_blank'><Image src={navIcon1} alt="Icon" /></Link>
                  <Link href="https://github.com/AnupSolanki7" target='_blank' rel="noreferrer"><Image className="git-icon" src={navIcon2} alt="Icon" /></Link>
                  <Link href="https://www.instagram.com/anupsolanki7/"  target='_blank' rel="noreferrer"><Image src={navIcon3} alt="Icon" /></Link>
                </div>
              </Col>
              <span style={{marginTop:'40px'}} ></span>
              <hr />
                <p style={{textAlign:'center'}}>Copyright <span className="rainbow-text-white">Anup Solanki</span>  2023.</p>
            </Row>
          </Container>
        </footer>
      )
}

export default Footer