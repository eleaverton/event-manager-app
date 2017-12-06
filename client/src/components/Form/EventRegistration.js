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
			registered:'',
			specificFields:[]

		};

    	this.handleSpecificResponseChange=this.handleSpecificResponseChange.bind(this);
    	this.handleEasyRegistration=this.handleEasyRegistration.bind(this);
		this.loadSpecificFields=this.loadSpecificFields.bind(this);
		this.checkRegistration=this.checkRegistration.bind(this);
		this.handleSpecificFieldsRegistration=this.handleSpecificFieldsRegistration.bind(this);
		}

		componentDidMount(){
			console.log("mount");
			this.checkRegistration();
			console.log(this.state);
			this.loadSpecificFields(this.props.specificFields);
		}
		
		handleSpecificResponseChange = (idx) => (event) => {
			const newSpecificFields = this.state.specificFields.map((specificField,sidx)=>{
				if (idx !== sidx) return specificField;
				return {...specificField, response:event.target.value};
			});
			this.setState({specificFields: newSpecificFields});
	    	
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

	  		this.setState({registered:true});
	  	}

	  	handleSpecificFieldsRegistration(event){
	  		event.preventDefault();
	  		console.log(this.props);
	  		const authToken = Auth.getToken();
	    	const headers = { Authorization: authToken}

	    	const formPayload = {specificFields: this.state.specificFields};
	    	console.log(formPayload);
	    	axios
	  			.post("/api/events/"+this.props.eventId+"/register",formPayload,{headers:headers})
	  			.then(response => {console.log(response)})
	  			.catch(err =>console.log(err));

	  		this.setState({registered:true});

	  	}
	    	
	    	// const formPayload = {specificFields:[
	    	// 	{specificFieldId:111111, response: userInput}, 
	    	// 	{specificFieldId:22222, response: userInput}]
	    	// 	}

	    	// }
	

		loadSpecificFields = (specificFields) => {
			console.log(specificFields);
			console.log(this);

			specificFields.forEach((element) => {
				var sfObj = {
					specificFieldId:element._id,
					fieldName:element.fieldName,
					response:''
				}
				this.state.specificFields.push(sfObj);
			})
					
			// specificFields.forEach((element)=>{
			// 	console.log(this);
			// 	this.setState({
			// 		specificFields:this.state.specificFields.concat([{
			// 			specificFieldId:element._id,
			// 			fieldName:element.fieldName,
			// 			response: ''
			// 		}])
			// 	});
			// console.log(this.state.specificFields);	
			// })
			console.log(this.state.specificFields);	
		}

		checkRegistration(){
			const user = Auth.getUserId();
			console.log(user);
			console.log(this.props.attendees);

			var registeredUser = false;
				for(var i = 0; i < this.props.attendees.length; i++) {
					if (this.props.attendees[i]._id == user) {
						registeredUser = true;
						break;
					}
				}
			console.log(this.props.attendees.includes(user));
			this.setState({registered: registeredUser});
			console.log(this.state.registered);

		}

		//render a form based on the information that the event creator specified
		render(){
			console.log(this.props);
			let specificFieldsPresent
			const registered = this.state.registered;
			console.log(this.state.specificFields);

			if (this.props.specificFields.length > 0) {
		      specificFieldsPresent = true;
		    } else {
		      specificFieldsPresent = false;
		    }
		    console.log(specificFieldsPresent)

		

			return(
				<div className="container">

		  			{registered ? (
		  				<h5> You are registered for this event! </h5>
		  				
						):(
						<div className = "registrationForm">
						{specificFieldsPresent ? (
							<form onSubmit={this.handleSpecificFieldsRegistration}>
								{this.state.specificFields.map((specificField,idx) =>(
	 									<div className="specificFieldDiv">
	 										<SingleInput
	 										inputType={'text'}
	 										title={specificField.fieldName}
	 										value={specificField.response}
	 					
	 										controlFunc={this.handleSpecificResponseChange(idx)}
	 										 />
	 									</div>

	 								))}
								<Button
							        type="submit"
							        className="btn btn-primary float-right"
							        value="Submit">

							        Register
								</Button>
							</form>

							):(
							<form onSubmit={this.handleEasyRegistration}>
									<Button
								        type="submit"
								        className="btn btn-primary float-right"
								        value="Submit">

								        Register
									</Button>	
								</form>
							)}
						</div>

						)}	
	  						 
				</div> 
			)
		}
	}
