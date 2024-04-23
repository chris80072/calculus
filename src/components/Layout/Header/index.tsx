import React from 'react'
import {Container, Navbar} from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Calculus</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
