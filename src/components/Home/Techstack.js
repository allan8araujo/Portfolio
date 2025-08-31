import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,  
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiKotlin,
  SiFlutter,
  SiReact
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { GrAndroid } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ paddingBottom: "50px" }}>      
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
                  <p style={{ fontSize: 24 }}>Kotlin</p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <p style={{ fontSize: 24 }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: 24 }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <p style={{ fontSize: 24 }}>Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: 24 }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: 24 }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: 24 }}>Firebase</p>
      </Col>
    </Row>
  );
}

export default Techstack;
