import React, {Component} from 'react';
import axios from "axios";
import {SingleInput} from './SingleInput';
import {TextArea} from './TextArea';
import CheckboxOrRadioGroup from './CheckboxOrRadio';
import "./Form.css";
import Auth from "../../modules/Auth";
import Modal from '../../../node_modules/react-bootstrap/lib/Modal';
import PropTypes from 'prop-types';
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import {SignUpForm, LoginForm} from  "../Form";
import {storage} from '../../firebase/fire';

const jwt = require("jsonwebtoken");
const storageRef = storage.ref("eventprofile/");
var file;
var decode;
var id;



export class CreateEventForm extends Component {
	constructor(props){
		super(props);
		this.state={
			signInShow:false,
			loginShow:false,
			eventShow:false,
			admin:'',
			title:'',
			dateOfEvent:'',
			time:'',
			location:'',
			description:'',
			hashtag:'',
			imageName:'',
			imageUrl:'',
			image: '',
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
	

	handleInputChange(event){
    	const { name, value } = event.target;
			if (event.target.files){
	      file = event.target.files[0];
	      this.setState({imageName:file.name});
	    }
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
	    	//admin: however we get the user id from authentication
	      	title: this.state.title,
	      	dateOfEvent: this.state.dateOfEvent,
	      	time: this.state.time,
	      	location: this.state.location,
	      	description:this.state.description,
	      	hashtag:this.state.hashtag,
					image: this.state.image,
					imageUrl: this.state.imageUrl,
					imageName: this.state.imageName,
	      	//this array will be used to populate the registration form for the event
	      	specificFields:this.state.specificFields,
	      	attendeeRegistration:this.state.attendeeRegistration
	      	//add in image path to Firebase and Firebase link to image:this.state.image

	    };
	    //create post request with right data path
	    console.log('Send this in a POST request:', formPayload)
	    const authToken = Auth.getToken();
	    const headers = { Authorization: authToken}

			axios.post("/api/events", formPayload, {headers:headers})
				.then((response) =>{
					console.log(response);
					id = response.data.eventsOrganized[response.data.eventsOrganized.length-1];
					storageRef.child(id +"/"+file.name).put(file)
						.then((snapshot) => {
	            			console.log(snapshot);
							this.setState({imageUrl:snapshot.downloadURL});
							axios.put("/eventImageUrl", {imageUrl: snapshot.downloadURL, id: id}).catch(err => console.log(err));
	          			});
				}).catch(err => console.log(err));
			setTimeout(()=> {
		      	this.context.router.history.push("/events/"+id);
		      },2200);

	    this.handleClearForm(event);
	    this.props.closeModal();
	}

	handleClearForm(event) {
	    event.preventDefault();
	    this.setState({
	      	title:'',
			dateOfEvent:'',
			time:'',
			location:'',
			description:'',
			hashtag:'',
			image:'',
			newField:'',
			specificFields:[],


	    });
	}

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

	render(){
		const isLoggedIn = Auth.isUserAuthenticated();
		console.log(isLoggedIn);

		return(
			<div>
				{isLoggedIn ? (
					<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
						<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-sm">Create an Event</Modal.Title>
						</Modal.Header>
					<Modal.Body>
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
								name={'dateOfEvent'}
								controlFunc={this.handleInputChange}
								content={this.state.dateOfEvent} />
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
						    <SingleInput
								inputType={'file'}
								title={'Event Image'}
								name={'image'}
								controlFunc={this.handleInputChange}
								content={this.state.image} />
						    <h5>Besides basic user info, what inputs do you need from your attendees?</h5>
						    {this.state.specificFields.map((specificField, idx) => (
					          <div key = {idx}>
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
						    <input
						        type="submit"
						        className="btn btn-primary float-right"
						        value="Submit"/>
						</form>
					</Modal.Body>
				</Modal>

						):(
							<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
								<Modal.Header closeButton>
									<Modal.Title id="contained-modal-title-sm">Sign Up or Log In to Create an Event</Modal.Title>
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
									)}
					
			</div>



				) 
					} 
				}; 


CreateEventForm.contextTypes = {
  router: PropTypes.object.isRequired
};
