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
            from <span className="purple"> Pernambuco, Brazil.</span>
            <br />
            I am currently employed as a software developer at NTT Data.
            <br />
             <span className="purple">2017</span>
, I began my undergraduate studies in mathematics at UFRPE, where I learned R and Python.
            <br />
In  <span className="purple">2021</span>, I began working as Mobile Developer at Unique Sistemas, a local software development company focused on ERP systems using Java and Delphi.
<br/>
In <span className="purple">2022</span>, I joined NTT Data as an Android Developer and was allocated to Itaú Unibanco (the largest bank in Latin America) client using Kotlin and Java.
<br/>
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
