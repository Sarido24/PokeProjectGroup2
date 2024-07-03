// src/Navbar.js
import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/logo.png"

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="p-2">
          <a href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Dex
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/evolution">Evolution</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="#">Statistic</Nav.Link>
            <Nav.Link href="#">Compare</Nav.Link>
            <Nav.Link href="#">Types</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="success" className="create-team-btn ml-auto">
          Create Team
        </Button>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
