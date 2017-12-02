//this component will populate based on a get API call
//based on the id(?) of the button clicked to get here

import React, { Component } from "react";
import {EventRegistrationForm} from "../Form";
import {CommentDisplay} from "../Comments";
import Jumbotron from "../../../node_modules/react-bootstrap/lib/Jumbotron";
import "./EventDetails.css";

export class EventDetails extends Component{
	constructor(props){
		super(props);
		
	}

	componentDidMount(){
		console.log(this.props.data);
	}
	//jumbotron background needs to populate from Firebase picture
	render(){
		return(
		<div className="container-fluid">
		<Jumbotron className="jumbo"/>
		<div className="container">
			<div className="panel-body">
				
                <h1>{this.props.data[0].title}</h1>
                <h3>{this.props.data[0].dateOfEvent}</h3>
                <h3>{this.props.data[0].time}</h3>
                <h3>{this.props.data[0].location}</h3>
                <h4> Hosted by: {this.props.data[0].organizer.name}</h4>
                <p className="eventDescription">{this.props.data[0].description}</p>
            	
			</div>
			<EventRegistrationForm eventId={this.props.data[0]._id} specificFields={this.props.data[0].specificFields} />
			<br></br>
			<br></br>
			<CommentDisplay eventId={this.props.data[0]._id} />
		</div>
		</div>
		)
	}
}