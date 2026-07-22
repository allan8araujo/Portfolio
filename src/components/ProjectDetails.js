import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Button
import "../style.css"; // Your custom styles
import { BsGooglePlay } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";


import { highlightKeywords } from "../utils/highlightKeywords";

export default function ProjectDetails() {
  const location = useLocation();
  const { 
    title,
    details,
    imgPath, 
    client, 
    role, 
    timeline, 
    responsibilities,
    playstoreLink,
    ghLink,
    detailsList = []
  } = location.state || {};
console.log("detailsList:", detailsList);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures this runs only once

  if (!title) {
    return (
      <Container className="project-details-page py-5 text-center">
        <p>Project details not found. Please return to the projects page.</p>
      </Container>
    );
  }

  return (
    <div className="project-details-page">
      {/* Hero Section */}
      <Container className="project-header-section pt-5">
        <Row className="align-items-start">
          <Col md={9}>
            <h1 className="project-title-large" style={{
              fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '6rem'
            }}>{title}</h1>
          </Col>
          <Col md={3} className="text-md-end client-info">
            {client && (
              <>
                <p className="client-label mb-0">CLIENT</p>
                <p className="client-name">{client}</p>
              </>
            )}
          </Col>
        </Row>
      </Container>

      {/* Image Section - Full Width */}
      {imgPath && (
        <div className="project-image-full-width my-5">
          <img
            src={imgPath}
            alt={title}
            className="img-fluid"
            // 4. Apply the transform style based on the scroll offset
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          />
        </div>
      )}

      <Container className="py-4">
        {/* Info Section */}
        <Row className="project-info-grid mb-5">
          <Col md={3} className="info-block">
            <h3 className="info-label">ROLE</h3>
            <p className="info-value">{role || "N/A"}</p>
          </Col>
          <Col md={3} className="info-block">
            <h3 className="info-label">TIMELINE</h3>
            <p className="info-value">{timeline || "N/A"}</p>
          </Col>
          <Col md={6} className="info-block">
            <h3 className="info-label">RESPONSIBILITIES</h3>
            <ul className="info-responsibilities list-unstyled">
              {responsibilities && responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Details Section */}
        <Row className="project-details-content mb-5">
          <Col>
            {details && details.split('\n\n').map((paragraph, i) => (
              <p key={i}>{highlightKeywords(paragraph)}</p>
            ))}
          </Col>
        </Row>

        {/* NEW Alternating Details List */}
        {detailsList.map((item, index) => (
          <Row
            key={index}
            className={`align-items-center my-5 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <Col md={6} className="text-center">
              <img
                src={item.img}
                alt={`detail-${index}`}
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <p className="lead">{item.text}</p>
            </Col>
          </Row>
        ))}
        <div className="text-center my-4" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {playstoreLink && (
            <a href={playstoreLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View on Play Store
            </a>
          )}
          {ghLink && (
            <a
              href={ghLink}
              className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <AiFillGithub style={{ fontSize: '1.2rem' }} /> View on GitHub
            </a>
          )}
        </div>
      </Container>
    <Footer />
    </div>
  );
}