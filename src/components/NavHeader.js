import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./AppHeader.css";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">
                Clinical and Pilot Study Suggestion
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Book a Demo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar collapseOnSelect expand="lg" className="headerOne">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="header"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="header">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="header">
                Features
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="header">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/product" className="header">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/science" className="header">
                Science
              </Nav.Link>
              <Nav.Link as={Link} to="/news" className="header">
                News
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title="Login"
                id="collapsible-nav-dropdown"
                className="header"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHeader;
