import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import itch from "C:/Users/User/Documents/GitHub/erikavalencia.github.io/src/Assets/itch-io.png"; 

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="justify-content-end">
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ErikaValenciaArango"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/erika-valencia-arango/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
              {/* itch.io */}
              <li className="social-icons">
                <a
                  href="https://crimson-videogames.itch.io/" // Reemplaza con tu página en itch.io
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <img
                    src={itch}
                    alt="Itch.io"
                    style={{
                      width: "30px", // Ajusta el tamaño de la imagen
                      height: "30px",
                      borderRadius: "5px", // Si deseas bordes redondeados
                    }}
                  />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
