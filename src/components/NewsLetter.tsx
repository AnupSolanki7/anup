import Link from "next/link";
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

const NewsLetter = ({ status, message, onValidated }: any) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row style={{ flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Col lg={12} md={6} xl={5} style={{width:'100%', textAlign:'center'}}>
            <h3>
              Available for growth Opportunities. <br></br> Get my Educational and Professional details 
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7} style={{marginTop:'30px', width:'100%', display:'flex', justifyContent:'center'}}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                {/* <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={"Get my Résumé...."}
                  disabled
                /> */}
                <Link target={'_blank'} href="https://drive.google.com/file/d/1KpPchmtRtUdiwkqmwjbQDwc24vKob6Ds/view?usp=share_link">Résumé (PDF) </Link>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default NewsLetter;
