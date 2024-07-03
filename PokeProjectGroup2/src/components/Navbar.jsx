// src/Navbar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">
        <img
          src="logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        Bame
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Evolution</Nav.Link>
        </Nav>
        <Button variant="success" className="create-team-btn">
          Create Team
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
