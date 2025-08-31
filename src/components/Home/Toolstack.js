import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiPostman,
  SiMacos,
SiFigma ,
} from "react-icons/si";

import{FaAws
} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p style={{ fontSize: 24 }}>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: 24 }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p style={{ fontSize: 24 }}>Figma</p>
      </Col>
      <Col xs={4} md={2 } className="tech-icons">
        <FaAws />
      </Col>

    </Row>
  );
}

export default Toolstack;
