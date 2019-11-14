import React from 'react';

import {Row, Col, Nav, NavItem} from 'react-bootstrap';
import './header.css';

export default () => (
  <div>
    <div className="sideBar">
      <Nav className="flex-column pt-5">
        <NavItem className="nav-category">
          <span>Main Menu</span>
        </NavItem>
        <NavItem>
          <Nav.Link>
            <span className="menu-title">Server List</span>
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link>
            <span className="menu-title">CPU Useage</span>
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link>
            <span className="menu-title">Memory Used</span>
          </Nav.Link>
          <Nav.Link>
            <span className="menu-title">Memory Avaliable</span>
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link>
            <span className="menu-title">Outbound Bytes</span>
          </Nav.Link>
          <Nav.Link>
            <span className="menu-title">Inbound Bytes</span>
          </Nav.Link>
          <Nav.Link>
            <span className="menu-title">Outbound Packets</span>
          </Nav.Link>
          <Nav.Link>
            <span className="menu-title">Inbound Packets</span>
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link>
            <span className="menu-title">PIDS</span>
          </Nav.Link>
        </NavItem>
      </Nav>
    </div>
  </div>
);
