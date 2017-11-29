//this component will populate based on a get API call
//based on the id(?) of the button clicked to get here

import React, { Component } from "react";
import {EventRegistrationForm} from "../Form";
import {CommentDisplay} from "../Comments";
import API from "../../utils/API";

export class EventDetails extends Component{
	constructor(props){
		super(props);
	this.state={
		event:[]
		// title:'',
		// date:'',
		// time:'',
		// location:'',
		// description:'',
		// newField:'',
		// specificFields:[],
		// attendeeRegistrationOptions:['One registration per attendee','One registration for multiple attendees'],
		// attendeeRegistration: []

	}
}

	componentDidMount(){
		this.loadEvent();
	}

	loadEvent = () => {
		API.getEvent(this.props._id)
			.then(res => this.setState({event:res.data}))
			.catch(err =>console.log(err));
		console.log(this.state);
	}
	render(){
		return(
		<div className="container">
			<div className="panel-body">
				<h3>{this.state.event}</h3>
			
			</div>
			<EventRegistrationForm specificFields={this.state.specificFields} />
			<CommentDisplay eventId={this.props._id} />
		</div>
		)
	}
}