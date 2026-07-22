import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiPostman,
  SiFirebase,
  SiMacos,
  SiFigma,
  SiGit,
  SiGithub,
  SiJira,
  SiSlack,
  SiGradle,
} from "react-icons/si";

import {
  FaAws
} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p style={{ fontSize: 24 }}>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <p style={{ fontSize: 24 }}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: 24 }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: 24 }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p style={{ fontSize: 24 }}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}>C</span>
        <p style={{ fontSize: 24 }}>Claude</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={{ fontSize: 24 }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: 24 }}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p style={{ fontSize: 24 }}>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={{ fontSize: 24 }}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGradle />
        <p style={{ fontSize: 24 }}>Gradle</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
