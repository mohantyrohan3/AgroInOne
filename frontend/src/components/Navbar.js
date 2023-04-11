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
import { redirect,useNavigate} from "react-router-dom";






function NavBar() {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState('LOGIN');

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLogin('LOGOUT');
      } else {
        setLogin("LOGIN");
      }
    });
  });




  const googleLogin = ()=>{
    const auth = getAuth();
    if(login=='LOGOUT'){
      signOut(auth).then(() => {
                  navigate('/', { replace: true });
                }).catch((error) => {
                });
    }

        onAuthStateChanged(auth, (user) => {
          if (user) {
                // signOut(auth).then(() => {
                //   setLogin("LOGIN")
                //   navigate('/', { replace: true });
                // }).catch((error) => {
                // });
          }
          
          
          else {
            const provider = new GoogleAuthProvider();
                      signInWithPopup(auth, provider)
                        .then((result) => {
                          const credential = GoogleAuthProvider.credentialFromResult(result);
                          const token = credential.accessToken;
                          const user = result.user;
                          console.log(user);
                          navigate('/', { replace: true });;
                        }).catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;
                          const email = error.customData.email;
                          const credential = GoogleAuthProvider.credentialFromError(error);
                        });

          }
        });
    
  }









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
            </Nav>
            <Nav>
              <Nav.Link href="/" className="pe-3 nav-bar" style={{ color: 'black' }}>HOME</Nav.Link>
              <Nav.Link href="/shop" className="pe-3  nav-bar" style={{ color: 'black' }} >SHOP</Nav.Link>
              <Nav.Link href="/schemes" className="pe-3  nav-bar" style={{ color: 'black' }} >SCHEMES</Nav.Link>
              <Nav.Link href="helpdesk" className="pe-3  nav-bar" style={{ color: 'black' }} >HELPDESK</Nav.Link>
              <Nav.Link onClick={googleLogin}  className="pe-3  nav-bar" style={{ color: 'black' }} >
                {login}
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;