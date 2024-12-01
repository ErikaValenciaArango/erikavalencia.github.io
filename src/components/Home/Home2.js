import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatarr.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import itchB from "../../Assets/itch-io-morado.png"; 

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Electronics and Telecommunications Engineer, focused on video game development and web
              applications, with knowledge in C#, 3D modeling, user interface design, HTML, CSS, JavaScript,
              Python, and MongoDB. I stand out for my effective communication skills, teamwork, problem-solving
              abilities, and commitment to continuous improvement and the exploration of new technologies,
              enabling me to contribute efficiently to collaborative and innovative projects.
              <b className="purple"></b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p><span className="purple">erikavalenciaarango@gmail.com</span></p>
            <ul className="home-about-social-links">
              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/ErikaValenciaArango"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/erika-valencia-arango/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* itch.io */}
              <li className="social-icons">
                <a
                  href="https://crimson-videogames.itch.io/" // Reemplaza con tu página en itch.io
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <img
                    src={itchB}
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
    </Container>
  );
}

export default Home2;

