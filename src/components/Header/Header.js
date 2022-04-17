import { faHospitalSymbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar,  NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
  const {user, logout} = useFirebase();
  const element = <FontAwesomeIcon icon={faHospitalSymbol}/>
    return (
    <Navbar className='nav' sticky="top" variant='dark' bg="dark" expand="lg">
    <Container fluid>
    <Navbar.Brand>{element} Green Life Hospital</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
      {/* < className="d-flex"> */}
        <Link  to="/home">Home</Link>
        <Link  to="/services">Services</Link>
        <Link  to="/about">About</Link>
        <Nav.Link  to="/shops">Shops</Nav.Link>
        <Nav.Link  to="/doctor">Doctor</Nav.Link>
         <Nav.Link  to="#login">{user?.displayName}</Nav.Link>
        {user?.email?
          <Nav.Link onClick={logout}  to="/login">Logout</Nav.Link> :
          <Nav.Link to="/login">Login</Nav.Link>
        }
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      {/* </> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;