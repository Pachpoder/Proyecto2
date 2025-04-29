import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../logo.svg';

const CustomNavbar = ({ onSelectSection }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          ToDo App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => onSelectSection('tasks')}>Tasks</Nav.Link>
            <Nav.Link onClick={() => onSelectSection('goals')}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
