import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Correo: info@tuempresa.com</p>
            <p>Teléfono: +1 234 567 8900</p>
          </Col>
          <Col md={4}>
            <h5>Redes sociales</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Suscribete</h5>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Ingresa tu correo electrónico" />
              </div>
              <button type="submit" className="btn btn-secondary">Enviar</button>
            </form>
          </Col>
        </Row>
        <hr />
        <p className="text-center">© Tu Empresa {new Date().getFullYear()}. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;