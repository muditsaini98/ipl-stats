import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBarnav = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/ipl-stats/">IPL Stats</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/ipl-stats/teams">Stats By Team</Nav.Link>
              <Nav.Link href="/ipl-stats/seasons">Stats By Season</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarnav