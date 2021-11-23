import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
        <Container>
            <Navbar.Brand href="#home">Md Shakil Chowdhury</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about-me">About Me</Nav.Link>
                <Nav.Link href="#my-works">My Works</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
    );
};

export default Navigation;