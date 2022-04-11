import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <div className="sticky-top shadow">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="170"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
