import { faHospitalSymbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar,  NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Header.css';

const Header = () => {
  const {user, logout} = UseAuth();
  const element = <FontAwesomeIcon icon={faHospitalSymbol}/>
    return (
      <>
      <Navbar bg="dark" expand="lg" sticky="top">
  <Container fluid>
    <Navbar.Brand ><Button variant="outline-primary">{element}Green life Healthcare</Button></Navbar.Brand>
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
      
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/shops">Shop</Link>
        <Link to="/doctor">Doctor</Link>
      {user?. email?
        <Link onClick={logout}to="/login">Logout</Link> :
      <Link to="/login">Login</Link>
      }
      <span>{user.displayName}</span>
        
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    )

};

export default Header;