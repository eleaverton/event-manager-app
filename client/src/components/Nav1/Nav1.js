import React from 'react';
import NavbarBrand from "../../../node_modules/react-bootstrap/lib/NavbarBrand";
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import Navbar from "../../../node_modules/react-bootstrap/lib/Navbar";
import NavDropdown from "../../../node_modules/react-bootstrap/lib/NavDropdown";
import MenuItem from "../../../node_modules/react-bootstrap/lib/MenuItem";
import Button from "../../../node_modules/react-bootstrap/lib/Button";

const Nav1 = () => (
  <div>
  <Navbar className="nav2" collapseOnSelect navbarStaticTop>
    
      <Navbar.Brand>
        <a className="logoText" href="#"><h3 className="navT"> Eventster</h3></a>
      </Navbar.Brand>
      <Navbar.Toggle className="navTog"/>
    
    <Navbar.Collapse>
    
      <Nav pullRight>
        <Button className="button" bsStyle="custom" eventKey={1} href="/login"><span className="navItem">Sign In</span></Button>
        <Button className="button" bsStyle="custom" eventKey={2} href="/"><span className="navItem">Home</span></Button>
        <Button className="button" bsStyle="custom" eventKey={1} href="#"><span className="navItem">Create Event</span></Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
);

export default Nav1;