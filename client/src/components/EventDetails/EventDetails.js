

import React, { Component } from "react";
import { EventRegistrationForm } from "../Form";
import { CommentDisplay } from "../Comments";
import Jumbotron from "../../../node_modules/react-bootstrap/lib/Jumbotron";
import "./EventDetails.css";
import { storage } from "../../firebase/fire";
import axios from "axios";
import CountDown from "../CountDown";
import Row from "../../../node_modules/react-bootstrap/lib/Row";
import Col from "../../../node_modules/react-bootstrap/lib/Col";
import Map1 from "../Map1";
import Auth from "../../modules/Auth";
import API from "../../utils/API";

var moment = require('moment');
var geocoder = require('geocoder');

const storageRef = storage.ref("eventprofile/");



export class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
		img:"",
		organizerUser:"",
		events:[],
		location:{}
	}
	this.checkIfOrganizer=this.checkIfOrganizer.bind(this);
  }

  componentWillMount() {
    //  storageRef.child(this.props.id+"/img_fjords.jpg").getDownloadURL().then((url) => {
    // 	this.setState({img:url});
    //  });
		// Geocoding

		geocoder.geocode(this.props.data[0].location, ( err, data ) => {
		  // do something with data

			if (data.results[0] !== undefined){
				this.setState({ location: data.results[0].geometry.location });
			}
			else {
				this.setState({ location: { lat: 29.76328, lng: -95.36327 }});
			}
		});


    axios
      .get("/api/events/" + this.props.id)
      .then(res => {
        console.log(res);
        this.setState({ img: res.data[0].imageUrl });
      })
      .catch(err => console.log(err));
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

  render() {
    console.log(this.props);
    const background = {
      background: ""
    };
    let orgText=null;
		const organizer=this.state.organizerUser;
		if(organizer==true){
			orgText=<p>(This is your event)</p>
		}
	const example = [{_id: 456789, fieldName:"does this work?", event: 34567},{_id: 567890, fieldName:"does it really?", event: 34567}]
		return <div className="container">
        <div className="row">
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="firstRow row">
          <div className="col-md-4">
            <h1 className="title"> {this.props.data[0].title}</h1>
            <h3>
              {moment(this.props.data[0].dateOfEvent).format(
                "MMMM Do YYYY"
              )}
            </h3>
            <h3>{moment(this.props.data[0].time).format("h A")}</h3>
            <h3>{this.props.data[0].location}</h3>
            <h4> Hosted by: {this.props.data[0].organizer.name}</h4>
            {orgText}
            <p className="eventDescription">
              {this.props.data[0].description}
            </p>
          </div>
          <div className="col-md-4">
            <Map1 location={this.state.location} title={this.props.data[0].title} />
          </div>
          <div className="col-md-4">
            <a className="thumbnail">
              <img src={this.state.img} />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="panel-body" />
            <EventRegistrationForm eventId={this.props.data[0]._id} attendees={this.props.data[0].attendees} specificFields={this.props.data[0].specificFields} />

            <br />
            <CommentDisplay eventId={this.props.data[0]._id} organizer={this.state.organizerUser} />
          </div>
          <div className="col-md-4" />
        	</div>
      </div>;
         
    
  }

}
