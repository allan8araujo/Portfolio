import { Container, Row, Col } from "react-bootstrap";
import { highlightKeywords } from "../../utils/highlightKeywords";

import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import ProjectCard from "../Projects/ProjectCards";
import league_of_legends_assistant from "../../Assets/Projects/league_of_legends_assistant.png";
import unique_parking from "../../Assets/Projects/unique_parking.png";
import empresas from "../../Assets/Projects/empresas_app.png";
import empresas_1 from "../../Assets/Projects/empresas_1.png";
import empresas_2 from "../../Assets/Projects/empresas_2.png";
import empresas_3 from "../../Assets/Projects/empresas_3.png";
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
import Footer from "../Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="hero-row" style={{ alignItems: "stretch" }}>
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
                Senior Android Engineer
              </h1>
              <div className="home-about-description">
                <p className="home-about-body">
                  <p>{highlightKeywords("Senior Android Engineer with 5+ years of experience building high-scale Android applications using Kotlin, Jetpack Compose, Coroutines, Flow, and Clean Architecture. Specialized in banking and enterprise solutions, delivering secure, scalable, and high-performance mobile experiences used by thousands to millions of users.")}</p>
                  <p>{highlightKeywords("Currently working at CI&T, developing Android solutions for one of Brazil's largest financial institutions. I contribute to architecture decisions, code reviews, mentoring, and the delivery of modern mobile features while maintaining high standards for performance, reliability, and code quality.")}</p>
                  <p>{highlightKeywords("Outside of work, I build personal Android applications published on Google Play, contribute open-source projects on GitHub, and continuously explore modern Android technologies, AI-assisted development, and software architecture.")}</p>
                </p>
              </div>
            </Col>
            <Col md={2} />
            <Col md={4} className="myAvtar">
              <Tilt style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <img src={myImg} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "8px" }} />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="project-section" id="projects">
        <Container>
          <h1 className="project-heading" style={{
            fontFamily: 'Playfair Display', fontWeight: 700
          }}>
            <strong className="purple">Works </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-card mb-4">
              <ProjectCard
                imgPath={bradesco}
                isBlog={false}
                title="Bradesco Empresas e Negócios"
                subtitle="Sep 2024 - Present"
                description="As a key Android Engineer, I developed the secure digital account opening flow, enabling document capture and facial biometrics for over 1M+ users."
                toolsUsed={["Android", "Kotlin", "Javascript", "Jetpack Compose", "MVVM",
                  "Jetpack Libraries (Flow, LiveData, Viewmodel)",
                  "Coroutines", "Firebase", "Retrofit", "Webview SDKs",
                  "Firebase Crashlytics",
                  "JUnit", "Espresso", "Automated test", "Appium", "Cucumber",
                  "Gherkin", "BDD", "Room"]}
                onClick={() => {
                  navigate("/project-details", {
                    state: {
                      title: "Bradesco Empresas e Negócios",
                      details: "Developed and enhanced the Bradesco Empresas e Negócios app (1M+ users) using Kotlin, MVVM, and Clean Architecture, delivering secure and scalable banking features for business customers.\n\nDesigned and implemented the digital account opening flow using Jetpack Compose, Kotlin Coroutines, Material Design, and third-party document capture and facial biometrics SDKs, enabling secure digital onboarding and identity verification.\n\nBuilt the Tap on Phone (Cielo) feature, transforming Android devices into NFC-enabled payment terminals for secure contactless payment acceptance.\n\nDeveloped hybrid banking features using Jetpack Compose, ViewBinding/XML, and WebView, implementing JavaScript bridges that enabled web modules to access native Android capabilities such as SharedPreferences, push notifications, and device APIs.\n\nImplemented automated testing with Espresso and Robolectric, improving release reliability and reducing regressions across critical banking features.",
                      imgPath: bradesco_1,
                      playstoreLink: "https://play.google.com/store/apps/details?id=br.com.bradesco.pdpjapp&hl=pt_BR",
                      timeline: "Sep 2024 - Present",
                      role: "Senior Android Engineer",
                      responsibilities: [
                        "Design, develop, and maintain native Android features using Kotlin, Jetpack Compose, and MVVM.",
                        "Implement secure digital onboarding solutions, including document capture and facial biometric verification.",
                        "Build and maintain hybrid Android features by integrating WebView with native components through JavaScript bridges.",
                        "Develop automated unit and UI tests using Robolectric and Espresso to improve application quality and release confidence.",
                        "Collaborate with cross-functional teams to deliver secure, scalable, and high-performance mobile banking solutions.",
                        "Participate in code reviews and contribute to clean architecture and engineering best practices.",
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
                toolsUsed={[
                  "Kotlin",
                  "Android",
                  "MVVM",
                  "Coroutines",
                  "CI/CD",
                  "Jenkins",
                  "Jetpack Compose",
                  "Retrofit",
                  "Reactive programming with BFF",
                  "Google Analytics", "Koin", "Flow",
                  "Jetpack Libraries (Flow, LiveData, Viewmodel)",
                  "Firebase Crashlytics",
                  "JUnit", "Espresso", "Automated test", "Appium", "Cucumber", 
                  "Gherkin","BDD", "Room"
                ]}
                onClick={() => {
                  navigate("/project-details", {
                    state: {
                      title: "Itaú Emps",
                      details: "Working on the high-scale Itaú Emps application serving over 5 million users, my focus was on engineering and delivering critical financial SDKs. I developed the 'Cash Flow' module to summarize user income and outcomes, directly helping to reduce call center costs. I ensured the reliability of these features by implementing a full suite of automated tests using Appium and Selenium and contributed to a modern codebase using MVVM and Jetpack Compose.",
                      imgPath: emps_1,
                      timeline: "2022 - 2024",
                      role: "Android Engineer",
                      playstoreLink: "https://play.google.com/store/apps/details?id=com.itau.pme.emps&hl=pt_BR",
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
                toolsUsed={[
                  "Kotlin",
                  "Android",
                  "MVVM",
                  "Coroutines",
                  "CI/CD",
                  "Jenkins",
                  "SharedPreferences",
                  "Jetpack Libraries (Flow, LiveData, Viewmodel)",
                  "WebView",
                  "Reactive programming with BFF",
                  "Google Analytics",
                  "Firebase Crashlytics",
                  "JUnit",
                  "E2E Testing",
                  "Gherkin",
                  "Room",
                ]}
                onClick={() => {
                  navigate("/project-details", {
                    state: {
                      title: "Itaú Empresas",
                      playstoreLink: "https://play.google.com/store/apps/details?id=com.itau.empresas&hl=pt_PT",
                      details: "Engineered and maintained Itaú Empresas, a large-scale mobile banking app used by 5M+ downloads. It provides financial and digital solutions for companies of all sizes, including business accounts, payments, credit, payroll, insurance, and international trade services. Through its web platform and mobile app, it enables companies to manage cash flow, issue invoices, make payments, access working capital, and integrate with HR and e-commerce tools.",
                      imgPath: empresas_1,
                      timeline: "2022 - 2023",
                      role: "Android Engineer",
                      responsibilities: [
                        "Engineer and maintain features for a high-scale banking app.",
                        "Utilize MVVM and Jetpack Compose to enhance code maintainability.",
                        "Manage and optimize CI/CD pipelines with Jenkins."
                      ], detailsList: [
                        {
                          img: empresas_2,
                          text: "Developed the Financial Management flow, integrating receivables, cash flow, and expense tracking into a unified digital experience that improved financial visibility for small and medium-sized businesses. Streamlined delivery by managing CI/CD pipelines with Jenkins, automating build and deployment processes and increasing development velocity."
                        },
                        {
                          img: empresas_3,
                          text: "Built the “My Receivables” and “Cash Flow” SDKs, allowing clients to easily track income and expenses; these features were fully covered by automated testing with Appium and Selenium, helping to reduce call center demand. "
                        },
                      ]
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
                toolsUsed={["Android", "Kotlin", "Jetpack Compose", "Firebase",
                  "Coroutines", "Room", "Retrofit"]}
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
                      ]
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
                toolsUsed={[
                  "React Native",
                  "Android/iOS",
                  "SOLID",
                  "UI/UX Design",
                  "Play Store",
                ]}
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
          </Row>
        </Container>
      </Container>
      <Container>
        <h1 className="project-heading">
          <strong className="purple" style={{
            fontFamily: 'Playfair Display', fontWeight: 700
          }}>Personal Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} className="project-card mb-4">
            <ProjectCard
              hideImage
              imgPath={null}
              isBlog={false}
              title="League of Legends Assistant"
              subtitle="2024"
              description="A companion app for LoL players providing real-time insights and strategy tips. Built with Kotlin Multiplatform to run seamlessly on Android and iOS."
              ghLink="https://github.com/allan8araujo/league_of_legends_assistant?tab=readme-ov-file"
              toolsUsed={[
                "Kotlin Multiplatform (KMP)",
                "Compose Multiplatform",
                "AI integration",
                "Gemini API",
                "UI/UX Design",
              ]}
              onClick={() => {
                navigate("/project-details", {
                  state: {
                    title: "League of legends assistant",
                    details: "LoL Gemini Assistant is a comprehensive companion app for League of Legends players, designed to enhance the gaming experience by providing real-time insights, strategy recommendations, and personalized tips. Built with Kotlin Multiplatform, the app offers seamless functionality across Android and iOS devices.",
                    imgPath: league_of_legends_assistant,
                    ghLink: "https://github.com/allan8araujo/league_of_legends_assistant",
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

          <Col md={6} className="project-card mb-4">
            <ProjectCard
              hideImage
              imgPath={null}
              isBlog={false}
              title="Movie Catalog"
              subtitle="2022"
              description="A native Android app that lists the trending movies of the week and shows details when selecting one, consuming The Movie Database API with Retrofit and loading images with Glide."
              ghLink="https://github.com/allan8araujo/movieCatalog"
              toolsUsed={[
                "Kotlin",
                "Android",
                "MVVM",
                "Retrofit",
                "Glide",
                "View Binding",
                "ViewModel",
                "Navigation Component",
                "Lifecycle",
              ]}
              onClick={() => {
                navigate("/project-details", {
                  state: {
                    title: "Movie Catalog",
                    details: "A native Android app built to list the trending movies of the week and display detailed information when selecting one.\n\nConsumed The Movie Database API (api.themoviedb.org) using Retrofit for network calls and Glide for efficient image loading.\n\nImplemented the MVVM (Model-View-ViewModel) design pattern, applying View Binding, ViewModel, Navigation Architecture Component, and Lifecycle components for a clean and maintainable architecture.",
                    imgPath: null,
                    ghLink: "https://github.com/allan8araujo/movieCatalog",
                    timeline: "2022",
                    role: "Personal Project",
                    responsibilities: [
                      "Consume The Movie Database API using Retrofit for real-time trending movie data.",
                      "Load and cache movie poster images efficiently with Glide.",
                      "Implement MVVM architecture with ViewModel and Lifecycle components.",
                      "Use Navigation Architecture Component for fragment-based navigation.",
                      "Apply View Binding to maintain type-safe interface interactions.",
                    ],
                  },
                });
              }}
            />
          </Col>

          <Col md={6} className="project-card mb-4">
            <ProjectCard
              hideImage
              imgPath={null}
              isBlog={false}
              title="High Elo Jobs"
              subtitle="2021"
              description="Full-stack web application built with Flask, using HTML, CSS, JavaScript, and jQuery on the front-end and SQLAlchemy as the database ORM on the back-end."
              ghLink="https://github.com/allan8araujo/site-flask-full-stack"
              toolsUsed={[
                "Python",
                "Flask",
                "SQLAlchemy",
                "HTML",
                "CSS",
                "JavaScript",
                "jQuery",
              ]}
              onClick={() => {
                navigate("/project-details", {
                  state: {
                    title: "High Elo Jobs",
                    details: "A full-stack web application developed using Flask as the back-end micro framework and SQLAlchemy as the ORM for database management.\n\nThe front-end was built with HTML, CSS, JavaScript, and jQuery, delivering a responsive and interactive user interface.\n\nThe application was deployed and made publicly available on Heroku.",
                    imgPath: null,
                    ghLink: "https://github.com/allan8araujo/site-flask-full-stack",
                    timeline: "2021",
                    role: "Personal Project",
                    responsibilities: [
                      "Develop a full-stack web application using Flask as the back-end micro framework.",
                      "Manage database models and queries with SQLAlchemy.",
                      "Build the front-end interface with HTML, CSS, JavaScript, and jQuery.",
                      "Deploy the application on Heroku.",
                    ],
                  },
                });
              }}
            />
          </Col>

          <Col md={6} className="project-card mb-4">
            <ProjectCard
              hideImage
              imgPath={null}
              isBlog={false}
              title="Crypto Currency App"
              subtitle="2022"
              description="A native Android app built with Kotlin to track, filter, and favorite various cryptocurrencies, consuming a public API for real-time data."
              ghLink="https://github.com/allan8araujo/crypto_currency_app?tab=readme-ov-file"
              toolsUsed={[
                "Kotlin",
                "Android",
                "Coroutines",
                "Retrofit",
                "Room",
                "MVVM"
              ]}
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
                    ], detailsList: [
                    {
                      img: crypto_currency_app,
                      text: "The app allows users to track crypto prices in real-time."
                    },
                    {
                      img: crypto_currency_app,
                      text: "Users can favorite specific coins and filter them by categories."
                    }
                  ]
                }});
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="about-section">
        <Container>
          <h1 className="project-heading" style={{
            fontFamily: 'Playfair Display', fontWeight: 700
          }}>
            <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
          <h1 className="project-heading" style={{
            fontFamily: 'Playfair Display', fontWeight: 700
          }}>
            <strong className="purple">Tools </strong>
          </h1>
          <Toolstack />
        </Container>
      </Container>
    <Footer />
    </section>
  );
}

export default Home;
