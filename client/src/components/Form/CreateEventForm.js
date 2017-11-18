import React, {Component} from 'react';  
import {SingleInput} from './SingleInput'; 
import {TextArea} from './TextArea';  


export class CreateEventForm extends Component {
	constructor(props){
		super(props);
		this.state={
			title:'',
			date:'',
			time:'',
			location:'',
			description:'',
			specificFields:[]
			
		};
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.handleClearForm = this.handleClearForm.bind(this);
    	// this.appendInput=this.appendInput.bind(this);
	}

	//Need data path to not get error with fetch
	// componentDidMount(){
	// 	fetch()
	// 	.then(res => res.json())
	// 	.then(data =>{
	// 		this.setState({
	// 		title=data.title,
	// 		date=data.date,
	// 		time=data.time,
	// 		location=data.location,
	// 		
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
	      title: this.state.title,
	      date: this.state.date,
	      time: this.state.time,
	      location: this.state.location,
	      description:this.state.description,
	      //this array will be used to populate the registration form for the event
	      specificFields:this.state.specificFields
	    };
	    //create post request with right data path
	    console.log('Send this in a POST request:', formPayload)
	    this.handleClearForm(event);
	};
	handleClearForm(event) {
	    event.preventDefault();
	    this.setState({
	      	title:'',
			date:'',
			time:'',
			location:'',
			description:''
			
	    });
	};
	// appendInput() {
	// 	var specificFields = this.state.specificFields.slice();
	// 	specificFields.push(newField);
	// 	this.setState({specificFields: specificFields}) ;
	// }
	render(){
		return(
			<div class="panel panel-default">
  				<div class="panel-body">
					<form className="container" onSubmit={this.handleFormSubmit}>
						<h4> Create Event </h4>
						<SingleInput
							inputType={'text'}
							title={'Title'}
							name={'title'}
							controlFunc={this.handleInputChange}
							content={this.state.title} />
						<SingleInput
							inputType={'date'}
							title={'Event Date'}
							name={'date'}
							controlFunc={this.handleInputChange}
							content={this.state.date} />
						<SingleInput
							inputType={'time'}
							title={'Event Time'}
							name={'time'}
							controlFunc={this.handleInputChange}
							content={this.state.time} />
						<SingleInput
							inputType={'text'}
							title={'Location'}
							name={'location'}
							controlFunc={this.handleInputChange}
							content={this.state.location} />
						<TextArea
					        title={'Description'}
					        rows={4}
					        resize={false}
					        content={this.state.description}
					        name={'description'}
					        controlFunc={this.handleInputChange} />
					    <h5>Besides basic user info, what inputs do you need from your attendees?</h5>
					    <button
          					className="btn btn-link float-left"
          					onClick={this.handleClearForm}>Add Registrant Info Field</button>
          				
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
