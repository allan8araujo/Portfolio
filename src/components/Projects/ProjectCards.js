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
          <Card.Title className="project-card-title" style={{fontSize: '2.5rem', color: '#000000', fontWeight: 700}}>{props.title}</Card.Title>

          {!props.isBlog && (
            <Card.Subtitle className="mb-2 text-muted" style={{
              fontFamily: 'Inter', fontWeight: 400
            }}>
              {props.subtitle}
            </Card.Subtitle>
          )}

          <Card.Text style={{ textAlign: "justify", color: "#000000ff", fontFamily: 'Inter', fontWeight: 400 }}>
            {props.description}
          </Card.Text>
          {props.toolsUsed && props.toolsUsed.length > 0 && (
            <div className="project-card-tools" style={{ marginTop: '20px' }}>
              <strong style={{ fontFamily: 'Inter', fontWeight: 600 }}>Tools Used:</strong>
              <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px', 
                  marginTop: '8px' 
                }}>
                {props.toolsUsed.map((tool, index) => (
                  <span key={index} style={{
                    backgroundColor: '#e9ecef',
                    padding: '4px 12px',
                    fontSize: '0.85rem',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    color: '#495057'
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card.Body>
      </div>
    </div>
  );
}

export default ProjectCards;