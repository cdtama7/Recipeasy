import React from "react";
import { useAuth0 } from '../contexts/auth0-context';
import { Navbar, Nav } from 'react-bootstrap'

// See https://react-bootstrap.github.io for docs
const NavBar = () => {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Welcome to RecipEasy</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>

        <Nav className="ml-auto">
          {!isLoading && !user && (
            <React.Fragment>
              <Nav.Link onClick={loginWithRedirect}>
                Login
              </Nav.Link>
            </React.Fragment>
          )}
          {!isLoading && user && (
            <React.Fragment>
              <Navbar.Text>{user.name}</Navbar.Text>
              <Nav.Link onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
              </Nav.Link>
            </React.Fragment>
          )}
        </Nav>
      </Navbar>
      
    </React.Fragment>
  )
}

export default NavBar;
