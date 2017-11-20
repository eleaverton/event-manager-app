import React, {Component} from 'react';  
import {SingleInput} from './SingleInput'; 
import {TextArea} from './TextArea';  
import CheckboxOrRadioGroup from './CheckboxOrRadio';  
import "./Form.css";


export class CreateEventForm extends Component {
	constructor(props){
		super(props);
		this.state={
			title:'',
			date:'',
			time:'',
			location:'',
			description:'',
			newField:'',
			specificFields:[],
			attendeeRegistrationOptions:['One registration per attendee','One registration for multiple attendees'],
			attendeeRegistration: []
			
		};
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.handleClearForm = this.handleClearForm.bind(this);
    	this.handleAddSpecificField=this.handleAddSpecificField.bind(this);
    	this.handleFieldNameChange=this.handleFieldNameChange.bind(this);
    	this.handleRadioSelection=this.handleRadioSelection.bind(this);
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

  	handleRadioSelection(event){
  		this.setState({attendeeRegistration:[event.target.value]});
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
	      specificFields:this.state.specificFields,
	      attendeeRegistration:this.state.attendeeRegistration
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
			description:'',
			newField:'',
			specificFields:[]
			
	    });
	};

	handleAddSpecificField = () => {
	    this.setState({
	      specificFields: this.state.specificFields.concat([{ newField: '' }])
	    });
  	}
	handleFieldNameChange = (idx) => (evt) => {
	    const newFields = this.state.specificFields.map((specificField, sidx) => {
	      if (idx !== sidx) return specificField;
	      return { ...specificField, newField: evt.target.value };
	    });

    this.setState({ specificFields: newFields });
  	}

	// add(){
	// 	const createdFields = this.state.createdFields.concat(DocumentInput);
 //    	this.setState({ createdFields });
 //    	this.setState(specificFields: this.state.specificFields.concat)
 //    	console.log(this.state.createdFields);

	// }
	render(){
		// const createdFields = this.state.createdFields.map((Element, index) => {
  //     		return <Element key={ index } index={ index } />
  //   	});
		return(
			<div className="container">
			<div className="panel panel-default">
				<div className="panel-header form-header">
					Create Event
				</div>
  				<div className="panel-body">
					<form onSubmit={this.handleFormSubmit}>
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
					    {this.state.specificFields.map((specificField, idx) => (
				          <div>
				            <SingleInput
				              inputType={'text'}
				              placeholder={`New Field #${idx + 1}`}
				              value={specificField.newField}
				              controlFunc={this.handleFieldNameChange(idx)}
				            />
				          </div>
				        ))}
				        <button type="button" onClick={this.handleAddSpecificField} className="btn btn-primary small">Add Registrant Field</button>
				        <br></br>
          				<br></br>
				        <CheckboxOrRadioGroup
						    title={'Do you need each attendee to register individually or can one person register multiple attendees?'}
						    setName={'attendee'}
						    type={'radio'}
						    controlFunc={this.handleRadioSelection}
						    options={this.state.attendeeRegistrationOptions}
						    selectedOptions={this.state.attendeeRegistration} />

					      
          				<br></br>
          				<br></br>
					    <input
					        type="submit"
					        className="btn btn-primary float-right"
					        value="Submit"/>
						
					</form>
				</div>
			</div>
			</div>
			)
	}
}
