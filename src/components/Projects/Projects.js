import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import colony from "../../Assets/Projects/colony.jpeg";
import editor from "../../Assets/Projects/agroahp.png";
import huellas from "../../Assets/Projects/huellas.png";
import agro from "../../Assets/Projects/agroahp.png";
import forlife from "../../Assets/Projects/forlife.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huellas}
              isBlog={false}
              title="Entre huellas y recuerdos"
              description="Entre huellas y recuerdos es un juego narrativo y de exploración donde acompañas a un niño en un emotivo viaje a través de sus recuerdos para encontrar a su perro perdido. A medida que avanzas por los niveles, el protagonista deberá enfrentarse a diferentes enemigos y esquivar obstáculos que le permitan desbloquear fragmentos de sus recuerdos. Estos fragmentos lo acercan un paso más a comprender lo que ocurrió y por qué su fiel compañero desapareció. 
              Tu objetivo final es reunir todos los recuerdos necesarios para descubrir dónde se encuentra el perro y traer de vuelta a ese amigo inseparable que tanto anhela. ¿Podrás ayudar al protagonista a superar las sombras de sus propios recuerdos y encontrar la paz que tanto necesita?"
              ghLink="https://github.com/ErikaValenciaArango/GenEquipo6"
              demoLink="https://crimson-videogames.itch.io/entre-huellas-y-recuerdos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forlife}
              isBlog={false}
              title="For Life"
              description="One night, an ordinary pumpkin in a yard receives a mysterious drop of green substance, and instantly, it begins to grow enormously. Rolling out of the house, it invades the streets of the neighborhood, and soon becomes an unstoppable mass that crushes everything in its path. Just at that moment, a boy named Tomás, who was returning from a friend's house, accidentally crosses his path.
              The pumpkin, as if it had a life of its own, changes course and begins to follow Tomás. The boy runs desperately, zigzagging through the streets while the enormous pumpkin rolls behind him, getting faster and bigger. The neighbors watch in horror from their windows, while Tomás frantically looks for a place to hide."
              ghLink="https://github.com/SabasRocha/GameJam2"
              demoLink="https://ana-vg.itch.io/for-life"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=""
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colony}
              isBlog={false}
              title="Colony defender"
              description="Colony Defender is a game where the player controls a spaceship to defend the human colony of New Gaia from waves of alien enemies and mercenaries. The goal is to destroy the enemies before they invade the colony, upgrading the ship with weapons and abilities as the game progresses. As the game advances, the waves become more challenging, and the player ultimately faces an alien boss. The defeat of enemies and the successful protection of the colony depend on the player's skill and strategic upgrades."
              ghLink="https://github.com/ErikaValenciaArango/GameJam3"
              demoLink="https://crimson-videogames.itch.io/colony-defender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agro}
              isBlog={false}
              title="AgroAHP"
              description="AgroAHP es una aplicación web diseñada para apoyar la toma de decisiones agrícolas, específicamente en la selección de fitosanitarios, utilizando el Proceso Analítico Jerárquico (AHP). Este método permite descomponer decisiones complejas en niveles jerárquicos, lo que facilita la evaluación de diferentes opciones basadas en criterios como costo, impacto ambiental y toxicidad. La aplicación ofrece una interfaz sencilla e intuitiva, permitiendo al usuario ajustar los criterios según las necesidades del agricultor, como la sensibilidad del cultivo, el presupuesto disponible y las regulaciones locales. Además, AgroAHP incluye herramientas visuales como gráficos y reportes que permiten una interpretación clara de los resultados, ayudando a los usuarios a comparar cómo cada fitosanitario se desempeña en relación con los criterios definidos. Con un enfoque en sostenibilidad, la aplicación fomenta decisiones que minimicen el impacto ambiental y promuevan la salud del ecosistema. También cuenta con una base de datos actualizada sobre fitosanitarios, que el usuario puede consultar y modificar según las necesidades locales."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
