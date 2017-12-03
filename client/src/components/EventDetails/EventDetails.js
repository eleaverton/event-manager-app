//this component will populate based on a get API call
//based on the id(?) of the button clicked to get here

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

const storageRef = storage.ref("eventprofile/");

export class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }

  componentWillMount() {
    //  storageRef.child(this.props.id+"/img_fjords.jpg").getDownloadURL().then((url) => {
    // 	this.setState({img:url});
    //  });
    axios
      .get("/api/events/" + this.props.id)
      .then(res => {
        console.log(res);
        this.setState({ img: res.data[0].imageUrl });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    console.log(this.props);
    const background = {
      background: ""
    };
    return (<div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1> {this.props.data[0].title}</h1>
            <h3>{this.props.data[0].dateOfEvent}</h3>
            <h3>{this.props.data[0].time}</h3>
            <h3>{this.props.data[0].location}</h3>
            <h4> Hosted by: {this.props.data[0].organizer.name}</h4>
            <p className="eventDescription">
              {this.props.data[0].description}
            </p>
          </div>
		  <div className="col-md-4">
		  	<a  className="thumbnail">
				<img src={this.state.img} />
			</a>
          </div>
        </div>
          <div className="panel-body" />
          <EventRegistrationForm eventId={this.props.data[0]._id} attendees={this.props.data[0].attendees} specificFields={this.props.data[0].specificFields} />

          <br />
          <CommentDisplay eventId={this.props.data[0]._id} />
        
      </div>);
  }
}
