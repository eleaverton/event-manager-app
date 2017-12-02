//this component will populate based on a get API call
//based on the id(?) of the button clicked to get here

import React, { Component } from "react";
import {EventRegistrationForm} from "../Form";
import {CommentDisplay} from "../Comments";
import Jumbotron from "../../../node_modules/react-bootstrap/lib/Jumbotron";
import "./EventDetails.css";
import {storage} from '../../firebase/fire';
import axios from "axios";

const storageRef = storage.ref("eventprofile/");

export class EventDetails extends Component{
	constructor(props){
		super(props);
		this.state = {
			img:""
		}
	}

	componentWillMount(){
		//  storageRef.child(this.props.id+"/img_fjords.jpg").getDownloadURL().then((url) => {
		// 	this.setState({img:url});
		//  });
		axios.get("/api/events/" + this.props.id).then(res => {
			console.log(res);
			this.setState({img:res.data[0].imageUrl});
		}).catch(err => console.log(err));
	}
	//jumbotron background needs to populate from Firebase picture
	render(){
		console.log(this.props);
		return(
		<div className="container-fluid">
		<Jumbotron className="jumbo"/>
		<div className="container">
			<div className="panel-body">
								<img src= {this.state.img} alt="..." />
                <h1>{this.props.data[0].title}</h1>
                <h3>{this.props.data[0].dateOfEvent}</h3>
                <h3>{this.props.data[0].time}</h3>
                <h3>{this.props.data[0].location}</h3>
                <h4> Hosted by: {this.props.data[0].organizer.name}</h4>
                <p>{this.props.data[0].description}</p>

			</div>
			<EventRegistrationForm eventId={this.props.data[0]._id} specificFields={this.props.data[0].specificFields} />
			<CommentDisplay eventId={this.props.data[0]._id} />
		</div>
		</div>
		)
	}
}
