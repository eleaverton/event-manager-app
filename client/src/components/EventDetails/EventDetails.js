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
		const background = {
			background: 'url('+this.state.img+')'
			
		};
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
            <CountDown /> 
          </Col>
          </Row>
         
		<div className="container">
			<div className="panel-body">

				<Row>
				<Col md={8}>
                <h3>{this.props.data[0].dateOfEvent}</h3>
                <h3>{this.props.data[0].time}</h3>
                <br></br>
         <br></br>
                
                <h4> Hosted by: {this.props.data[0].organizer.name}</h4>
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
			<CommentDisplay eventId={this.props.data[0]._id} />
			
		</div>
		</div>
		)
	}
}
