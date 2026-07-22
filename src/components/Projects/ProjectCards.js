import React from "react";
import { Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

function getYearsAgo(subtitle) {
  if (!subtitle || subtitle.toLowerCase().includes("present")) return null;
  const years = subtitle.match(/\d{4}/g);
  if (!years) return null;
  const diff = new Date().getFullYear() - parseInt(years[years.length - 1]);
  if (diff <= 0) return null;
  return `${diff} year${diff !== 1 ? "s" : ""} ago`;
}

function ProjectCards(props) {
  const yearsAgo = getYearsAgo(props.subtitle);
  return (
    <div className={`project-card-view${props.hideImage ? " project-card-no-image" : ""}`} onClick={() => props.onClick()}>
      {!props.hideImage && (
        props.imgPath
          ? <Card.Img src={props.imgPath} alt="card-img" className="project-card-image" />
          : (
            <div className="project-card-image project-card-github-placeholder">
              <AiFillGithub />
            </div>
          )
      )}

      <div className="project-card-content">
        <Card.Body>
          <Card.Title className="project-card-title" style={{fontSize: '2.5rem', color: '#000000', fontWeight: 700}}>{props.title}</Card.Title>

          {!props.isBlog && (
            <p className="mb-3" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '1.1rem', color: '#555' }}>
              {yearsAgo ? `${props.subtitle} - ${yearsAgo}` : props.subtitle}
            </p>
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