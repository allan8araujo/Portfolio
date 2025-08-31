import React from "react";
import { Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <div className="project-card-view" onClick={() => props.onClick()}>
      <Card.Img
        src={props.imgPath}
        alt="card-img"
        className="project-card-image"
      />

      <div className="project-card-content">
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
          
          {!props.isBlog && (
            <Card.Subtitle className="mb-2 text-muted">
              {props.subtitle}
            </Card.Subtitle>
          )}

          <Card.Text style={{ textAlign: "justify", color: "#000000ff" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </div>
    </div>
  );
}

export default ProjectCards;