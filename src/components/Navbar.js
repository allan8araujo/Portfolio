import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import pdf from "../Assets/../Assets/allan_furtuoso_resume.pdf";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useState, useEffect, useRef } from "react";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 60) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = currentY;
      updateNavbar(currentY >= 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={{ transition: "transform 0.3s ease", transform: navHidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ms-auto"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: '-3rem' }} defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={HashLink} smooth to="/#home" style={{ paddingLeft: 0 }}>Home</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
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
