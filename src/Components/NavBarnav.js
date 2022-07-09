import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const NavBarnav = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand >IPL Stats</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/teams">
              <Nav.Link>Stats By Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/seasons">
              <Nav.Link>Stats By Season</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarnav