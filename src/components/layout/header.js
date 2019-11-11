import React from 'react';

//import { Layout, Menu, Icon, Select} from 'antd';
import { Nav, Navbar, NavDropdown, Select} from 'react-bootstrap';

import  './header.css';

export default () => (
  <div>
  <Navbar fixed="top" className="dark-nav px-md-5" variant="dark" expand="md">
    <Navbar.Brand href="/">Open Monitor</Navbar.Brand>
    <Navbar.Toggle className="dark-nav-toggler" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <NavDropdown className="" title="Toggle Live" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Live</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Archive</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
            <Nav.Link href="#link">GitHub</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  </div>
)
