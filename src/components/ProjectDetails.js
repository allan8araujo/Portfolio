import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Your custom styles
import React, { useState, useEffect } from "react";

export default function ProjectDetails() {
  const location = useLocation();
  const { title, details, imgPath, client, role, timeline, responsibilities } =
    location.state || {};

  // 2. State to store the vertical scroll offset
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  // 3. Effect to add and remove the scroll event listener
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
            <h1 className="project-title-large">{title}</h1>
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
            <p>{details}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}