import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Erika Andrea Valencia Arango </span>
            from <span className="purple"> Colombia.</span>
            <br />
            I am Electronics and Telecommunications Engineer, focused on video game development and web 
            applications, with knowledge in C#, 3D modeling, user interface design, HTML, CSS, JavaScript, 
            Python, and MongoDB. I stand out for my effective communication skills, teamwork, problem-solving 
            abilities, and commitment to continuous improvement and the exploration of new technologies, 
            enabling me to contribute efficiently to collaborative and innovative projects.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
