import React, {Component} from 'react';
import NavbarBrand from "../../../node_modules/react-bootstrap/lib/NavbarBrand";
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import Navbar from "../../../node_modules/react-bootstrap/lib/Navbar";
import NavDropdown from "../../../node_modules/react-bootstrap/lib/NavDropdown";
import MenuItem from "../../../node_modules/react-bootstrap/lib/MenuItem";
import {SignUpForm, LoginForm} from  "../Form";

class Nav1 extends Component {
   constructor(props){
     super(props);
     this.state={
       signInShow:false,
       loginShow:false,
     };
     this.signInOpen=this.signInOpen.bind(this);
     this.signInClose=this.signInClose.bind(this);
     this.loginOpen=this.loginOpen.bind(this);
     this.loginClose=this.loginClose.bind(this);
   }
   
   
   signInClose() {
     this.setState({signInShow:false});
   }
   signInOpen(){
     this.setState({signInShow:true});
   }
   loginClose() {
     this.setState({loginShow:false});
   }
   loginOpen(){
     this.setState({loginShow:true});
   }
   
   render(){
     
 
     return(
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
             <NavItem eventKey={2} onClick={this.loginOpen}>Log In</NavItem>
             <NavItem eventKey={2} onClick={this.signInOpen}>Sign Up</NavItem>
           </Nav>
         </Navbar.Collapse>
         <SignUpForm show = {this.state.signInShow} onHide={this.signInClose} />
         <LoginForm show = {this.state.loginShow} onHide={this.loginClose} />
       </Navbar>
 
     )
   }
 };

export default Nav1;