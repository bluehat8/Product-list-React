import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">FakeStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/">Productos</Nav.Link>
            <Nav.Link className="mr-auto" href="#wishlist"><FaHeart /></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;