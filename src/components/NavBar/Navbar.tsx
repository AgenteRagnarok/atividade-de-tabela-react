import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
        <Navbar.Brand href="#">Car Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
};

export default NavigationBar;
