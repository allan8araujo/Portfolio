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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>      
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col><Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col><Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
