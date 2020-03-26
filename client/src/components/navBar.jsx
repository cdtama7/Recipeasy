import React from "react";
import { useAuth0 } from '../contexts/auth0-context';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Octicon, { getIconByName } from '@primer/octicons-react';
import ReactTooltip from 'react-tooltip'

// See https://react-bootstrap.github.io for docs
const NavBar = () => {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Welcome to RecipEasy</Navbar.Brand>
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
              <Nav.Link as={Link} to="/fridge" data-tip="Fridge">
                <Octicon icon={getIconByName('note')} />
              </Nav.Link>
              <Nav.Link as={Link} to="/recipes" data-tip="Search">
                <Octicon icon={getIconByName('search')} />
              </Nav.Link>
              <Nav.Link as={Link} to="/favorite" data-tip="Favorites">
                <Octicon icon={getIconByName('heart')} />
              </Nav.Link>
              <Navbar.Text>&nbsp;&nbsp;&nbsp;{user.name}</Navbar.Text>
              <Nav.Link onClick={() => logout({ returnTo: window.location.origin })}>
                &nbsp;&nbsp;&nbsp;Logout
              </Nav.Link>
              <ReactTooltip place="bottom" />
            </React.Fragment>
          )}
        </Nav>
      </Navbar>

    </React.Fragment>
  )
}

export default NavBar;
