import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-2 fixed-top">
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontFamily: "Roboto Slab" }}>
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" style={{ fontFamily: "Noto Serif" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#new" style={{ fontFamily: "Noto Serif" }}>
              New
            </Nav.Link>
            <Nav.Link href="#product" style={{ fontFamily: "Noto Serif" }}>
              Product
            </Nav.Link>
            <Nav.Link href="#contact" style={{ fontFamily: "Noto Serif" }}>
              Contact
            </Nav.Link>
            <Nav.Link href="/profile" style={{ fontFamily: "Noto Serif" }}>
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
