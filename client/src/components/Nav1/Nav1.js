import React, {Component} from 'react';
import NavbarBrand from "../../../node_modules/react-bootstrap/lib/NavbarBrand";
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import Image from "../../../node_modules/react-bootstrap/lib/Image";
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import Navbar from "../../../node_modules/react-bootstrap/lib/Navbar";
import NavDropdown from "../../../node_modules/react-bootstrap/lib/NavDropdown";
import MenuItem from "../../../node_modules/react-bootstrap/lib/MenuItem";
import {SignUpForm, LoginForm, CreateEventForm} from  "../Form";
import { LinkContainer } from 'react-router-bootstrap';
import LogoutButton from '../LogoutButton';
import Auth from "../../modules/Auth";

// const Nav1 = () => (
//   <Navbar inverse collapseOnSelect>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#">React-Bootstrap</a>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav>
//         <NavItem eventKey={1} href="#">Link</NavItem>
//         <NavItem eventKey={2} href="#">Link</NavItem>
//         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//           <MenuItem eventKey={3.1}>Action</MenuItem>
//           <MenuItem eventKey={3.2}>Another action</MenuItem>
//           <MenuItem eventKey={3.3}>Something else here</MenuItem>
//           <MenuItem divider />
//           <MenuItem eventKey={3.3}>Separated link</MenuItem>
//         </NavDropdown>
//       </Nav>
//
//       <Nav pullRight>
//         <LinkContainer to="/event">
//           <NavItem eventKey={4}>Create an Event</NavItem>
//         </LinkContainer>
//         {Auth.isUserAuthenticated() ? (
//         <LinkContainer to="/logout" onClick = {Auth.deauthenticateUser}>
//           <NavItem eventKey={5}>Log Out</NavItem>
//         </LinkContainer>):(
//         <LinkContainer to="/login">
//           <NavItem eventKey={6}>Log In</NavItem>
//         </LinkContainer>)}
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );
// ======


class Nav1 extends Component {
   constructor(props){
     super(props);
     this.state={
       signInShow:false,
       loginShow:false,
       createEventShow:false
     };
     this.signInOpen=this.signInOpen.bind(this);
     this.signInClose=this.signInClose.bind(this);
     this.loginOpen=this.loginOpen.bind(this);
     this.loginClose=this.loginClose.bind(this);
     this.createEventOpen=this.createEventOpen.bind(this);
     this.createEventClose=this.createEventClose.bind(this);
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
   createEventClose() {
     this.setState({createEventShow:false});
   }
   createEventOpen(){
     this.setState({createEventShow:true});
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
             {Auth.isUserAuthenticated() ? (
              <Nav>
              <NavItem eventKey={2} onClick={this.createEventOpen}>Create Event</NavItem>
             <LinkContainer to="/logout" onClick = {Auth.deauthenticateUser}>
               <NavItem eventKey={5} >Log Out </NavItem>
               
             </LinkContainer>
             </Nav>):(
             <Nav>
               <NavItem eventKey={3} onClick={this.loginOpen}>Log In</NavItem>
               <NavItem eventKey={4} onClick={this.signInOpen}>Sign Up</NavItem>
             </Nav>)}
           </Nav>
         </Navbar.Collapse>
         <SignUpForm show = {this.state.signInShow} onHide={this.signInClose} closeModal={this.signInClose} />
         <LoginForm show = {this.state.loginShow} onHide={this.loginClose} closeModal={this.loginClose}/>
          <CreateEventForm show = {this.state.createEventShow} onHide={this.createEventClose} closeModal={this.loginClose}/>
       </Navbar>

     )
   }
 };


export default Nav1;
