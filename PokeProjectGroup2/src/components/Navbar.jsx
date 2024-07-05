import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../components/Navbar.module.css";

const MainNavbar = () => {
  return (
    // <Navbar bg="dark" variant="dark" expand="lg" className={styles.customNavbar}>
    //   <Container fluid>
    //     <Navbar.Brand href="/" className={`p-2 d-flex align-items-center ${styles.navbarBrand}`}>
    // <Link to="/" className="d-flex align-items-center text-decoration-none">
    //   <img
    //     src={logo}
    //     width="50"
    //     height="50"
    //     className="d-inline-block align-top"
    //     alt="Logo"
    //   />
    //   <span className={styles.navbarBrandText}>Pokemon Dex</span>
    // </Link>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarNav}>
    //       <Nav className="mx-auto">
    //         <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
    //         <Nav.Link href="/evolution" className={styles.navLink}>Evolution</Nav.Link>
    //         <Nav.Link href="#" className={styles.navLink}>Statistic</Nav.Link>
    //         <Nav.Link href="#" className={styles.navLink}>Compare</Nav.Link>
    //         <Nav.Link href="#" className={styles.navLink}>Types</Nav.Link>
    //         <Nav.Link href="#" className={styles.navLink}>About Us</Nav.Link>
    //       </Nav>
    //       <div className={`d-flex align-items-center mt-3 mt-lg-0 ${styles.createTeamBtnWrapper}`}>
    //         <Link to="/">
    //           <Button variant="success" className={`ml-auto ${styles.createTeamBtn}`}>
    //             Create Team
    //           </Button>
    //         </Link>
    //       </div>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className={styles.customNavbar}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Link
            to="/"
            className="d-flex align-items-center text-decoration-none"
          >
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className={styles.navbarBrandText}>Pokemon Dex</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/evolution" className={styles.navLink}>
              Evolution
            </Nav.Link>
            <Nav.Link as={Link} to="#" className={styles.navLink}>
              Statistic
            </Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>
              Compare
            </Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>
              Types
            </Nav.Link>
            <Nav.Link href="#" className={styles.navLink}>
              About Us
            </Nav.Link>
          </Nav>
          <div
            className={`d-flex align-items-center mt-lg-0 ${styles.createTeamBtnWrapper}`}
          >
            <Link to="/">
              <Button
                variant="success"
                className={`ml-auto ${styles.createTeamBtn}`}
              >
                Create Team
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
