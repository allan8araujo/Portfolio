import React from "react";
import { Row, Col } from "react-bootstrap";
import { SiKotlin, SiReact } from "react-icons/si";
import { DiJavascript1, DiJava, DiPython } from "react-icons/di";
import SkillWithProjects from "./SkillWithProjects";

import bradesco from "../../Assets/Projects/bradesco_app.png";
import bradesco_1 from "../../Assets/Projects/bradesco_1.png";
import emps from "../../Assets/Projects/emps_app.png";
import emps_1 from "../../Assets/Projects/emps_1.png";
import empresas from "../../Assets/Projects/empresas_app.png";
import empresas_1 from "../../Assets/Projects/empresas_1.png";
import lol from "../../Assets/Projects/league_of_legends_assistant.png";
import vipSports from "../../Assets/Projects/vip_sports.png";
import uniqueParking from "../../Assets/Projects/unique_parking.png";
import cryptoApp from "../../Assets/Projects/crypto_currency_app.png";
import cervejaCerta from "../../Assets/Projects/cerveja_certa.png";
import bradesco_miniatura from "../../Assets/Projects/bradesco_miniatura.png";
import itau_emps_miniatura from "../../Assets/Projects/itau_emps_miniatura.png";
import itau_empresas_miniatura from "../../Assets/Projects/itau_empresas_miniatura.png";
import unique_sistemas_miniatura from "../../Assets/Projects/unique_sistemas_miniatura.png";

