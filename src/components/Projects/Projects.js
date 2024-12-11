import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import colony from "../../Assets/Projects/colony.jpeg";
import sotano from "../../Assets/Projects/sotano.jpeg";
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
              title="Between Footprints and Memories"
              description="Between Footprints and Memories is a narrative exploration game where you accompany a young boy on an emotional journey through his memories to find his lost dog. As you progress through the levels, the protagonist must face various enemies and overcome obstacles to unlock fragments of his memories. These fragments bring him one step closer to understanding what happened and why his loyal companion disappeared.
              Your ultimate goal is to gather all the necessary memories to discover the dog’s whereabouts and reunite with the inseparable friend he longs for. Can you help the protagonist overcome the shadows of his own memories and find the peace he so desperately seeks?"
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
              imgPath={sotano}
              isBlog={false}
              title="The basement of L'Angolo"
              description="In The Basement of L'Angolo, the player wakes up trapped in the basement of a Colombian restaurant infamous for its dark past. Chef Ferruzo, notorious for using human meat in his dishes, has unleashed a zombie invasion through grotesque experiments.
              The player must escape the restaurant by facing hordes of zombies, solving puzzles, and uncovering dark secrets while fighting for survival. The story is deeply intertwined with Colombian urban legends and historical events, immersing the player in an atmosphere of psychological and cultural horror."
              ghLink="https://github.com/ErikaValenciaArango/ProyectoFinal"
              demoLink="https://sylvanasbv.itch.io/elsotanodelangolo"              
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
              description="AgroAHP is a web application designed to support agricultural decision-making, specifically in selecting phytosanitary products, by utilizing the Analytic Hierarchy Process (AHP). This method breaks down complex decisions into hierarchical levels, making it easier to evaluate different options based on criteria such as cost, environmental impact, and toxicity.
              The application features a simple and intuitive interface, allowing users to adjust criteria according to the farmer’s needs, such as crop sensitivity, available budget, and local regulations. Additionally, AgroAHP includes visual tools like charts and reports for clear result interpretation, enabling users to compare how each phytosanitary product performs against the defined criteria.
              With a focus on sustainability, the application encourages decisions that minimize environmental impact and promote ecosystem health. It also provides an up-to-date database of phytosanitary products, which users can consult and modify to meet local needs."
              ghLink="https://github.com/ErikaValenciaArango/AgroAHP-front"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
