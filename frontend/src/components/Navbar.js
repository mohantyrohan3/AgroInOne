import React from 'react'
import  '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
// import {Link} from "react-router-dom";

function NavBar() {
  return (
    <Container className="mt-4">
      {/*   // bg="light" variant="light" */}
      <Navbar collapseOnSelect expand="lg" className="border-bottom border-dark">
        <Container>
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle border"
          />
          <Navbar.Brand href="/" className="ms-2 fs-5 nav-bar" style={{ color: 'white' }}>AgroInOne</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" bg="dark" />
          <Navbar.Collapse id="responsive-navbar-nav" bg="dark">
            <Nav className="me-auto">
              {/*             <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="/" className="pe-3 nav-bar" style={{ color: 'black' }}>HOME</Nav.Link>
              <Nav.Link href="/shop" className="pe-3  nav-bar" style={{ color: 'black' }} >SHOP</Nav.Link>
              <Nav.Link href="/schemes" className="pe-3  nav-bar" style={{ color: 'black' }} >SCHEMES</Nav.Link>
              <Nav.Link href="helpdesk" className="pe-3  nav-bar" style={{ color: 'black' }} >HELPDESK</Nav.Link>
              <Nav.Link href="/login" className="pe-3  nav-bar" style={{ color: 'black' }} >LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;