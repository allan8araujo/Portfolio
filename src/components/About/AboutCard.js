import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Allan Furtuoso </span>
            from <span className="purple">Pernambuco, Brazil.</span>
            <br />
            I am currently working as a software developer at <span className="purple">CI&T</span>, where I've been contributing to projects for Bradesco since September 2024.
            <br />
            In <span className="purple">2017</span>, I began my undergraduate studies in mathematics at UFRPE, where I learned R and Python.
            <br />
            In <span className="purple">2021</span>, I began working as a Mobile Developer at Unique Sistemas, a local software development company focused on ERP systems. I develop mobile apps using Delphi and React Native.
            <br />
            In <span className="purple">2022</span>, I joined NTT Data as an Android Developer and was allocated to Itaú Unibanco (the largest bank in Latin America), working with Kotlin and Java.
            <br />
            In <span className="purple">2024</span>, I transitioned to CI&T, where I continued working with mobile technologies, contributing to high-impact financial solutions for Bradesco.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Study mathematics and philosophy
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym workouts
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
