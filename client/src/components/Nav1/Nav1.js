import React from 'react';
import NavbarBrand from "../../../node_modules/react-bootstrap/lib/NavbarBrand";
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import Navbar from "../../../node_modules/react-bootstrap/lib/Navbar";
import NavDropdown from "../../../node_modules/react-bootstrap/lib/NavDropdown";
import MenuItem from "../../../node_modules/react-bootstrap/lib/MenuItem";

const Nav1 = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Nav1;