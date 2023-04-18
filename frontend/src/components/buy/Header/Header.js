import React from "react";
import "./Header.css";
import { Navbar, Nav ,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../images/logo.png'
const Header = () => {
  return (
   
       
      <Container className="mt-4">
      {/*   // bg="light" variant="light" */}
      <Navbar collapseOnSelect variant="dark" expand="lg" className="border-bottom border-dark">
        <Container>
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle border"
          />
          <Navbar.Brand href="/marketplace" className="ms-2 fs-5 nav-bar" style={{ color: 'white' }}>Marketplace</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" bg="dark" />
          <Navbar.Collapse id="responsive-navbar-nav" bg="dark">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/" className="pe-3 nav-bar" style={{ color: 'white' }}>HOME</Nav.Link>
              <Nav.Link href="/shop" className="pe-3  nav-bar" style={{ color: 'white' }} >SHOP</Nav.Link>
              <Nav.Link href="/marketplace" className="pe-3  nav-bar" style={{ color: 'white' }} >MARKETPLACE</Nav.Link>

            </Nav>
            <Link className="nav-link" to="/review/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </Navbar.Collapse>





          
            
          
          
        </Container>
      </Navbar>
    </Container>

  );
};

export default Header;
