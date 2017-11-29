import React, {Component} from 'react';
import {SingleInput} from './SingleInput';
import {TextArea} from './TextArea';
import CheckboxOrRadioGroup from './CheckboxOrRadio';
import "./Form.css";

//This component will use a get API call to get the user info
//and another to get the needed registrant info

export class EventRegistrationForm extends Component {
	constructor(props){
		super(props);
		this.state={
			registrationDate:''
		};

    	this.handleInputChange=this.handleInputChange.bind(this);
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
	  	};
		// loadSpecificFields(specificFields) {
		// 	specificFields.forEach(function(element){
		// 		this.setState({
		// 			[element]:''
		// 		});
		// 		console.log(this.state);
		// 	}
		// };

		//render a form based on the information that the event creator specified
		render(){
			console.log(this.props);
			return(
				<div className="container">
					<div className="panel panel-default">
						<div className="panel-header form-header">
							Event Registration
						</div>
		  				<div className="panel-body">
		  					<form>
								<p>We can autopopulate base user info here if needed </p>
								{this.props.specificFields.length ? (
									<div className="registration">
										{this.props.specificFields.map( (specificField,idx) =>(
										<div key= {idx}>
											<SingleInput
												inputType={'text'}
												title={specificField.newField}
												name={'input1'}
												controlFunc={this.handleInputChange}
												content={this.state.input1} />
											<input
										        type="submit"
										        className="btn btn-primary float-right"
										        value="Submit">
										        Register
										    </input>

								    </div>))
										</div>
								):(
									<div>
										<input
									        type="submit"
									        className="btn btn-primary float-right"
									        value="Submit">
									        Register
									    </input>
								    </div>
								)}
							</form>
						</div> //panel-body
					</div> //panel panel-default
				</div> //container
				)
		}
	}
