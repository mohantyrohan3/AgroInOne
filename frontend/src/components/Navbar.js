import * as React from 'react';
import  '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
// import {Link} from "react-router-dom";
import app from "../config/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';





function NavBar() {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState('LOGIN');
  const [login_name, setLoginName] = React.useState('');

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLogin('LOGOUT');
        setLoginName(user.displayName);
      } else {
        setLogin("LOGIN");
      }
    });
  });



  const logout = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      setLogin('LOGIN');
      navigate('/', { replace: true });
    }).catch((error) => {

    });
  }


  const googleLogin = ()=>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // // const token = credential.accessToken;
        const user = result.user;
        console.log(user.displayName);
        setLoginName(user.displayName);
        navigate('/', { replace: true });;
      }).catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }









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
          <Navbar.Brand href="/" className="ms-2 fs-5 nav-bar" style={{ color: 'white' }}>AgroInOne</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" bg="dark" />
          <Navbar.Collapse id="responsive-navbar-nav" bg="dark">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/" className="pe-3 nav-bar" style={{ color: 'white' }}>HOME</Nav.Link>
              <Nav.Link href="/shop" className="pe-3  nav-bar" style={{ color: 'white' }} >SHOP</Nav.Link>
              <Nav.Link href="/schemes" className="pe-3  nav-bar" style={{ color: 'white' }} >SCHEMES</Nav.Link>
              <Nav.Link href="helpdesk" className="pe-3  nav-bar" style={{ color: 'white' }} >HELPDESK</Nav.Link>
                      {login==="LOGIN" ? (
                        <Nav.Link onClick={googleLogin}  className="pe-3  nav-bar" style={{ color: 'white' }} >{login}</Nav.Link>
                  ) : (
                    // <Nav.Link onClick={logout}  className="pe-3  nav-bar" style={{ color: 'white' }} >{login}</Nav.Link>
                            <NavDropdown title={login_name} className="pe-3  nav-bar" style={{ color: 'white' }} id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Do something</NavDropdown.Item>
                      <NavDropdown.Item href="#action4" onClick={logout}>
                        {login}
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;