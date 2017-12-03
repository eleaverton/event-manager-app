//this component will populate based on a get API call
//based on the id(?) of the button clicked to get here

import React, { Component } from "react";
import {EventRegistrationForm} from "../Form";
import {CommentDisplay} from "../Comments";
import Jumbotron from "../../../node_modules/react-bootstrap/lib/Jumbotron";
import "./EventDetails.css";
import {storage} from '../../firebase/fire';
import axios from "axios";
import CountDown from "../CountDown";
import Row from '../../../node_modules/react-bootstrap/lib/Row';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import Map1 from "../Map1";
import Auth from "../../modules/Auth";
import API from "../../utils/API";

var moment = require('moment');

const storageRef = storage.ref("eventprofile/");

export class EventDetails extends Component{
	constructor(props){
		super(props);
		this.state = {
			img:"",
			organizerUser:"",
			events:[]
		}
		this.checkIfOrganizer=this.checkIfOrganizer.bind(this);
	}

	componentWillMount(){
		//  storageRef.child(this.props.id+"/img_fjords.jpg").getDownloadURL().then((url) => {
		// 	this.setState({img:url});
		//  });
		axios.get("/api/events/" + this.props.id).then(res => {
			console.log(res);
			this.setState({img:res.data[0].imageUrl, organizer:res.data[0].organizer});
		}).catch(err => console.log(err));
		this.setState({organizerUser:false});
		this.checkIfOrganizer();
	}

	checkIfOrganizer(){
		
		const authToken = Auth.getToken();
    	const headers = { Authorization: authToken};
		API.getAllUserEvents(headers)
	        .then(res => {
	        	this.setState({events:res.data.eventsOrganized})
	        	console.log(this.props.id);
	        	console.log(this.state.events);
	        	for (var i=0;i<this.state.events.length;i++){
			    	if (this.props.id == this.state.events[i]._id){
			    		this.setState({organizerUser:true});
			    		console.log(this.state.organizerUser);
			    	};
			    }
			    })
	        	// console.log(res.data))
	        .catch(err => console.log(err));
	}
	render(){
		console.log(this.props);
		const background = {
			background: 'url('+this.state.img+')'
			
		};
		let orgText=null;
		const organizer=this.state.organizerUser;
		if(organizer==true){
			orgText=<p>(This is your event)</p>
		}

		return(
		<div className="container-fluid">

		<Jumbotron className="jumbo" style={background} />
		<Row className="countDown">
		<Col sm={12} md={12} lg={12}>
			<h1 className="JT">  {this.props.data[0].title}</h1>
		 <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
		</Col>
		</Row>

		<Row>
          <Col className="hidden-xs" sm={7} md={5} lg={5}>
            <CountDown date={this.props.data[0].dateOfEvent}/> 
          </Col>
          </Row>
         
		<div className="container">
			<div className="panel-body">

				<Row>
				<Col md={8}>
                <h3>{moment(this.props.data[0].dateOfEvent).format("MMMM Do YYYY")}</h3>
                <h3>{this.props.data[0].time}</h3>
                <br></br>
         <br></br>
                
                <h4> Hosted by: {this.props.data[0].organizer.name}</h4>
                {orgText}
                <p className="eventDescription">{this.props.data[0].description}</p>
            	</Col>
            	<Col md={4}>
            	<h3>{this.props.data[0].location}</h3>
            	<Map1 />
            	</Col>
            	</Row>
			
			</div>
			<EventRegistrationForm eventId={this.props.data[0]._id} attendees={this.props.data[0].attendees} specificFields={this.props.data[0].specificFields} />
			
			<br></br>
			<CommentDisplay eventId={this.props.data[0]._id} organizer={this.state.organizerUser} />
			
		</div>
		</div>
		)
	}
}
