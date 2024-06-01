import { Navbar, Container, Nav } from "react-bootstrap";
import"./"App.scss";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <li className="nav-item">
                <Nav.Link to={"/"}className="nav-link">
                Home
                </Nav.Link>
                </li>
                <li className="nav-item">
                <Nav.Link to={"/usuarios"} className={"nav-link"}>Usuários
                </Nav.Link>
                </li>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBar;
