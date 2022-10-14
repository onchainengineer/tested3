import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDesign() {
  return (
    <Navbar bg="navbar-dark bg-white shadow p-3 mb-5 bg-white rounded" expand="lg">
      <Container>
        <Navbar.Brand>
        <span class="navbar-brand mb-0 h1">Athena</span>
        </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#productview">View Products</Nav.Link>
            <Nav.Link href="#addproduct">Add Product</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarDesign;