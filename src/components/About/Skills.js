import React from "react";
import "C:/Users/User/Documents/GitHub/erikavalencia.github.io/src/CardComponent.css"; 

const Skills = () => {
  return (
    <div className="card-container">
      <div style={{backgroundColor: '#4b005d', color: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'left',}}>
        <h2 style={{textAlign: 'center'}}>Education</h2>
        <ul>
          <li>Electronic and Telecommunications Engineering - University of Cauca</li>
          <li>Video Game Development with Unity - Generation Colombia</li>
          <li>Coding and Programming in Python - Samsung</li>
          <li>Data Analytics - MinTIC</li>
        </ul>
      </div>
      <div style={{backgroundColor: '#4b005d', color: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'left',}}>
        <h2 style={{textAlign: 'center'}}>Skills</h2>
        <ul>
          <li>Unity, C#, JavaScript, Python, HTML, CSS, Java, Huawei Cloud, Git y MongoDB.</li>
          <li>Teamwork, problem-solving, communication, autonomy, and attention to detail.</li>
        </ul>
      </div>
      <div style={{backgroundColor: '#4b005d', color: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'left',}}>
        <h2 style={{textAlign: 'center'}}>Achievements</h2>
        <ul>
          <li>Huawei ICT COMPETITION: Participant and national winner in the CLOUD TRACK.</li>
          <li>Participation in the 10th Ibero-American Conference on Human-Computer Interaction and Decision 2024 with the article titled: Prospective user interface for decision-making processes in multidimensional agriculture.</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
