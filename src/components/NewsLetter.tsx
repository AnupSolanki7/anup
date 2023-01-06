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
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={"Get my Résumé from here...."}
                  disabled
                />
                <Link target={'_blank'} href="https://drive.google.com/file/d/1Sd7wSfZMv5Wy-sMITC60-KDF3HU6K4Z3/view?usp=share_link">Résumé (PDF) </Link>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default NewsLetter;
