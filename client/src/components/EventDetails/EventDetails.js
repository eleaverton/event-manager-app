//this component will populate based on a get API call
//based on the id(?) of the button clicked to get here

import React, { Component } from "react";
import {EventRegistrationForm} from "../Form";
import {CommentDisplay} from "../Comments";

export class EventDetails extends Component{
	constructor(props){
		super(props);
	this.state={
		title:'Christmas Party',
		date:'2017-12-12',
		time:'20:00',
		location:'North Pole',
		description:'This will be the best Christmas Party ever.',
		newField:'',
		specificFields:[{newField:"Sweater Size"},{newField:"Choice of Eggnog or Hot Chocolate"},{newField:"Will you participate in the gift exchange?"}],
		attendeeRegistrationOptions:['One registration per attendee','One registration for multiple attendees'],
		attendeeRegistration: []

	}
}

	// componentDidMount(){
	// 	this.loadEvent();
	// }

	// loadEvent = () => {
	// 	API.getEvent()
	// 		.then
	// }
	render(){
		return(
		<div className="container">
			<div className="panel-body">
				<h3>{this.state.title}</h3>
				<p>{this.state.date}</p>
				<p>{this.state.time}</p>
				<p>{this.state.location}</p>
				<p>{this.state.description}</p>
			</div>
			<EventRegistrationForm specificFields={this.state.specificFields} />
			<CommentDisplay eventId={this.props._id} />
		</div>
		)
	}
}