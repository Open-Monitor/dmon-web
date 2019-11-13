import React from 'react';

//import { Layout, Menu, Icon, Select} from 'antd';
import { Nav, Navbar, NavDropdown, Select} from 'react-bootstrap';

import  './header.css';

export default () => (
  <div>
  <Navbar fixed="top" className="dark-nav px-md-5" variant="dark" expand="md">
    <Navbar.Brand href="/">
      <img className="mr-2" height="32" style={{transform: 'translateY(-1px)'}}src={process.env.PUBLIC_URL +'/logo2.png'}/>
      <span>Open Monitor</span>
    </Navbar.Brand>
    <Navbar.Toggle className="dark-nav-toggler" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <NavDropdown className="" title="Toggle Live" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Live</NavDropdown.Item>
            <NavDropdown.Item href="#">Archive</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
            <Nav.Link href="https://github.com/Open-Monitor/dmon" target="_blank">
              <img src={process.env.PUBLIC_URL +'/GitHub-Mark-Light-32px.png'}/>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  </div>
)
