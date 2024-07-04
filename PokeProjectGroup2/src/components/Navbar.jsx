// src/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import styles from "../components/Navbar.module.css";

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.customNavbar}>
      <Container fluid>
        <Navbar.Brand href="/" className={`p-2 d-flex align-items-center ${styles.navbarBrand}`}>
          <a href="/" className="d-flex align-items-center text-decoration-none">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className={styles.navbarBrandText}>Pokemon Dex</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarNav}>
          <Nav className="">
            <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link href="/evolution" className={styles.navLink}>Evolution</Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>Statistic</Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>Compare</Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>Types</Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/">
          <Button variant="success" className={`ml-auto ${styles.createTeamBtn}`}>
            Create Team
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
