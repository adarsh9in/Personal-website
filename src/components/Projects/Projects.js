import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="WEPOP (E-commerce App)"
              description="An e-commerce app for clothing using Googles Firebase"
              ghLink="https://github.com/adarsh9in/WEPOP"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Smart Weather Station"
              description="Worked Under supervision of Prof. Jetendra Joshi on Firebase Real-time Database"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="SkyCast"
              description="Weather App with MVVM using OpenWeather API"
              ghLink=""
                          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
