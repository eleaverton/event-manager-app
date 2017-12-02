import React, {Component} from 'react';
import axios from "axios";
import {SingleInput} from './SingleInput';
import {TextArea} from './TextArea';
import CheckboxOrRadioGroup from './CheckboxOrRadio';
import "./Form.css";
import Button from "../../../node_modules/react-bootstrap/lib/Button";
import Auth from "../../modules/Auth";

//This component will use a get API call to get the user info
//and another to get the needed registrant info

export class EventRegistrationForm extends Component {
	constructor(props){
		super(props);
		this.state={
			registrationDate:'',
			specificFields:null
		};

    	this.handleInputChange=this.handleInputChange.bind(this);
    	this.handleEasyRegistration=this.handleEasyRegistration.bind(this);
		// this.loadSpecificFields=this.loadSpecificFields.bind(this);
		}

		// componentDidMount(){
		// 	this.loadSpecificFields(this.props.specificFields);
		// }
		//define functions here
		handleInputChange(event){
	    	const { name, value } = event.target;
		    this.setState({
		      [name]: value
		    });
	  	}

	  	handleEasyRegistration(event){
	  		event.preventDefault();
	  		console.log(this.props);
	  		const authToken = Auth.getToken();
	    	const headers = { Authorization: authToken}
	  		axios
	  			.post("/api/events/"+this.props.eventId+"/register",{},{headers:headers})
	  			.then(response => {console.log(response)})
	  			.catch(err =>console.log(err));
	  	}

		// loadSpecificFields(specificFields) {
		// 	specificFields.forEach(function(element){
		// 		this.setState({
		// 			[element]:''
		// 		});
		// 		console.log(this.state);
		// 	}
		// }

		//render a form based on the information that the event creator specified
		render(){
			console.log(this.props);
			return(
				<div className="container">
						
		  				
	  					<form onSubmit={this.handleEasyRegistration}>
							<Button
						        type="submit"
						        className="btn btn-primary float-right"
						        value="Submit">

						        Register
							</Button>	
						</form>		 
				</div> 
				)
		}
	}
