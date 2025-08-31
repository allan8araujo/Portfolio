import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import pdf from "../Assets/../Assets/allan_furtuoso_resume.pdf";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useState, useEffect } from "react";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
    >
      <Container>
        <Navbar.Brand as={HashLink} smooth to="/#home" className="d-flex">
          <span className="brand-name">Allan<span style={{
            fontWeight: 700,
            fontSize: "1.4rem",
            color: "#000000ff",
            letterSpacing: "1px",
          }}>Araújo</span></span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={HashLink} smooth to="/#home">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={HashLink} smooth to="/#projects">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={HashLink} smooth to="/#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={pdf}>Resume</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
