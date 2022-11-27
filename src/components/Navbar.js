import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../logo.svg"

function NavigationBar() {

  return (
    <Navbar bg="dark" expand="lg" variant='dark' sticky='top'>
      <Container>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></Nav.Link>
            <a href='https://nedncl.com/' target='_blank' rel='noreferrer' style={{color: 'white', textDecoration: 'none', marginTop: 8, marginInline: 10}}>NCL</a>
            <Nav.Link><Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Logout</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;