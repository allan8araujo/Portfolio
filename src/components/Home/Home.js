import { Container, Row, Col } from "react-bootstrap";

import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import ProjectCard from "../Projects/ProjectCards";
import league_of_legends_assistant from "../../Assets/Projects/league_of_legends_assistant.png";
import cerveja_certa from "../../Assets/Projects/cerveja_certa.png";
import unique_parking from "../../Assets/Projects/unique_parking.png";
import empresas from "../../Assets/Projects/empresas_app.png";
import empresas_1 from "../../Assets/Projects/empresas_1.png";
import emps from "../../Assets/Projects/emps_app.png";
import emps_1 from "../../Assets/Projects/emps_1.png";
import bradesco from "../../Assets/Projects/bradesco_app.png";
import bradesco_1 from "../../Assets/Projects/bradesco_1.png";
import crypto_currency_app from "../../Assets/Projects/crypto_currency_app.png";
import vip_sports from "../../Assets/Projects/vip_sports.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 className="heading">
                Hi, {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> I'M ALLAN ARAÚJO</strong>
              </h1>
              <h1 className="heading-subtitle">
                Android developer
              </h1>
              <div className="home-about-description">
                <p className="home-about-body">
                  <p>Android Developer with 4+ years of experience designing and delivering scalable mobile solutions for high-impact financial and enterprise apps. Skilled in Kotlin, Java, and modern Android frameworks, with a strong background in problem-solving and app lifecycle management.</p>
                  <p>Currently driving mobile innovation at CI&T, building and enhancing Android applications for enterprise clients, ensuring code quality, scalability, and performance across complex ecosystems.</p>
                  <p>Alongside professional work, I am an active contributor to the developer community, publishing applications on the Google Play Store and sharing open-source projects and insights on GitHub.</p>
                </p>
              </div>
            </Col>
            <Col md={2} />
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="project-section" id="projects">
        <Container>
          <h1 className="project-heading">
            <strong className="purple">Works </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-card mb-4">
              <ProjectCard
                imgPath={bradesco}
                isBlog={false}
                title="Bradesco Empresas e Negócios"
                subtitle="Sep 2024 - Present"
                description="As a key Android Engineer, I developed the secure digital account opening flow, enabling document capture and facial biometrics for over 100k users."
                playstoreLink="https://play.google.com/store/apps/details?id=br.com.bradesco.pdpjapp&hl=pt_BR"
                onClick={() => {
                  navigate("/project-details", {
                    state: {
                      title: "Bradesco Empresas e Negócios",
                      details: "Contributed to a high-traffic financial app for a major institution. My primary role was to Implement a secure document capture and facial biometrics flow using Kotlin. This critical feature enabled a fully digital, verified bank account opening process. I also engineered a custom JavaScript interface to bridge web components with native Android features and enhanced application stability by building out a robust suite of automated tests with Robolectric and Espresso.",
                      imgPath: bradesco_1,
                      timeline: "Sep 2024 - Present",
                      role: "Android Engineer",
                      responsibilities: [
                        "Implement the secure document capture and facial biometrics flow.",
                        "Enhanced a hybrid application's capabilities by creating a custom JavaScript interface to grant web components access to native Android features (such as sharedPreferences, push notification etc).",
                        "Develop automated tests using Robolectric and Espresso to increase application stability."
                      ],
                    },
                  });
                }}
              />
            </Col>

            <Col md={12} className="project-card mb-4">
              <ProjectCard
                imgPath={emps}
                isBlog={false}
                title="Itaú Emps"
                subtitle="2022 - 2024"
                description="Developed critical financial SDKs for the Itaú Emps app, providing key insights on receivables and cash flow to a user base of over 5 million."
                playstoreLink="https://play.google.com/store/apps/details?id=com.itau.pme.emps&hl=pt_BR"
                onClick={() => {
                  navigate("/project-details", {
                    state: {
                      title: "Itaú Emps",
                      details: "Working on the high-scale Itaú Emps application serving over 5 million users, my focus was on engineering and delivering critical financial SDKs. I developed the 'My Receivables' and 'Cash Flow' modules to summarize user income and outcomes, directly helping to reduce call center costs. I ensured the reliability of these features by implementing a full suite of automated tests using Appium and Selenium and contributed to a modern codebase using MVVM and Jetpack Compose.",
                      imgPath: emps_1,
                      timeline: "2022 - 2024",
                      role: "Android Engineer",
                      responsibilities: [
                        "Engineer and deliver critical financial SDKs ('My Receivables' and 'Cash Flow').",
                        "Implement automated tests with Appium and Selenium.",
                        "Contribute to a modern codebase using MVVM and Jetpack Compose."
                      ],
                    },
                  });
                }}
              />
            </Col>

            <Col md={12} className="project-card mb-4">
              <ProjectCard
                imgPath={empresas}
                isBlog={false}
                title="Itaú Empresas"
                subtitle="2022 - 2023"
                description="Engineered and maintained features for Itaú's main business banking platform, leveraging MVVM and Jetpack Compose to serve over 5 million users."
                playstoreLink="https://play.google.com/store/apps/details?id=com.itau.empresas&hl=pt_PT"
                onClick={() => {
                  navigate("/project-details", {
                    state: {
                      title: "Itaú Empresas",
                      details: "As part of the NTT Data team, I engineered and maintained features for the high-scale Itaú Empresas mobile banking application. I utilized modern Android architecture like MVVM and reactive programming with Jetpack Compose to enhance code maintainability and application responsiveness for a user base exceeding 5 million. Additionally, I took responsibility for managing and optimizing CI/CD pipelines with Jenkins to automate builds and deployments, increasing the overall development velocity of the team.",
                      imgPath: empresas_1,
                      timeline: "2022 - 2023",
                      role: "Android Engineer",
                      responsibilities: [
                        "Engineer and maintain features for a high-scale banking app.",
                        "Utilize MVVM and Jetpack Compose to enhance code maintainability.",
                        "Manage and optimize CI/CD pipelines with Jenkins."
                      ],
                    },
                  });
                }}
              />
            </Col>

            <Col md={12} className="project-card mb-4">
              <ProjectCard
                imgPath={unique_parking}
                isBlog={false}
                title="Unique Parking"
                subtitle="2021"
                description="Developed a React Native app for parking management, featuring Bluetooth printer integration for streamlined financial control and receipt generation."
                onClick={() => {
                  navigate("/project-details", {
                    state: {
                      title: "Unique Parking",
                      details: "This application was developed from the ground up using React Native to provide a complete solution for financial control and vehicle management in a parking lot. A key feature I implemented was the integration with Bluetooth printers, allowing staff to instantly print vehicle entry/exit receipts and financial invoices. I was responsible for turning the UI/UX design from Figma into a pixel-perfect, functional mobile application for both Android and iOS.",
                      imgPath: unique_parking,
                      timeline: "2021",
                      role: "Mobile Developer",
                      responsibilities: [
                        "Develop a cross-platform application using React Native.",
                        "Implement Bluetooth printer integration for receipt and invoice printing.",
                        "Translate Figma designs into pixel-perfect, functional UI."
                      ],
                    },
                  });
                }}
              />
            </Col>

            <Col md={12} className="project-card mb-4">
              <ProjectCard
                imgPath={cerveja_certa}
                isBlog={false}
                title="Cerveja Certa"
                subtitle="2021"
                description="Built and launched 'Cerveja Certa,' a React Native utility app that acts as an intelligent beer calculator to help users make cost-effective choices."
                onClick={() => {
                  navigate("/project-details", {
                    state: {
                      title: "Cerveja Certa",
                      details: "As one of two applications I managed through the full lifecycle at Unique Sistemas, Cerveja Certa is an intelligent beer calculator designed to help users make cost-effective purchasing decisions. Built using React Native, I translated the design concepts into a functional, published application on the Google Play Store, handling everything from development and testing to the final release.",
                      imgPath: cerveja_certa,
                      timeline: "2021",
                      role: "Mobile Developer",
                      responsibilities: [
                        "Manage the full application lifecycle from development to release.",
                        "Develop a cross-platform utility app using React Native.",
                        "Publish the application to the Google Play Store."
                      ],
                    },
                  });
                }}
              />
            </Col>

          </Row>
        </Container>
      </Container>
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          When I'm not working, I love to build things.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={12} className="project-card mb-4">
            <ProjectCard
              imgPath={league_of_legends_assistant}
              isBlog={false}
              title="League of Legends Assistant"
              subtitle="2024"
              description="A companion app for LoL players providing real-time insights and strategy tips. Built with Kotlin Multiplatform to run seamlessly on Android and iOS."
              ghLink="https://github.com/allan8araujo/league_of_legends_assistant?tab=readme-ov-file"
              onClick={() => {
                navigate("/project-details", {
                  state: {
                    title: "League of legends assistant",
                    details: "LoL Gemini Assistant is a comprehensive companion app for League of Legends players, designed to enhance the gaming experience by providing real-time insights, strategy recommendations, and personalized tips. Built with Kotlin Multiplatform, the app offers seamless functionality across Android and iOS devices.",
                    imgPath: league_of_legends_assistant,
                    timeline: "2024",
                    role: "Personal Project",
                    responsibilities: [
                      "Develop a companion app using Kotlin Multiplatform for Android and iOS.",
                      "Provide real-time insights and strategy recommendations.",
                      "Design and implement a seamless cross-platform user experience."
                    ],
                  },
                });
              }}
            />
          </Col>

          <Col md={12} className="project-card mb-4">
            <ProjectCard
              imgPath={vip_sports}
              isBlog={false}
              subtitle="2023"
              title="Vip Sports"
              description="A native Android app for managing a sports training club, built with Kotlin and powered by Firebase as a serverless backend."
              onClick={() => {
                navigate("/project-details", {
                  state: {
                    title: "Vip Sports",
                    details: "Developed and continue to provide support for our sports training club management app, built with Kotlin for Android, and powered by Firebase as the serverless backend.",
                    imgPath: vip_sports,
                    timeline: "2023",
                    role: "Personal Project",
                    responsibilities: [
                      "Develop a native Android app with Kotlin.",
                      "Implement Firebase as the serverless backend.",
                      "Provide ongoing support and maintenance."
                    ],
                  },
                });
              }}
            />
          </Col>

          <Col md={12} className="project-card mb-4">
            <ProjectCard
              imgPath={crypto_currency_app}
              isBlog={false}
              title="Crypto Currency App"
              subtitle="2022"
              description="A native Android app built with Kotlin to track, filter, and favorite various cryptocurrencies, consuming a public API for real-time data."
              ghLink="https://github.com/allan8araujo/crypto_currency_app?tab=readme-ov-file"
              onClick={() => {
                navigate("/project-details", {
                  state: {
                    title: "Crypto Currency App",
                    details: "This was a personal project to practice modern Android development techniques. The app is made to keep track of crypto currencies, allowing users to filter the list and save their favorites. It's built with Kotlin and follows clean architecture principles.",
                    imgPath: crypto_currency_app,
                    timeline: "2022",
                    role: "Personal Project",
                    responsibilities: [
                      "Develop a native Android app using Kotlin and Clean Architecture.",
                      "Integrate a public API for real-time cryptocurrency data.",
                      "Implement features for tracking, filtering, and favoriting."
                    ],
                  },
                });
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="about-section">
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="contact">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to connect with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/allan8araujo"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://x.com/allanzao08"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/allan8araujo/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/allan8araujo"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
