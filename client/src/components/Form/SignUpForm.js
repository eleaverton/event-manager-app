import React, {Component} from 'react';  
import {SingleInput} from './SingleInput';
import "./Form.css";


export class SignUpForm extends Component {
	constructor(props){
		super(props);
		this.state={
			firstName:'',
			lastName:'',
			dateOfBirth:'',
			email:'',
			zip:'',
			twitterHandle:''
		};
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.handleClearForm = this.handleClearForm.bind(this);
	}

	//Need data path to not get error with fetch
	// componentDidMount(){
	// 	fetch()
	// 	.then(res => res.json())
	// 	.then(data =>{
	// 		this.setState({
	// 		firstName=data.firstName,
	// 		lastName=data.lastName,
	// 		dateOfBirth=data.dateOfBirth,
	// 		email=data.email,
	// 		zip=data.zip,
	// 		twitterHandle=data.twitterHandle
	// 		});
	// 	});
	// }
	handleInputChange(event){
    	const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
  	};
  	handleFormSubmit(event) {
	    event.preventDefault();

	    const formPayload = {
	      firstName: this.state.firstName,
	      lastName: this.state.lastName,
	      dateOfBirth: this.state.dateOfBirth,
	      email: this.state.email,
	      zip: this.state.zip,
	      twitterHandle: this.state.twitterHandle
	    };
	    //create post request with right data path
	    console.log('Send this in a POST request:', formPayload)
	    this.handleClearForm(event);
	};
	handleClearForm(event) {
	    event.preventDefault();
	    this.setState({
	      	firstName:'',
			lastName:'',
			dateOfBirth:'',
			email:'',
			zip:'',
			twitterHandle:''
	    });
	};
	render(){
		return(
			<div class="panel panel-default">
  				<div class="panel-body">
					<form className="container" onSubmit={this.handleFormSubmit}>
						<h4> Sign Up Form </h4>
						<SingleInput
							inputType={'text'}
							title={'First Name'}
							name={'firstName'}
							controlFunc={this.handleInputChange}
							content={this.state.firstName} />
						<SingleInput
							inputType={'text'}
							title={'Last Name'}
							name={'lastName'}
							controlFunc={this.handleInputChange}
							content={this.state.lastName} />
						<SingleInput
							inputType={'date'}
							title={'Birthday'}
							name={'dateOfBirth'}
							controlFunc={this.handleInputChange}
							content={this.state.dateOfBirth} />
						<SingleInput
							inputType={'email'}
							title={'Email'}
							name={'email'}
							controlFunc={this.handleInputChange}
							content={this.state.email} />
						<SingleInput
							inputType={'number'}
							title={'Zip Code'}
							name={'zip'}
							controlFunc={this.handleInputChange}
							content={this.state.zip} />
						<SingleInput
							inputType={'text'}
							title={'Twitter Handle'}
							name={'twitterHandle'}
							controlFunc={this.handleInputChange}
							content={this.state.twitterHandle} />
						<input
					        type="submit"
					        className="btn btn-primary float-right"
					        value="Submit"/>
					</form>
				</div>	
			</div>	
			)
	}
}
