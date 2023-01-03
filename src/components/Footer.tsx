import { Container, Row, Col } from "react-bootstrap";
import logo from "../../public/AnupSolanki.svg";
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
              <Col size={12} sm={6}>
                <Image src={logo} alt="Logo" />
              </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                  <a href="#"><Image src={navIcon1} alt="Icon" /></a>
                  <a href="#"><Image src={navIcon2} alt="Icon" /></a>
                  <a href="#"><Image src={navIcon3} alt="Icon" /></a>
                </div>
              </Col>
                <p style={{textAlign:'center'}}>Copyright Anup Solanki 2023. All Rights Reserved</p>
            </Row>
          </Container>
        </footer>
      )
}

export default Footer