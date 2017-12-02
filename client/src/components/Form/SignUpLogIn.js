import React, { Component } from "react";
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import {SignUpForm, LoginForm} from  "../Form";
import Modal from '../../../node_modules/react-bootstrap/lib/Modal';

export class SignUpLogIn extends Component {
	constructor(props){
		super(props);
		this.state={
			signInShow:false,
			loginShow:false,
			eventShow:false,
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
		this.setState({eventShow:false});
	}
	loginClose() {
		this.setState({loginShow:false});
	}
	loginOpen(){
		this.setState({loginShow:true});
		this.setState({eventShow:false});
	}


	render(){
		return(

			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-sm">Create an Event</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container">
						<Nav>
							<NavItem eventKey={2} onClick={this.loginOpen }>Log In</NavItem>
							<NavItem eventKey={3} onClick={this.signInOpen }>Sign Up</NavItem>
						</Nav>
						<SignUpForm show = {this.state.signInShow} onHide={this.signInClose} closeModal={this.signInClose} />
						<LoginForm show = {this.state.loginShow} onHide={this.loginClose} closeModal={this.loginClose}/>
					</div>
				</Modal.Body>
			</Modal>
		)
	}
}

