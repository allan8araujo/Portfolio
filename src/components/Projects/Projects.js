import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import league_of_legends_assistant from "../../Assets/Projects/league_of_legends_assistant.png";
import cerveja_certa from "../../Assets/Projects/cerveja_certa.png";
import unique_parking from "../../Assets/Projects/unique_parking.png";
import empresas from "../../Assets/Projects/empresas_app.png";
import crypto_currency_app from "../../Assets/Projects/crypto_currency_app.png";
import vip_sports from "../../Assets/Projects/vip_sports.png";

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
              imgPath={empresas}
              isBlog={false}
              title="Itau Empresas"
              description="Provides a comprehensive suite of banking services. It allows seamless management of financial transactions, investments, and credit operations. Users can handle payroll, payments, and transfers with ease. The app also offers real-time account monitoring and detailed financial reporting. Designed with advanced security features, it ensures safe and efficient business banking on-the-go."

              playstoreLink="https://play.google.com/store/apps/details?id=com.itau.empresas&hl=pt_PT"
            />
          </Col>

          <Col md={4} className="League of legends assistant">
            <ProjectCard
              imgPath={league_of_legends_assistant}
              isBlog={false}
              title="League of legends assistant"
              description="LoL Gemini Assistant is a comprehensive companion app for League of Legends players, designed to enhance the gaming experience by providing real-time insights, strategy recommendations, and personalized tips. Built with Kotlin Multiplatform, the app offers seamless functionality across Android and iOS devices."
              ghLink="https://github.com/allan8araujo/league_of_legends_assistant?tab=readme-ov-file"              
            />
          </Col>      
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vip_sports}
              isBlog={false}
              title="Vip Sports"
              description=" Developed and continue to provide support for our sports training club management app, built with Kotlin for Android, and powered by Firebase as the serverless backend."
            />
          </Col>


<Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto_currency_app}
              isBlog={false}
              title="Crypto Currency App"
              description="App made to keep track on crypto currencies and filter/favorite"
              ghLink="https://github.com/allan8araujo/crypto_currency_app?tab=readme-ov-file"              
            />
          </Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={cerveja_certa}
              isBlog={false}
              title="Cerveja Certa"
              description="Discover the perfect beer choice with Cerveja Certa – your ultimate beer calculator!"
              playstoreLink="https://"              
            />
          </Col>          

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={unique_parking}
              isBlog={false}
              title="Unique Parking"
              description="An application developed for the financial control and management of vehicles within a parking lot. With Bluetooth printer integration for printing vehicle entry and exit receipts, ensuring parking control. It also has functionality to print invoices (all or summarized) for the parking lot."
              playstoreLink="https://"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