const PROJECTS = {
  kotlin: [
    {
      img: bradesco, miniatura: bradesco_miniatura, name: "Bradesco",
      state: {
        title: "Bradesco Empresas e Negócios", imgPath: bradesco_1,
        timeline: "Sep 2024 - Present", role: "Senior Android Engineer",
        playstoreLink: "https://play.google.com/store/apps/details?id=br.com.bradesco.pdpjapp&hl=pt_BR",
        details: "Developed and enhanced the Bradesco Empresas e Negócios app (1M+ users) using Kotlin, MVVM, and Clean Architecture, delivering secure and scalable banking features for business customers.\n\nDesigned and implemented the digital account opening flow using Jetpack Compose, Kotlin Coroutines, Material Design, and third-party document capture and facial biometrics SDKs, enabling secure digital onboarding and identity verification.\n\nBuilt the Tap on Phone (Cielo) feature, transforming Android devices into NFC-enabled payment terminals for secure contactless payment acceptance.\n\nDeveloped hybrid banking features using Jetpack Compose, ViewBinding/XML, and WebView, implementing JavaScript bridges that enabled web modules to access native Android capabilities such as SharedPreferences, push notifications, and device APIs.\n\nImplemented automated testing with Espresso and Robolectric, improving release reliability and reducing regressions across critical banking features.",
        responsibilities: [
          "Design, develop, and maintain native Android features using Kotlin, Jetpack Compose, and MVVM.",
          "Implement secure digital onboarding solutions, including document capture and facial biometric verification.",
          "Build and maintain hybrid Android features by integrating WebView with native components through JavaScript bridges.",
          "Develop automated unit and UI tests using Robolectric and Espresso to improve application quality and release confidence.",
          "Collaborate with cross-functional teams to deliver secure, scalable, and high-performance mobile banking solutions.",
          "Participate in code reviews and contribute to clean architecture and engineering best practices.",
        ],
      },
    },
    {
      img: emps, miniatura: itau_emps_miniatura, name: "Itaú Emps",
      state: {
        title: "Itaú Emps", imgPath: emps_1,
        timeline: "2022 - 2024", role: "Android Engineer",
        playstoreLink: "https://play.google.com/store/apps/details?id=com.itau.pme.emps&hl=pt_BR",
        details: "Working on the high-scale Itaú Emps application serving over 5 million users, my focus was on engineering and delivering critical financial SDKs. I developed the 'Cash Flow' module to summarize user income and outcomes, directly helping to reduce call center costs. I ensured the reliability of these features by implementing a full suite of automated tests using Appium and Selenium and contributed to a modern codebase using MVVM and Jetpack Compose.",
        responsibilities: [
          "Engineer and deliver critical financial SDKs ('My Receivables' and 'Cash Flow').",
          "Implement automated tests with Appium and Selenium.",
          "Contribute to a modern codebase using MVVM and Jetpack Compose.",
        ],
      },
    },
    {
      img: empresas, miniatura: itau_empresas_miniatura, name: "Itaú Empresas",
      state: {
        title: "Itaú Empresas", imgPath: empresas_1,
        timeline: "2022 - 2023", role: "Android Engineer",
        playstoreLink: "https://play.google.com/store/apps/details?id=com.itau.empresas&hl=pt_PT",
        details: "Engineered and maintained Itaú Empresas, a large-scale mobile banking app used by 5M+ downloads. It provides financial and digital solutions for companies of all sizes, including business accounts, payments, credit, payroll, insurance, and international trade services.",
        responsibilities: [
          "Engineer and maintain features for a high-scale banking app.",
          "Utilize MVVM and Jetpack Compose to enhance code maintainability.",
          "Manage and optimize CI/CD pipelines with Jenkins.",
        ],
      },
    },
    {
      img: vipSports, miniatura: undefined, name: "Vip Sports",
      state: {
        title: "Vip Sports", imgPath: vipSports,
        timeline: "2023", role: "Personal Project",
        details: "Developed and continue to provide support for our sports training club management app, built with Kotlin for Android, and powered by Firebase as the serverless backend.",
        responsibilities: [
          "Develop a native Android app with Kotlin.",
          "Implement Firebase as the serverless backend.",
          "Provide ongoing support and maintenance.",
        ],
      },
    },
    {
      img: lol, miniatura: undefined, name: "LoL Assistant",
      state: {
        title: "League of legends assistant", imgPath: lol,
        timeline: "2024", role: "Personal Project",
        details: "LoL Gemini Assistant is a comprehensive companion app for League of Legends players, designed to enhance the gaming experience by providing real-time insights, strategy recommendations, and personalized tips. Built with Kotlin Multiplatform, the app offers seamless functionality across Android and iOS devices.",
        responsibilities: [
          "Develop a companion app using Kotlin Multiplatform for Android and iOS.",
          "Provide real-time insights and strategy recommendations.",
          "Design and implement a seamless cross-platform user experience.",
        ],
      },
    },
  ],
  javascript: [
    {
      img: bradesco, miniatura: bradesco_miniatura, name: "Bradesco",
      state: {
        title: "Bradesco Empresas e Negócios", imgPath: bradesco_1,
        timeline: "Sep 2024 - Present", role: "Senior Android Engineer",
        playstoreLink: "https://play.google.com/store/apps/details?id=br.com.bradesco.pdpjapp&hl=pt_BR",
        details: "Developed hybrid banking features using Jetpack Compose, ViewBinding/XML, and WebView, implementing JavaScript bridges that enabled web modules to access native Android capabilities.",
        responsibilities: ["Implement JavaScript bridges for hybrid web/native features."],
      },
    },
    {
      img: uniqueParking, miniatura: unique_sistemas_miniatura, name: "Unique Parking",
      state: {
        title: "Unique Parking", imgPath: uniqueParking,
        timeline: "2021", role: "Mobile Developer",
        details: "This application was developed from the ground up using React Native to provide a complete solution for financial control and vehicle management in a parking lot.",
        responsibilities: [
          "Develop a cross-platform application using React Native.",
          "Implement Bluetooth printer integration for receipt and invoice printing.",
          "Translate Figma designs into pixel-perfect, functional UI.",
        ],
      },
    },
  ],
  react: [
    {
      img: uniqueParking, miniatura: unique_sistemas_miniatura, name: "Unique Parking",
      state: {
        title: "Unique Parking", imgPath: uniqueParking,
        timeline: "2021", role: "Mobile Developer",
        details: "Developed from the ground up using React Native to provide a complete solution for financial control and vehicle management in a parking lot, including Bluetooth printer integration.",
        responsibilities: [
          "Develop a cross-platform application using React Native.",
          "Implement Bluetooth printer integration.",
          "Translate Figma designs into pixel-perfect UI.",
        ],
      },
    },
    {
      img: cryptoApp, miniatura: undefined, name: "Crypto App",
      state: {
        title: "Crypto Currency App", imgPath: cryptoApp,
        timeline: "2022", role: "Personal Project",
        details: "A cryptocurrency tracking application built with React, allowing users to monitor real-time prices and trends.",
        responsibilities: ["Build a React app consuming a public crypto API.", "Display real-time price data."],
      },
    },
    {
      img: cervejaCerta, miniatura: unique_sistemas_miniatura, name: "Cerveja Certa",
      state: {
        title: "Cerveja Certa", imgPath: cervejaCerta,
        timeline: "2022", role: "Personal Project",
        details: "A Flutter application for beer enthusiasts to discover and track their favourite beers.",
        responsibilities: ["Develop a Flutter mobile app.", "Implement beer catalogue and tracking features."],
      },
    },
  ],
  java: [
    {
      img: empresas, miniatura: itau_empresas_miniatura, name: "Itaú Empresas",
      state: {
        title: "Itaú Empresas", imgPath: empresas_1,
        timeline: "2022 - 2023", role: "Android Engineer",
        playstoreLink: "https://play.google.com/store/apps/details?id=com.itau.empresas&hl=pt_PT",
        details: "Engineered and maintained Itaú Empresas, a large-scale mobile banking app used by 5M+ downloads.",
        responsibilities: ["Engineer and maintain features for a high-scale banking app."],
      },
    },
    {
      img: emps, miniatura: itau_emps_miniatura, name: "Itaú Emps",
      state: {
        title: "Itaú Emps", imgPath: emps_1,
        timeline: "2022 - 2024", role: "Android Engineer",
        playstoreLink: "https://play.google.com/store/apps/details?id=com.itau.pme.emps&hl=pt_BR",
        details: "Working on the high-scale Itaú Emps application serving over 5 million users.",
        responsibilities: ["Engineer and deliver critical financial SDKs."],
      },
    },
  ],
  python: [
    {
      img: null, miniatura: undefined, name: "High Elo Jobs",
      state: {
        title: "High Elo Jobs",
        timeline: "2021", role: "Personal Project",
        ghLink: "https://github.com/allan8araujo/site-flask-full-stack",
        details: "A full-stack web application developed using Flask as the back-end micro framework and SQLAlchemy as the ORM for database management.\n\nThe front-end was built with HTML, CSS, JavaScript, and jQuery, delivering a responsive and interactive user interface.\n\nThe application was deployed and made publicly available on Heroku.",
        responsibilities: [
          "Develop a full-stack web application using Flask as the back-end micro framework.",
          "Manage database models and queries with SQLAlchemy.",
          "Build the front-end interface with HTML, CSS, JavaScript, and jQuery.",
          "Deploy the application on Heroku.",
        ],
      },
    },
  ],
};

const SKILLS = [
  { icon: <SiKotlin />,      label: "Kotlin",      projects: PROJECTS.kotlin },
  { icon: <DiJavascript1 />, label: "JavaScript",  projects: PROJECTS.javascript },
  { icon: <SiReact />,       label: "React",       projects: PROJECTS.react },
  { icon: <DiJava />,        label: "Java",        projects: PROJECTS.java },
  { icon: <DiPython />,      label: "Python",      projects: PROJECTS.python },
];

function Techstack() {
  return (
    <Row style={{ paddingBottom: "50px", overflow: "visible" }}>
      {SKILLS.map(({ icon, label, projects }) => (
        <Col
          key={label}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ overflow: "visible", position: "relative" }}
        >
          <SkillWithProjects icon={icon} label={label} projects={projects} />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
