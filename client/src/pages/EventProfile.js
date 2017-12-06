import React, {Component} from 'react';  
import Bootstrap from "react-bootstrap";
import {EventDetails} from "../components/EventDetails";
import API from "../utils/API";


//need to pass eventId as a prop when this page is loaded

class EventProfile extends Component {
	constructor(props){
		super(props);
		this.state={
			data:null
		}
	}

	componentDidMount(){
		this.loadEvent();
	}

	loadEvent = () => {
		console.log(this.props.match.params.eventId);
		API.getEvent(this.props.match.params.eventId)
			.then(res => this.setState({data:res.data}))
			.catch(err =>console.log(err));
		console.log(this.state);
	}

	render() {
	    var eventId = this.props.match.params.eventId;
	    console.log(eventId);
	    if (this.state.data){
	    	return (
				
	       		<EventDetails id={eventId} data={this.state.data}/>	     
	    	);
	    }

	    return(<div> Loading... </div>);  
	}
}

export default EventProfile;